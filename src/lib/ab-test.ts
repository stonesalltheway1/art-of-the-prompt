// A/B Testing utilities
'use client'

export type TestVariant = 'A' | 'B'

export interface ABTest {
  name: string
  variants: {
    A: string
    B: string
  }
  cookieName: string
  duration: number // days
}

export const AB_TESTS: Record<string, ABTest> = {
  heroHeadline: {
    name: 'Hero Headline',
    variants: {
      A: 'Direct AI like a pro in minutes a day',
      B: 'Get expert level results from AI without guesswork'
    },
    cookieName: 'ab-hero-headline',
    duration: 7
  },
  bookPageCTA: {
    name: 'Book Page CTA Order',
    variants: {
      A: 'amazon-first',
      B: 'signed-first'
    },
    cookieName: 'ab-book-cta',
    duration: 7
  },
  leadMagnetTeaser: {
    name: 'Lead Magnet Teaser Copy',
    variants: {
      A: 'checklist-first',
      B: 'cheat-sheet-first'
    },
    cookieName: 'ab-lead-teaser',
    duration: 7
  }
}

export const getVariant = (testName: string): TestVariant => {
  if (typeof window === 'undefined') return 'A'
  
  const test = AB_TESTS[testName]
  if (!test) return 'A'
  
  // Check if variant is already stored in cookie
  const stored = getCookie(test.cookieName)
  if (stored && (stored === 'A' || stored === 'B')) {
    return stored as TestVariant
  }
  
  // Assign random variant
  const variant = Math.random() < 0.5 ? 'A' : 'B'
  setCookie(test.cookieName, variant, test.duration)
  
  return variant
}

export const getVariantContent = (testName: string): string => {
  const variant = getVariant(testName)
  const test = AB_TESTS[testName]
  return test ? test.variants[variant] : ''
}

export const isVariant = (testName: string, targetVariant: TestVariant): boolean => {
  return getVariant(testName) === targetVariant
}

// Cookie utilities
const setCookie = (name: string, value: string, days: number) => {
  if (typeof window === 'undefined') return
  
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null
  
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  
  return null
}

// UTM parameter utilities
export const getUTMParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  const utmParams: Record<string, string> = {}
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) {
      utmParams[key] = value
    }
  })
  
  return utmParams
}

export const storeUTMParams = (): void => {
  if (typeof window === 'undefined') return
  
  const utmParams = getUTMParams()
  if (Object.keys(utmParams).length > 0) {
    localStorage.setItem('utm_params', JSON.stringify(utmParams))
  }
}

export const getStoredUTMParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {}
  
  try {
    const stored = localStorage.getItem('utm_params')
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}
