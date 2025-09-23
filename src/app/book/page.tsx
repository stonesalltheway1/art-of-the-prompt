import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import BookCover3D from '@/components/BookCover3D'
import FAQ from '@/components/FAQ'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { bookSchema, authorSchema, productSchema, faqSchema } from '@/lib/schema'
import { CheckCircle, Star, Download, BookOpen, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Art of the Prompt - Buy the Book | Eric Keller',
  description: 'Buy The Art of the Prompt by Eric Keller. Available on Amazon (Kindle & Paperback) or get a signed paperback edition. Master AI communication and amplify your work.',
  keywords: 'buy book, AI prompts, ChatGPT book, artificial intelligence book, prompt engineering, Eric Keller',
  openGraph: {
    title: 'The Art of the Prompt - Buy the Book',
    description: 'Buy The Art of the Prompt by Eric Keller. Master AI communication and amplify your work.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/book`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-book.jpg`,
        width: 1200,
        height: 630,
        alt: 'The Art of the Prompt book cover',
      },
    ],
  },
}

const whatYouWillLearn = [
  'Master the 5 Pillars of a Perfect Prompt with a proven methodology',
  'Leverage advanced techniques like Chain of Thought reasoning and Few-Shot prompting',
  'Execute high-value professional tasks with expert-level prompts and workflows',
  'Architect complex workflows using the groundbreaking Prompt Chain Method',
  'Build your own custom AI operating system and reusable prompt library',
]

const tableOfContents = [
  { chapter: 'Introduction', title: 'The Problem with Generic AI Results' },
  { chapter: 'Chapter 1', title: 'The 5 Pillars of a Perfect Prompt' },
  { chapter: 'Chapter 2', title: 'The Professional Toolkit' },
  { chapter: 'Chapter 3', title: 'High-Value Professional Tasks' },
  { chapter: 'Chapter 4', title: 'The Prompt Chain Method' },
  { chapter: 'Chapter 5', title: 'Personalizing and Scaling Your Work' },
  { chapter: 'Chapter 6', title: 'Prompting Safely and Ethically' },
  { chapter: 'Chapter 7', title: 'Building Your AI Operating System' },
  { chapter: 'Chapter 8', title: 'The 7-Day Challenge' },
  { chapter: 'Conclusion', title: 'Your Future as a Prompt Architect' },
]

const faqItems = [
  {
    id: 'book-different',
    question: 'What makes this book different from other AI guides?',
    answer: 'Most AI guides give you tips and tricks. This book provides a complete system with proven methodologies, ready-to-use templates, and a step-by-step approach to mastering AI communication in professional contexts.',
  },
  {
    id: 'technical-experience',
    question: 'Do I need technical experience to understand this book?',
    answer: 'No technical experience required. The book is written for professionals from all backgrounds - business leaders, marketers, developers, academics, and students. It focuses on practical application rather than technical theory.',
  },
  {
    id: 'ai-tools',
    question: 'Which AI tools does this book work with?',
    answer: 'The principles and techniques work with any AI tool - ChatGPT, Claude, Gemini, Perplexity, and others. The book teaches universal concepts that apply across all platforms.',
  },
  {
    id: 'starter-pack',
    question: 'What is included in the Starter Pack?',
    answer: 'The Starter Pack includes 25 ready-to-use professional prompts, the Five Pillars Cheat Sheet, and the Professional Prompting Checklist. It is delivered immediately after you join the newsletter.',
  },
  {
    id: 'results-timeline',
    question: 'How long does it take to see results?',
    answer: 'Most readers see immediate improvements after implementing the first few techniques. The book includes a 7-Day Challenge to help you build lasting habits and see significant results within a week.',
  },
  {
    id: 'money-back-guarantee',
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, Amazon offers a 30-day return policy for all book purchases. If you are not satisfied with your purchase, you can return it for a full refund.',
  },
  {
    id: 'signed-copy',
    question: 'Can I get a signed copy?',
    answer: 'Yes! We offer signed paperback editions through our website. These are personally signed by Eric Keller and include free shipping within the US.',
  },
  {
    id: 'book-outdated',
    question: 'Will this book become outdated as AI evolves?',
    answer: 'The book focuses on fundamental principles and methodologies that remain relevant regardless of AI advancements. The core concepts of clear communication, systematic thinking, and professional workflows are timeless.',
  },
]

const author = {
  name: 'Eric Keller',
  title: 'AI Communication Expert',
  bio: 'Eric Keller teaches teams to turn complex work into simple repeatable prompt systems. He writes a weekly newsletter with practical templates and teardown notes, helping thousands of professionals get better results from AI tools.',
  image: '/images/eric-keller.jpg',
  credentials: [
    '10+ years in AI and automation',
    'Trained 500+ professionals',
    'Weekly newsletter with 10,000+ subscribers',
    'Featured in major tech publications',
  ],
}

export default function BookPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      
      <Header />
      
      <main>
        <Hero variant='book' />
        
        <section className='py-16 sm:py-24 bg-white'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
              <div>
                <BookCover3D size='lg' />
              </div>
              
              <div className='flex flex-col justify-center'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                  The Art of the Prompt
                </h1>
                <p className='mt-6 text-xl leading-8 text-gray-600'>
                  A Professional Guide to Mastering AI Communication and Amplifying Your Work
                </p>
                
                <div className='mt-8 flex items-center space-x-4'>
                  <div className='flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className='h-5 w-5 fill-yellow-400 text-yellow-400' />
                    ))}
                  </div>
                </div>
                
                <div className='mt-8 space-y-4'>
                  <div className='flex items-center text-sm text-gray-600'>
                    <BookOpen className='h-5 w-5 mr-2 text-blue-600' />
                    250 pages • English • Published September 3, 2025
                  </div>
                  <div className='flex items-center text-sm text-gray-600'>
                    <Users className='h-5 w-5 mr-2 text-blue-600' />
                    Perfect for professionals, students, and business leaders
                  </div>
                </div>
                
                <div className='mt-8 space-y-4'>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <Button asChild size='lg' className='w-full sm:w-auto'>
                      <a href="https://www.amazon.com/Art-Prompt-Professionals-Communication-Amplifying-ebook/dp/B0FPK6Y2ZB" target='_blank' rel='noopener noreferrer'>
                        Kindle eBook - $2.99
                      </a>
                    </Button>
                    <Button asChild variant='outline' size='lg' className='w-full sm:w-auto'>
                      <a href="https://www.amazon.com/Art-Prompt-Professionals-Communication-Amplifying/dp/B0FQCPF6C5" target='_blank' rel='noopener noreferrer'>
                        Hardcover - $27.99
                      </a>
                    </Button>
                  </div>
                  <Button asChild variant='secondary' size='lg' className='w-full sm:w-auto'>
                    <Link href='/checkout'>
                      Get Signed Paperback - $24.99
                    </Link>
                  </Button>
                </div>
                
                <div className='mt-6 text-sm text-gray-500'>
                  <p>✓ Free shipping on signed copies</p>
                  <p>✓ 30-day return policy</p>
                  <p>✓ Instant Kindle delivery</p>
                  <p>✓ Available on Kindle Unlimited</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-gray-50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                What You Will Learn
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Transform from a casual AI user to a professional prompt architect
              </p>
            </div>
            
            <div className='mx-auto mt-16 max-w-2xl'>
              <ul className='space-y-4'>
                {whatYouWillLearn.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className='mx-auto mt-16 max-w-3xl'>
              <Card className='p-8 bg-blue-50 border-blue-200'>
                <blockquote className='text-lg italic text-gray-700 mb-4'>
                  {`"The gap between a casual user and a top-tier professional isn't knowing more AI tricks; it's having a system. This book gives you that system."`}
                </blockquote>
                <cite className='text-sm font-medium text-gray-600'>
                  — Eric Keller, The Art of the Prompt
                </cite>
              </Card>
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-white'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Inside the Book
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                A comprehensive guide to mastering AI communication
              </p>
            </div>
            
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
              {tableOfContents.map((item, index) => (
                <Card key={index} className='p-6'>
                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0'>
                      <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                        <span className='text-sm font-semibold text-blue-600'>{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900'>{item.chapter}</h3>
                      <p className='text-gray-600'>{item.title}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-blue-600'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Exclusive Bonuses
              </h2>
              <p className='mt-6 text-lg leading-8 text-blue-100'>
                Get these valuable resources when you purchase the book
              </p>
            </div>
            
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              <Card className='p-6 bg-white'>
                <div className='text-center'>
                  <Download className='h-12 w-12 text-blue-600 mx-auto mb-4' />
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Starter Pack</h3>
                  <p className='text-gray-600 text-sm'>
                    25 ready-to-use professional prompts, cheat sheet, and checklist
                  </p>
                </div>
              </Card>
              
              <Card className='p-6 bg-white'>
                <div className='text-center'>
                  <BookOpen className='h-12 w-12 text-blue-600 mx-auto mb-4' />
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Free Chapter</h3>
                  <p className='text-gray-600 text-sm'>
                    Read the first chapter and see the system in action
                  </p>
                </div>
              </Card>
              
              <Card className='p-6 bg-white'>
                <div className='text-center'>
                  <Users className='h-12 w-12 text-blue-600 mx-auto mb-4' />
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>Newsletter Access</h3>
                  <p className='text-gray-600 text-sm'>
                    Weekly tips, templates, and AI communication insights
                  </p>
                </div>
              </Card>
            </div>
            
            <div className='mt-12 text-center'>
              <Button asChild variant='secondary' size='lg'>
                <Link href='/free-chapter'>
                  Get Free Chapter & Starter Pack
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-gray-50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
              <div>
                <Image
                  src={author.image}
                  alt={author.name}
                  width={400}
                  height={400}
                  className='rounded-lg shadow-lg'
                />
              </div>
              
              <div className='flex flex-col justify-center'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  About the Author
                </h2>
                <h3 className='mt-4 text-xl font-semibold text-blue-600'>
                  {author.name}
                </h3>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  {author.bio}
                </p>
                
                <div className='mt-8'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-4'>Credentials</h4>
                  <ul className='space-y-2'>
                    {author.credentials.map((credential, index) => (
                      <li key={index} className='flex items-center text-gray-600'>
                        <CheckCircle className='h-5 w-5 text-green-500 mr-2' />
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-white'>
          <FAQ items={faqItems} />
        </section>
        
        <section className='py-16 sm:py-24 bg-gray-900'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Ready to Master AI Communication?
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Join thousands of professionals who have transformed their AI workflow
              </p>
            </div>
            
            <div className='mt-12 flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild size='lg' variant='secondary'>
                <a href="https://www.amazon.com/Art-Prompt-Professionals-Communication-Amplifying-ebook/dp/B0FPK6Y2ZB" target='_blank' rel='noopener noreferrer'>
                  Kindle eBook - $2.99
                </a>
              </Button>
              <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-gray-900'>
                <a href="https://www.amazon.com/Art-Prompt-Professionals-Communication-Amplifying/dp/B0FQCPF6C5" target='_blank' rel='noopener noreferrer'>
                  Hardcover - $27.99
                </a>
              </Button>
              <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-gray-900'>
                <Link href='/checkout'>
                  Signed Paperback - $24.99
                </Link>
              </Button>
            </div>
            
            <div className='mt-8 text-center text-sm text-gray-400'>
              <p>✓ Free shipping on signed copies • ✓ 30-day return policy • ✓ Available on Kindle Unlimited</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}