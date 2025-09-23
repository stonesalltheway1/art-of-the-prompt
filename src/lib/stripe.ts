// Stripe integration for signed paperback sales
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-02-24.acacia',
})

export interface CreateCheckoutSessionParams {
  priceId: string
  customerEmail?: string
  customerName?: string
  successUrl: string
  cancelUrl: string
  metadata?: Record<string, string>
}

export const createCheckoutSession = async ({
  priceId,
  customerEmail,
  customerName,
  successUrl,
  cancelUrl,
  metadata = {},
}: CreateCheckoutSessionParams) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      metadata: {
        ...metadata,
        customer_name: customerName || '',
      },
      success_url: successUrl,
      cancel_url: cancelUrl,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE'],
      },
      custom_fields: [
        {
          key: 'personalization',
          label: {
            type: 'custom',
            custom: 'Personalization (optional)',
          },
          type: 'text',
          optional: true,
        },
      ],
    })

    return { success: true, sessionId: session.id, url: session.url }
  } catch (error) {
    console.error('Stripe checkout session creation error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to create checkout session' 
    }
  }
}

export const retrieveCheckoutSession = async (sessionId: string) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'customer'],
    })
    return { success: true, session }
  } catch (error) {
    console.error('Stripe session retrieval error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to retrieve session' 
    }
  }
}

export const constructWebhookEvent = (body: string, signature: string) => {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    throw new Error('STRIPE_WEBHOOK_SECRET is not set')
  }

  try {
    return stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    throw error
  }
}

// Product information
export const SIGNED_BOOK_PRODUCT = {
  name: 'The Art of the Prompt - Signed Paperback',
  description: 'Signed paperback edition of The Art of the Prompt by Eric Keller',
  price: 2499, // $24.99 in cents
  currency: 'usd',
  image: '/images/book-cover.jpg',
}

// Shipping information
export const SHIPPING_OPTIONS = {
  standard: {
    name: 'Standard Shipping',
    description: '5-7 business days',
    price: 0, // Free shipping
  },
  priority: {
    name: 'Priority Shipping',
    description: '2-3 business days',
    price: 599, // $5.99 in cents
  },
}
