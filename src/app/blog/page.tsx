import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - AI Communication Tips & Insights | The Art of the Prompt',
  description: 'Read the latest insights on AI communication, prompt engineering, and professional AI workflows from Eric Keller.',
  keywords: 'AI blog, prompt engineering, AI communication, ChatGPT tips, professional AI',
  openGraph: {
    title: 'Blog - AI Communication Tips & Insights',
    description: 'Read the latest insights on AI communication and prompt engineering.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  },
}

const blogPosts = [
  {
    slug: '5-pillars-perfect-prompt',
    title: 'The 5 Pillars of a Perfect Prompt',
    excerpt: 'Learn the foundational anatomy of professional-grade AI instructions that produce consistent, high-quality results.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Fundamentals',
    featured: true,
  },
  {
    slug: 'prompt-chain-method',
    title: 'The Prompt Chain Method for Complex Projects',
    excerpt: 'Discover how to chain prompts together to manage complex projects from initial idea to polished final product.',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Advanced Techniques',
    featured: true,
  },
  {
    slug: 'ai-ethics-professionals',
    title: 'AI Ethics for Professionals',
    excerpt: 'Navigate the critical landscape of data privacy, intellectual property, and quality control with AI tools.',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Ethics & Safety',
    featured: false,
  },
  {
    slug: 'few-shot-prompting-guide',
    title: 'Mastering Few-Shot Prompting',
    excerpt: 'Learn how to use examples effectively in your prompts to get better results from AI models.',
    date: '2024-01-01',
    readTime: '6 min read',
    category: 'Techniques',
    featured: false,
  },
  {
    slug: 'persona-layering-technique',
    title: 'The Persona Layering Technique',
    excerpt: 'Discover how to create sophisticated AI personas that produce more nuanced and professional outputs.',
    date: '2023-12-28',
    readTime: '9 min read',
    category: 'Advanced Techniques',
    featured: false,
  },
  {
    slug: 'ai-workflow-automation',
    title: 'Building Your AI Workflow Automation',
    excerpt: 'Step-by-step guide to creating repeatable AI workflows that save time and improve consistency.',
    date: '2023-12-25',
    readTime: '15 min read',
    category: 'Workflow',
    featured: false,
  },
]

const categories = [
  'All',
  'Fundamentals',
  'Advanced Techniques',
  'Ethics & Safety',
  'Techniques',
  'Workflow',
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AI Communication Blog
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Insights, tips, and strategies for mastering AI communication and prompt engineering
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Featured Articles
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Start with these essential guides to AI communication
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Posts */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                All Articles
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Browse our complete collection of AI communication insights
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="mx-auto mt-16 max-w-2xl">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === 'All' ? 'default' : 'outline'}
                    size="sm"
                    className="mb-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Read
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="py-16 sm:py-24 bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Get the latest AI communication tips and insights delivered to your inbox
              </p>
            </div>
            
            <div className="mx-auto mt-12 max-w-md">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                />
                <Button className="px-8">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-blue-100">
                Join 10,000+ professionals getting better AI results
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
