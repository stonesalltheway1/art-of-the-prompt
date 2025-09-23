import { NextRequest, NextResponse } from 'next/server'
import { constructWebhookEvent } from '@/lib/stripe'
import { sendConfirmationEmail } from '@/lib/email-provider'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    // Construct the webhook event
    const event = constructWebhookEvent(body, signature)

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object
        
        // Send confirmation email
        if (session.customer_email) {
          await sendConfirmationEmail(session.customer_email, 'purchase')
        }
        
        console.log('Checkout session completed:', session.id)
        break

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object
        console.log('Payment succeeded:', paymentIntent.id)
        break

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object
        console.log('Payment failed:', failedPayment.id)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
}
