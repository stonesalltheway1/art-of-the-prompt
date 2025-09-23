import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerName, personalization } = body

    // Validate required fields
    if (!customerName) {
      return NextResponse.json(
        { success: false, error: 'Customer name is required' },
        { status: 400 }
      )
    }

    const priceId = process.env.STRIPE_SIGNED_BOOK_PRICE_ID
    if (!priceId) {
      return NextResponse.json(
        { success: false, error: 'Product configuration missing' },
        { status: 500 }
      )
    }

    // Create checkout session
    const result = await createCheckoutSession({
      priceId,
      customerName,
      successUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you-purchase`,
      cancelUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
      metadata: {
        product_type: 'signed_paperback',
        personalization: personalization || '',
      },
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        url: result.url,
        sessionId: result.sessionId,
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Checkout session creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
