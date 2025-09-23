// Analytics and tracking utilities
'use client'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
    ttq: (...args: unknown[]) => void
  }
}

// Google Analytics 4
export const trackGA4Event = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Meta Pixel
export const trackMetaEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// TikTok Pixel
export const trackTikTokEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq('track', eventName, parameters)
  }
}

// Common e-commerce events
export const trackPurchase = (value: number, currency = 'USD', transactionId?: string) => {
  const parameters = {
    value,
    currency,
    transaction_id: transactionId,
  }
  
  trackGA4Event('purchase', parameters)
  trackMetaEvent('Purchase', parameters)
  trackTikTokEvent('CompletePayment', parameters)
}

export const trackLead = (value?: number) => {
  const parameters = value ? { value } : {}
  
  trackGA4Event('generate_lead', parameters)
  trackMetaEvent('Lead', parameters)
  trackTikTokEvent('CompleteRegistration', parameters)
}

export const trackViewItem = (itemId: string, value?: number) => {
  const parameters = {
    item_id: itemId,
    value,
  }
  
  trackGA4Event('view_item', parameters)
  trackMetaEvent('ViewContent', parameters)
  trackTikTokEvent('ViewContent', parameters)
}

export const trackAddToCart = (itemId: string, value?: number) => {
  const parameters = {
    item_id: itemId,
    value,
  }
  
  trackGA4Event('add_to_cart', parameters)
  trackMetaEvent('AddToCart', parameters)
  trackTikTokEvent('AddToCart', parameters)
}

export const trackBeginCheckout = (value?: number) => {
  const parameters = value ? { value } : {}
  
  trackGA4Event('begin_checkout', parameters)
  trackMetaEvent('InitiateCheckout', parameters)
  trackTikTokEvent('InitiateCheckout', parameters)
}

// Cookie consent management
export const hasConsent = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('cookie-consent') === 'accepted'
}

export const setConsent = (accepted: boolean) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'declined')
  
  if (accepted) {
    // Initialize tracking scripts
    initializeAnalytics()
  }
}

export const initializeAnalytics = () => {
  if (typeof window === 'undefined') return
  
  // Initialize GA4
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    window.gtag = window.gtag || function(...args: unknown[]) {
      const gtag = window.gtag as unknown as { q: unknown[] }
      gtag.q = gtag.q || []
      gtag.q.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)
  }
  
  // Initialize Meta Pixel
  if (process.env.NEXT_PUBLIC_META_PIXEL_ID) {
    window.fbq = window.fbq || function(...args: unknown[]) {
      const fbq = window.fbq as unknown as { q: unknown[] }
      fbq.q = fbq.q || []
      fbq.q.push(args)
    }
    window.fbq('init', process.env.NEXT_PUBLIC_META_PIXEL_ID)
    window.fbq('track', 'PageView')
  }
  
  // Initialize TikTok Pixel
  if (process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID) {
    window.ttq = window.ttq || function(...args: unknown[]) {
      const ttq = window.ttq as unknown as { q: unknown[] }
      ttq.q = ttq.q || []
      ttq.q.push(args)
    }
    window.ttq('init', process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID)
    window.ttq('track', 'PageView')
  }
}
