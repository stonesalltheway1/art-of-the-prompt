import { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Truck, Mail, BookOpen, Clock, Gift } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thank You for Your Purchase | The Art of the Prompt",
  description: "Thank you for purchasing The Art of the Prompt! Your signed paperback will be shipped within 2-3 business days.",
  robots: "noindex, nofollow",
}

export default function ThankYouPurchasePage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thank You for Your Purchase!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your signed paperback of The Art of the Prompt is being prepared
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Order Summary */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">The Art of the Prompt (Signed Paperback)</span>
                  <span className="font-medium">$24.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-semibold text-gray-900">$24.99</span>
                </div>
              </div>
            </Card>
            
            {/* Delivery Timeline */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Delivery Timeline
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Order Confirmed</h3>
                    <p className="text-sm text-gray-600">Payment processed successfully</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Book Signing</h3>
                    <p className="text-sm text-gray-600">Eric will personally sign your book</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Truck className="h-4 w-4 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Shipping</h3>
                    <p className="text-sm text-gray-600">Shipped within 2-3 business days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Delivery</h3>
                    <p className="text-sm text-gray-600">5-7 business days (US addresses)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* What"s Next */}
          <div className="mt-12">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                 What&apos;s Next?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
                  <p className="text-sm text-gray-600">
                    You&apos;ll receive a confirmation email with tracking information
                  </p>
                </div>
                
                <div className="text-center">
                  <Gift className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Get Your Bonuses</h3>
                  <p className="text-sm text-gray-600">
                    Access to the Starter Pack and exclusive resources
                  </p>
                </div>
                
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Start Reading</h3>
                  <p className="text-sm text-gray-600">
                    Your signed book will arrive ready to transform your AI workflow
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Newsletter CTA */}
          <div className="mt-12 text-center">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-600 mb-6">
                Get weekly tips, new templates, and exclusive insights from Eric
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/free-chapter">
                    Join the Newsletter
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link href="/blog">
                    Read the Blog
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Support */}
          <div className="mt-12">
            <Card className="p-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help?
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Questions about your order? Email us at support@PromptLabBook.com</p>
                <p>• Shipping updates will be sent to your email address</p>
                <p>• International shipping available - contact us for rates</p>
                <p>• 30-day return policy if not satisfied</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
