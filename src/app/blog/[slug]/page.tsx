import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight, Tag, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { articleSchema } from '@/lib/schema'

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  '5-pillars-perfect-prompt': {
    title: 'The 5 Pillars of a Perfect Prompt',
    excerpt: 'Learn the foundational anatomy of professional-grade AI instructions that produce consistent, high-quality results.',
    content: `
      <p>When it comes to getting great results from AI tools, the difference between a casual user and a professional often comes down to one thing: structure.</p>
      
      <p>After working with thousands of professionals and analyzing tens of thousands of prompts, I've identified five essential pillars that separate effective prompts from generic ones.</p>
      
      <h2>Pillar 1: Clear Context</h2>
      <p>Every effective prompt begins with context. This isn't just background information—it's the foundation that helps the AI understand your specific situation, constraints, and goals.</p>
      
      <h2>Pillar 2: Specific Instructions</h2>
      <p>Vague requests produce vague results. The most effective prompts include specific, actionable instructions that leave no room for interpretation.</p>
      
      <h2>Pillar 3: Output Format</h2>
      <p>Tell the AI exactly how you want the information presented. Whether it's a bulleted list, a structured report, or a specific format, clarity here saves time on the backend.</p>
      
      <h2>Pillar 4: Quality Criteria</h2>
      <p>Define what "good" looks like for your specific use case. This helps the AI prioritize the right information and present it in the most useful way.</p>
      
      <h2>Pillar 5: Iteration Framework</h2>
      <p>The best prompts are designed for refinement. Build in opportunities to improve and iterate on the output.</p>
      
      <p>Master these five pillars, and you'll transform from a casual AI user into a professional prompt architect.</p>
    `,
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Fundamentals',
    author: 'Eric Keller',
    image: '/images/blog/5-pillars.jpg',
  },
  'prompt-chain-method': {
    title: 'The Prompt Chain Method for Complex Projects',
    excerpt: 'Discover how to chain prompts together to manage complex projects from initial idea to polished final product.',
    content: `
      <p>Most AI users treat each prompt as an isolated request. But the real power comes from thinking about prompts as links in a chain—each one building on the previous to create something greater than the sum of its parts.</p>
      
      <p>The Prompt Chain Method is a systematic approach to breaking down complex projects into manageable, sequential prompts that work together to produce professional-quality results.</p>
      
      <h2>Step 1: Project Decomposition</h2>
      <p>Start by breaking your project into logical phases. Each phase should have a clear objective and deliverable.</p>
      
      <h2>Step 2: Prompt Sequencing</h2>
      <p>Design your prompts so that each one feeds into the next. The output of Prompt A becomes the input for Prompt B.</p>
      
      <h2>Step 3: Quality Gates</h2>
      <p>Build in checkpoints where you can review, refine, and redirect the work before moving to the next phase.</p>
      
      <h2>Step 4: Integration Strategy</h2>
      <p>Plan how the outputs from different prompts will come together into a cohesive final product.</p>
      
      <p>This method has helped teams complete projects 3x faster while maintaining higher quality standards.</p>
    `,
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Advanced Techniques',
    author: 'Eric Keller',
    image: '/images/blog/prompt-chain.jpg',
  },
  'ai-ethics-professionals': {
    title: 'AI Ethics for Professionals',
    excerpt: 'Navigate the critical landscape of data privacy, intellectual property, and quality control with AI tools.',
    content: `
      <p>As AI tools become more powerful and ubiquitous, professionals face new ethical challenges that didn't exist just a few years ago.</p>
      
      <p>From data privacy concerns to intellectual property questions, navigating the ethical landscape of AI requires a clear framework and practical guidelines.</p>
      
      <h2>Data Privacy and Security</h2>
      <p>Understanding what data you can safely share with AI tools and how to protect sensitive information.</p>
      
      <h2>Intellectual Property Considerations</h2>
      <p>Navigating copyright, trademark, and other IP issues when using AI-generated content.</p>
      
      <h2>Quality Control and Accountability</h2>
      <p>Maintaining professional standards and taking responsibility for AI-assisted work.</p>
      
      <h2>Transparency and Disclosure</h2>
      <p>When and how to disclose AI assistance in your professional work.</p>
      
      <p>By following these guidelines, you can use AI tools confidently while maintaining the highest professional standards.</p>
    `,
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Ethics & Safety',
    author: 'Eric Keller',
    image: '/images/blog/ai-ethics.jpg',
  },
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | The Art of the Prompt Blog`,
    description: post.excerpt,
    keywords: 'AI communication, prompt engineering, ChatGPT, professional AI',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  const schema = articleSchema({
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: post.author,
    image: post.image,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Header />
      
      <main>
        {/* Article Header */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Tag className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">{post.category}</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {post.title}
              </h1>
              
              <p className="mt-6 text-xl leading-8 text-gray-600">
                {post.excerpt}
              </p>
              
              <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="bg-white pb-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="prose prose-lg prose-blue max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">Share this article:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="py-16 sm:py-24 bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Want More Insights Like This?
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Get weekly AI communication tips and exclusive content delivered to your inbox
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-md">
              <NewsletterForm 
                variant="default"
                showPrivacy={true}
                showConsent={true}
                placeholder="Enter your email address"
                buttonText="Get Weekly Tips"
                className="bg-white p-8 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
        
        {/* Related Posts */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Related Articles
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Continue your AI communication journey
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Placeholder for related posts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link href="/blog/few-shot-prompting-guide" className="hover:text-blue-600">
                    Mastering Few-Shot Prompting
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how to use examples effectively in your prompts to get better results from AI models.
                </p>
                <Link
                  href="/blog/few-shot-prompting-guide"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link href="/blog/persona-layering-technique" className="hover:text-blue-600">
                    The Persona Layering Technique
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how to create sophisticated AI personas that produce more nuanced and professional outputs.
                </p>
                <Link
                  href="/blog/persona-layering-technique"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link href="/blog/ai-workflow-automation" className="hover:text-blue-600">
                    Building Your AI Workflow Automation
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step guide to creating repeatable AI workflows that save time and improve consistency.
                </p>
                <Link
                  href="/blog/ai-workflow-automation"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Book CTA */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Master AI Communication?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get the complete system with The Art of the Prompt
              </p>
            </div>
            
            <div className="mx-auto mt-12 max-w-md">
              <Card className="p-8 bg-blue-50 border-blue-200">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The Art of the Prompt
                  </h3>
                  <p className="text-gray-600 mb-6">
                    The complete guide to mastering AI communication and amplifying your work
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full">
                      <Link href="/book">
                        View the Book
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={process.env.NEXT_PUBLIC_AMAZON_BOOK_URL} target="_blank" rel="noopener noreferrer">
                        Buy on Amazon
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
