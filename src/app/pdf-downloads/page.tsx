import { Metadata } from 'next'
import { MainGuidePDF, QuickReferencePDF, PromptLibraryPDF } from '@/components/PDFDownload'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Star, Users, Award, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional PDF Downloads | The Art of the Prompt',
  description: 'Download professionally designed PDF guides for AI communication. Includes the complete Professional Prompting Pack with templates, checklists, and implementation guides.',
  keywords: 'AI communication PDF, prompt templates, professional guides, AI productivity tools',
}

export default function PDFDownloadsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="text-sm text-gray-500">
              Professional PDF Collection
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Professional AI Communication
            <span className="block text-blue-600">PDF Collection</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download professionally designed guides that transform your AI interactions. 
            Each PDF is optimized for accessibility, readability, and real-world application.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mx-auto mb-2">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">WCAG</div>
              <div className="text-sm text-gray-600">Accessible</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Instant</div>
              <div className="text-sm text-gray-600">Download</div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Downloads */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 lg:gap-12">
            
            {/* Main Guide */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Complete Professional Collection
                  </h2>
                  <p className="text-gray-600">
                    Everything you need to master AI communication in one comprehensive package.
                  </p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              <MainGuidePDF className="mb-6" />
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      5 Pillars framework with examples
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      Professional prompt formula
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      30-day implementation roadmap
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      Quality assurance checklist
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      Success metrics tracking
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      Professional templates
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Reference and Prompt Library */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Reference Tools
                </h2>
                <QuickReferencePDF />
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Desk reference while working</li>
                    <li>• Team training materials</li>
                    <li>• Quick quality checks</li>
                    <li>• Printable laminated cards</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Template Library
                </h2>
                <PromptLibraryPDF />
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 25 professional templates</li>
                    <li>• Copy-paste ready formats</li>
                    <li>• Customization guidelines</li>
                    <li>• Industry-specific examples</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Choose Our Professional PDFs?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Professional Design
              </h3>
              <p className="text-gray-600 text-sm">
                2025 industry standards for accessibility, readability, and visual appeal.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Instant Implementation
              </h3>
              <p className="text-gray-600 text-sm">
                Copy-paste templates and step-by-step guides for immediate results.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Team Ready
              </h3>
              <p className="text-gray-600 text-sm">
                Perfect for sharing with teams and training new members.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your AI Communication?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals already using these techniques to amplify their work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/free-chapter">
                Get Free Chapter First
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link href="/book">
                See the Complete Book
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
