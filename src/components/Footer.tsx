import Link from 'next/link'
import { BookOpen, Mail, Twitter, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const navigation = {
  main: [
    { name: 'Book', href: '/book' },
    { name: 'Free Chapter', href: '/free-chapter' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/erickeller',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/erickeller',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/erickeller',
      icon: Github,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Newsletter signup */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">The Art of the Prompt</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Get the Starter Pack
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Join thousands of professionals getting better AI results with our free templates and guides.
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <Label htmlFor="footer-email" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="footer-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full"
                  placeholder="Enter your email"
                />
              </div>
              <Button type="submit" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Get Free Templates
              </Button>
            </form>
            <p className="text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          
          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Book</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social links and copyright */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-500 sm:mt-0">
              &copy; {new Date().getFullYear()} Eric Keller. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
