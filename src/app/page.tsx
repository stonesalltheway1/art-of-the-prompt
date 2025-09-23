import { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import NewsletterForm from "@/components/NewsletterForm"
import TestimonialCard from "@/components/TestimonialCard"
import SocialProofStrip from "@/components/SocialProofStrip"
import CookieBanner from "@/components/CookieBanner"
import { websiteSchema, bookSchema, authorSchema } from "@/lib/schema"
import { CheckCircle, Copy, Zap, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Art of the Prompt - Master AI Communication Like a Pro",
  description: "Stop getting generic AI answers. Get the book that gives you a simple system to get clear, consistent results with AI. Free Starter Pack included.",
  keywords: "AI prompts, ChatGPT, artificial intelligence, professional AI, prompt engineering, AI communication",
  openGraph: {
    title: "The Art of the Prompt - Master AI Communication Like a Pro",
    description: "Stop getting generic AI answers. Get the book that gives you a simple system to get clear, consistent results with AI.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "The Art of the Prompt",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "The Art of the Prompt book cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Art of the Prompt - Master AI Communication Like a Pro",
    description: "Stop getting generic AI answers. Get the book that gives you a simple system to get clear, consistent results with AI.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/og-home.jpg`],
  },
}

const benefits = [
  {
    icon: CheckCircle,
    title: "Clear System",
    description: "Learn the 5 Pillars of a Perfect Prompt with a proven methodology that works every time.",
  },
  {
    icon: Copy,
    title: "Copy and Paste Prompts",
    description: "Get 50+ ready-to-use professional templates for research, writing, analysis, and more.",
  },
  {
    icon: Zap,
    title: "Works with Any AI Tool",
    description: "Master universal principles that work with ChatGPT, Claude, Gemini, and any AI platform.",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechCorp",
    content: "This book transformed how I work with AI. I went from getting generic responses to producing professional-quality content in half the time.",
    rating: 5,
    featured: true,
  },
  {
    name: "Michael Rodriguez",
    role: "Software Engineer",
    company: "StartupXYZ",
    content: "Clear and practical. I used one template and cut my edit time in half. The prompt chain method is a game-changer.",
    rating: 5,
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Professor",
    company: "University of California",
    content: "As an academic, I was skeptical about AI tools. This book showed me how to use them ethically and effectively for research and writing.",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      
      <Header />
      
      <main>
        <Hero />
        
        <SocialProofStrip />
        
        {/* Value Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why This Book is Different
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Most AI guides give you tips. This book gives you a system.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <benefit.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {benefit.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{benefit.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
        
        {/* Proof Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Professionals Are Saying
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join thousands of professionals who&apos;ve transformed their AI workflow
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-lg font-semibold text-gray-900">4.8/5</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Lead Capture Section */}
        <section className="py-16 sm:py-24 bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get the Starter Pack Free
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                See the system in action with 25 ready-to-use professional prompts, 
                the Five Pillars Cheat Sheet, and the Professional Prompting Checklist.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-md">
              <NewsletterForm 
                variant="default"
                showPrivacy={true}
                showConsent={true}
                className="bg-white p-8 rounded-lg shadow-xl"
              />
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-blue-100">
                Join 10,000+ professionals getting better AI results
              </p>
            </div>
          </div>
        </section>
        
        {/* SEO Teaser - Latest Blog Posts */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Latest Insights
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Stay ahead with the latest AI communication strategies and prompt engineering techniques.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Placeholder blog posts */}
              <article className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2024-01-15" className="text-gray-500">
                      January 15, 2024
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href="/blog/5-pillars-perfect-prompt">
                        <span className="absolute inset-0" />
                        The 5 Pillars of a Perfect Prompt
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Learn the foundational anatomy of professional-grade AI instructions that produce consistent, high-quality results.
                    </p>
                  </div>
                </div>
              </article>
              
              <article className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2024-01-10" className="text-gray-500">
                      January 10, 2024
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href="/blog/prompt-chain-method">
                        <span className="absolute inset-0" />
                        The Prompt Chain Method for Complex Projects
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Discover how to chain prompts together to manage complex projects from initial idea to polished final product.
                    </p>
                  </div>
                </div>
              </article>
              
              <article className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2024-01-05" className="text-gray-500">
                      January 5, 2024
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href="/blog/ai-ethics-professionals">
                        <span className="absolute inset-0" />
                        AI Ethics for Professionals
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Navigate the critical landscape of data privacy, intellectual property, and quality control with AI tools.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                View all articles →
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <CookieBanner />
    </>
  )
}