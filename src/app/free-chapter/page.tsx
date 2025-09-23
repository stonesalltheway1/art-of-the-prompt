import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NewsletterForm from '@/components/NewsletterForm'
import { CheckCircle, Download, BookOpen, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Get Free Chapter & Starter Pack - The Art of the Prompt',
  description: 'Get the first chapter of The Art of the Prompt plus the Starter Pack with 25 professional prompts, cheat sheet, and checklist. Free download.',
  keywords: 'free chapter, AI prompts, starter pack, professional prompts, prompt templates',
  openGraph: {
    title: 'Get Free Chapter & Starter Pack - The Art of the Prompt',
    description: 'Get the first chapter plus the Starter Pack with 25 professional prompts, cheat sheet, and checklist.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/free-chapter`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-free-chapter.jpg`,
        width: 1200,
        height: 630,
        alt: 'Free Chapter and Starter Pack',
      },
    ],
  },
}

const starterPackItems = [
  {
    icon: BookOpen,
    title: 'Professional Prompting Checklist',
    description: 'A step-by-step checklist to ensure your prompts are professional-grade every time.',
  },
  {
    icon: Download,
    title: 'Five Pillars Cheat Sheet',
    description: 'Quick reference guide to the 5 Pillars of a Perfect Prompt for on-the-go use.',
  },
  {
    icon: Users,
    title: '25 Ready-to-Use Prompts',
    description: 'Professional templates for research, writing, analysis, planning, and more.',
  },
]

const benefits = [
  'See the system in action with real examples',
  'Get immediate value with ready-to-use prompts',
  'Join 10,000+ professionals getting better AI results',
  'Access to weekly tips and new templates',
]

export default function FreeChapterPage() {
  return (
    <>
      <Header />
      
      <main>
        <Hero variant='free-chapter' />
        
        <section className='py-16 sm:py-24 bg-white'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                What is in the Starter Pack
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Everything you need to start getting better AI results today
              </p>
            </div>
            
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              {starterPackItems.map((item, index) => (
                <div key={index} className='text-center'>
                  <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100'>
                    <item.icon className='h-8 w-8 text-blue-600' />
                  </div>
                  <h3 className='mt-6 text-lg font-semibold text-gray-900'>{item.title}</h3>
                  <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-blue-600'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Get Your Free Chapter & Starter Pack
              </h2>
              <p className='mt-6 text-lg leading-8 text-blue-100'>
                Enter your email below and we will send you everything instantly
              </p>
            </div>
            
            <div className='mx-auto mt-16 max-w-md'>
              <NewsletterForm 
                variant='default'
                showPrivacy={true}
                showConsent={true}
                placeholder='Enter your email address'
                buttonText='Get Free Chapter & Starter Pack'
                className='bg-white p-8 rounded-lg shadow-xl'
              />
            </div>
            
            <div className='mt-8 text-center'>
              <div className='flex items-center justify-center space-x-6 text-sm text-blue-100'>
                <div className='flex items-center'>
                  <Clock className='h-4 w-4 mr-1' />
                  Instant delivery
                </div>
                <div className='flex items-center'>
                  <Users className='h-4 w-4 mr-1' />
                  10,000+ subscribers
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-4 w-4 mr-1' />
                  No spam, ever
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-gray-50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Why Join Our Community
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Get access to exclusive resources and stay ahead of the AI curve
              </p>
            </div>
            
            <div className='mx-auto mt-16 max-w-2xl'>
              <ul className='space-y-4'>
                {benefits.map((benefit, index) => (
                  <li key={index} className='flex items-start'>
                    <CheckCircle className='h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-white'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Join Thousands of Professionals
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                See what our community is saying about the Starter Pack
              </p>
            </div>
            
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <p className='text-gray-700 mb-4'>
                  The checklist alone saved me hours of trial and error. Now I get consistent results every time.
                </p>
                <div className='text-sm'>
                  <div className='font-semibold text-gray-900'>Sarah M.</div>
                  <div className='text-gray-600'>Marketing Manager</div>
                </div>
              </div>
              
              <div className='bg-gray-50 p-6 rounded-lg'>
                <p className='text-gray-700 mb-4'>
                  The 25 prompts are gold. I use them daily for research, writing, and analysis.
                </p>
                <div className='text-sm'>
                  <div className='font-semibold text-gray-900'>Michael R.</div>
                  <div className='text-gray-600'>Software Engineer</div>
                </div>
              </div>
              
              <div className='bg-gray-50 p-6 rounded-lg'>
                <p className='text-gray-700 mb-4'>
                  The cheat sheet is my go-to reference. It has helped me become the AI expert on my team.
                </p>
                <div className='text-sm'>
                  <div className='font-semibold text-gray-900'>Dr. Emily W.</div>
                  <div className='text-gray-600'>Research Professor</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className='py-16 sm:py-24 bg-blue-600'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Ready to Get Started?
              </h2>
              <p className='mt-6 text-lg leading-8 text-blue-100'>
                Get your free chapter and starter pack now
              </p>
            </div>
            
            <div className='mt-12 text-center'>
              <Link
                href='#newsletter-form'
                className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors'
              >
                Get Free Chapter & Starter Pack
              </Link>
            </div>
            
            <div className='mt-8 text-center'>
              <p className='text-sm text-blue-100'>
                Already have the Starter Pack?{' '}
                <Link href='/book' className='text-white underline hover:text-blue-100'>
                  Check out the full book
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}