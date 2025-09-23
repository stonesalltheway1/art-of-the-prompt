// Email provider integration (ConvertKit/MailerLite)
export interface EmailSubscriber {
  email: string
  firstName?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

export interface EmailProviderResponse {
  success: boolean
  message: string
  subscriberId?: string
}

// ConvertKit integration
export const subscribeToConvertKit = async (subscriber: EmailSubscriber): Promise<EmailProviderResponse> => {
  try {
    const formId = process.env.EMAIL_PROVIDER_FORM_ID
    const apiKey = process.env.EMAIL_PROVIDER_API_KEY
    
    if (!formId || !apiKey) {
      throw new Error('Email provider configuration missing')
    }
    
    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        email: subscriber.email,
        first_name: subscriber.firstName,
        fields: {
          utm_source: subscriber.utm_source,
          utm_medium: subscriber.utm_medium,
          utm_campaign: subscriber.utm_campaign,
          utm_term: subscriber.utm_term,
          utm_content: subscriber.utm_content,
        },
      }),
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to subscribe')
    }
    
    return {
      success: true,
      message: 'Successfully subscribed!',
      subscriberId: data.subscription?.id,
    }
  } catch (error) {
    console.error('ConvertKit subscription error:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to subscribe',
    }
  }
}

// MailerLite integration
export const subscribeToMailerLite = async (subscriber: EmailSubscriber): Promise<EmailProviderResponse> => {
  try {
    const apiKey = process.env.EMAIL_PROVIDER_API_KEY
    const groupId = process.env.EMAIL_PROVIDER_GROUP_ID || 'default'
    
    if (!apiKey) {
      throw new Error('Email provider configuration missing')
    }
    
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: subscriber.email,
        name: subscriber.firstName,
        groups: [groupId],
        fields: {
          utm_source: subscriber.utm_source,
          utm_medium: subscriber.utm_medium,
          utm_campaign: subscriber.utm_campaign,
          utm_term: subscriber.utm_term,
          utm_content: subscriber.utm_content,
        },
      }),
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to subscribe')
    }
    
    return {
      success: true,
      message: 'Successfully subscribed!',
      subscriberId: data.data?.id,
    }
  } catch (error) {
    console.error('MailerLite subscription error:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to subscribe',
    }
  }
}

// Generic email provider function
export const subscribeToEmailProvider = async (subscriber: EmailSubscriber): Promise<EmailProviderResponse> => {
  const provider = process.env.EMAIL_PROVIDER || 'convertkit'
  
  switch (provider.toLowerCase()) {
    case 'convertkit':
      return subscribeToConvertKit(subscriber)
    case 'mailerlite':
      return subscribeToMailerLite(subscriber)
    default:
      return subscribeToConvertKit(subscriber)
  }
}

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Send confirmation email (placeholder for future implementation)
export const sendConfirmationEmail = async (email: string, type: 'starter-pack' | 'purchase'): Promise<boolean> => {
  // This would integrate with your email provider's transactional email service
  // For now, return true as a placeholder
  console.log(`Sending ${type} confirmation email to ${email}`)
  return true
}
