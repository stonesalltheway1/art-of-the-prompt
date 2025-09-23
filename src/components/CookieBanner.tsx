'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { X, Cookie, Settings } from 'lucide-react'
import { hasConsent, setConsent, initializeAnalytics } from '@/lib/analytics'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = hasConsent()
    if (consent === null) {
      setIsVisible(true)
    } else if (consent) {
      initializeAnalytics()
    }
  }, [])

  const handleAccept = () => {
    setConsent(true)
    setIsVisible(false)
    initializeAnalytics()
  }

  const handleDecline = () => {
    setConsent(false)
    setIsVisible(false)
  }

  const handleSettings = () => {
    setShowSettings(!showSettings)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-white shadow-lg border border-gray-200">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <Cookie className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                We use cookies to improve your experience
              </h3>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to provide, protect, and improve our services. 
                This includes analytics to understand how you use our site and marketing cookies to show you relevant content.
              </p>
              
              {showSettings && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Cookie Preferences</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Essential cookies (required)</span>
                      <span className="text-green-600 font-medium">Always active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Analytics cookies</span>
                      <span className="text-gray-500">Help us understand site usage</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Marketing cookies</span>
                      <span className="text-gray-500">Show relevant ads and content</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleAccept} className="flex-1 sm:flex-none">
                  Accept All
                </Button>
                <Button onClick={handleDecline} variant="outline" className="flex-1 sm:flex-none">
                  Decline
                </Button>
                <Button 
                  onClick={handleSettings} 
                  variant="ghost" 
                  size="sm"
                  className="flex-1 sm:flex-none"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                You can change your preferences at any time. Learn more in our{' '}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
