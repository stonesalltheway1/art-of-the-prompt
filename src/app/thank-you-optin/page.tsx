import { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Download, Mail, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thank You - Check Your Email | The Art of the Prompt",
  description: "Thank you for subscribing! Check your email for the free chapter and starter pack download links.",
  robots: "noindex, nofollow",
}

export default function ThankYouOptInPage() {
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
              Check Your Email!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
               We&apos;ve sent the Starter Pack and free chapter to your email address
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* What&apos;s Next */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What&apos;s Next?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Check Your Email</h3>
                    <p className="text-sm text-gray-600">
                      Look for an email from Eric Keller with your download links
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Download className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Download Your Resources</h3>
                    <p className="text-sm text-gray-600">
                      Get your 25 prompts, cheat sheet, and checklist
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Read the Free Chapter</h3>
                    <p className="text-sm text-gray-600">
                      See the system in action with real examples
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Instant Download */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Instant Download
              </h2>
              <p className="text-gray-600 mb-4">
                 Can&apos;t wait for the email? Download your resources now:
              </p>
              
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href="/downloads/starter-pack.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Starter Pack
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <a href="/downloads/free-chapter.pdf" download>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Download Free Chapter
                  </a>
                </Button>
              </div>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready for the Full System?
              </h2>
              <p className="text-gray-600 mb-6">
                Get the complete book with all chapters, advanced techniques, and the 7-Day Challenge
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/book">
                    View the Book
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <a href={process.env.NEXT_PUBLIC_AMAZON_BOOK_URL} target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                  </a>
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Email Troubleshooting */}
          <div className="mt-12">
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                Don&apos;t See the Email?
              </h3>
              <div className="text-sm text-yellow-800 space-y-1">
                <p>• Check your spam/junk folder</p>
                <p>• Look for emails from eric@PromptLabBook.com</p>
                <p>• Add us to your contacts to ensure delivery</p>
                <p>• The email should arrive within 5 minutes</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
