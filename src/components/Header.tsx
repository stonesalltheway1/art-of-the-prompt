'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, BookOpen, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const navigation = [
  { name: 'Book', href: '/book' },
  { name: 'Free Chapter', href: '/free-chapter' },
  { name: 'PDF Downloads', href: '/pdf-downloads' },
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">The Art of the Prompt</span>
            <div className="flex items-center">
              <Image 
                src="/images/logo.svg" 
                alt="The Art of the Prompt" 
                width={200} 
                height={60} 
                className="h-10 w-auto"
              />
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/free-chapter">
              <Download className="h-4 w-4 mr-2" />
              Free Chapter
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/book">Get the Book</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-gray-900">The Art of the Prompt</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-900 hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button asChild variant="outline" className="w-full">
                <Link href="/free-chapter" onClick={() => setMobileMenuOpen(false)}>
                  <Download className="h-4 w-4 mr-2" />
                  Free Chapter
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                  Get the Book
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
