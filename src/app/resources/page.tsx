import { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Mail, Image, FileText, Users, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Resources & Media Kit - The Art of the Prompt",
  description: "Download press materials, author photos, book covers, and resources for The Art of the Prompt by Eric Keller.",
  keywords: "media kit, press materials, author resources, book promotion, Eric Keller",
  openGraph: {
    title: "Resources & Media Kit - The Art of the Prompt",
    description: "Download press materials, author photos, book covers, and resources.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/resources`,
  },
}

const resources = [
  {
    category: "Book Assets",
    items: [
      {
        name: "Book Cover (High Res)",
        description: "High-resolution book cover image for print and digital use",
        icon: Image,
        downloadUrl: "/downloads/book-cover-hires.jpg",
        fileSize: "2.1 MB",
      },
      {
        name: "Book Cover (Web)",
        description: "Optimized book cover for web use and social media",
        icon: Image,
        downloadUrl: "/downloads/book-cover-web.jpg",
        fileSize: "450 KB",
      },
      {
        name: "Book Cover (Thumbnail)",
        description: "Small thumbnail version for lists and previews",
        icon: Image,
        downloadUrl: "/downloads/book-cover-thumb.jpg",
        fileSize: "120 KB",
      },
    ],
  },
  {
    category: "Author Assets",
    items: [
      {
        name: "Author Photo (High Res)",
        description: "Professional headshot for print and digital use",
        icon: Users,
        downloadUrl: "/downloads/eric-keller-hires.jpg",
        fileSize: "1.8 MB",
      },
      {
        name: "Author Photo (Web)",
        description: "Optimized author photo for web and social media",
        icon: Users,
        downloadUrl: "/downloads/eric-keller-web.jpg",
        fileSize: "320 KB",
      },
    ],
  },
  {
    category: "Press Materials",
    items: [
      {
        name: "Press Release",
        description: "Official press release for The Art of the Prompt",
        icon: FileText,
        downloadUrl: "/downloads/press-release.pdf",
        fileSize: "180 KB",
      },
      {
        name: "Author Bio (Short)",
        description: "Brief author biography for introductions and bios",
        icon: FileText,
        downloadUrl: "/downloads/author-bio-short.txt",
        fileSize: "2 KB",
      },
      {
        name: "Author Bio (Long)",
        description: "Detailed author biography for profiles and articles",
        icon: FileText,
        downloadUrl: "/downloads/author-bio-long.txt",
        fileSize: "5 KB",
      },
      {
        name: "Sample Q&A",
        description: "Frequently asked questions and sample interview responses",
        icon: MessageSquare,
        downloadUrl: "/downloads/sample-qa.pdf",
         fileSize: "95 KB",
      },
    ],
  },
]

const pressQuotes = [
  {
    quote: "The Art of the Prompt is a game-changer for anyone serious about AI communication. Eric&apos;s systematic approach transforms how you interact with AI tools.",
    author: "Dr. Sarah Chen",
    title: "AI Research Director, TechCorp",
  },
  {
    quote: "Finally, a book that goes beyond tips and tricks to provide a complete methodology. This is the AI communication guide professionals have been waiting for.",
    author: "Michael Rodriguez",
    title: "Software Engineer, StartupXYZ",
  },
  {
    quote: "Eric Keller has created the definitive guide to professional AI communication. The prompt chain method alone is worth the price of admission.",
    author: "Dr. Emily Watson",
    title: "Research Professor, UC Berkeley",
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Resources & Media Kit
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Download press materials, author photos, book covers, and resources for The Art of the Prompt
              </p>
            </div>
          </div>
        </section>
        
        {/* Resources Grid */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-16">
              {resources.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {category.category}
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <item.icon className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">
                                {item.fileSize}
                              </span>
                              <Button asChild size="sm" variant="outline">
                                <a href={item.downloadUrl} download>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Press Quotes */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Press Quotes
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                What industry experts are saying about The Art of the Prompt
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {pressQuotes.map((quote, index) => (
                <Card key={index} className="p-6">
                  <blockquote className="text-gray-700 mb-4">
                    &ldquo;{quote.quote}&rdquo;
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{quote.author}</div>
                    <div className="text-gray-600">{quote.title}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 sm:py-24 bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need More Information?
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Contact us for interviews, speaking engagements, or additional resources
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-md">
              <Card className="p-8 bg-white">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Tell us about your interview, speaking opportunity, or resource request..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-blue-100">
                 Or email us directly at{' '}
                <a href="mailto:press@PromptLabBook.com" className="text-white underline hover:text-blue-100">
                  press@PromptLabBook.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
