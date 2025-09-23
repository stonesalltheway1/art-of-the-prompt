'use client'

import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { BookOpen, Loader2, CheckCircle, Truck, Shield } from 'lucide-react'
import { trackBeginCheckout, trackAddToCart } from '@/lib/analytics'
import Image from 'next/image'

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [personalization, setPersonalization] = useState('')
  // const router = useRouter()

  const handleCheckout = async () => {
    if (!customerName.trim()) {
      alert('Please enter your name for personalization')
      return
    }

    setIsLoading(true)
    
    try {
      // Track the checkout initiation
      trackBeginCheckout(24.99)
      trackAddToCart('signed-paperback', 24.99)

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: customerName.trim(),
          personalization: personalization.trim() || undefined,
        }),
      })

      const data = await response.json()

      if (data.success && data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        throw new Error(data.error || 'Failed to create checkout session')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get Your Signed Paperback
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Personally signed by Eric Keller with free shipping
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Product Details */}
              <div>
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-24 h-32 flex-shrink-0">
                      <Image
                        src="/images/book-cover.jpg"
                        alt="The Art of the Prompt book cover"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900">
                        The Art of the Prompt
                      </h2>
                      <p className="text-gray-600 mt-1">
                        Signed Paperback Edition
                      </p>
                      <div className="mt-4 flex items-center space-x-4">
                        <span className="text-2xl font-bold text-gray-900">$24.99</span>
                        <span className="text-sm text-green-600 font-medium">Free shipping</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Personally signed by Eric Keller
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Truck className="h-4 w-4 text-green-500 mr-2" />
                      Free shipping within the US
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      Secure checkout with Stripe
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Checkout Form */}
              <div>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Personalization Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="customerName" className="text-sm font-medium text-gray-700">
                        Your Name *
                      </Label>
                      <Input
                        id="customerName"
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="mt-1"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        This will be used for personalization and shipping
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="personalization" className="text-sm font-medium text-gray-700">
                        Personalization Message (Optional)
                      </Label>
                      <Textarea
                        id="personalization"
                        value={personalization}
                        onChange={(e) => setPersonalization(e.target.value)}
                        placeholder="e.g., 'Keep up the great work!' or 'Looking forward to your next book!'"
                        rows={3}
                        className="mt-1"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Leave blank for a standard signature
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button
                      onClick={handleCheckout}
                      disabled={isLoading || !customerName.trim()}
                      className="w-full"
                      size="lg"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-5 w-5 mr-2" />
                          Proceed to Checkout - $24.99
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      Secure checkout powered by Stripe
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  What to Expect
                </h3>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>• Your book will be personally signed by Eric Keller</p>
                  <p>• Free shipping within the United States (5-7 business days)</p>
                  <p>• International shipping available at checkout</p>
                  <p>• 30-day return policy if not satisfied</p>
                </div>
              </div>
            </div>
            
            {/* Alternative Options */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Prefer digital?{' '}
                <a
                  href={process.env.NEXT_PUBLIC_AMAZON_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Get the Kindle edition on Amazon
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
