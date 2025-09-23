import { NextRequest, NextResponse } from 'next/server'
import { subscribeToEmailProvider } from '@/lib/email-provider'
import { isValidEmail } from '@/lib/email-provider'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, consent, ...utmParams } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, message: 'Please accept the privacy policy' },
        { status: 400 }
      )
    }

    // Subscribe to email provider
    const result = await subscribeToEmailProvider({
      email,
      firstName,
      ...utmParams,
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed!',
        subscriberId: result.subscriberId,
      })
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
