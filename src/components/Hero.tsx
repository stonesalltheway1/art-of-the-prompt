"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Star, CheckCircle, Download } from "lucide-react"
import { getVariantContent } from "@/lib/ab-test"

interface HeroProps {
  variant?: "home" | "book" | "free-chapter"
  className?: string
}

export default function Hero({ variant = "home", className = "" }: HeroProps) {
  const [headline, setHeadline] = useState("")

  useEffect(() => {
    if (variant === "home") {
      setHeadline(getVariantContent("heroHeadline"))
    }
  }, [variant])

  if (variant === "book") {
    return (
      <section className={`bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24 ${className}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The Art of the Prompt
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
               A Professional&apos;s Guide to Mastering AI Communication and Amplifying Your Work
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === "free-chapter") {
    return (
      <section className={`bg-gradient-to-br from-green-50 to-emerald-100 py-16 sm:py-24 ${className}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get the First Chapter and the Starter Pack
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See the system in action and get 25 ready-to-use professional prompts
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Professional Prompting Checklist
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Five Pillars Cheat Sheet
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                25 Ready-to-Use Prompts
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                 {headline || "Direct AI like a pro in minutes a day"}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The book that gives you a simple system to get clear, consistent results with AI. 
                Stop getting generic answers. Start building your professional future.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/free-chapter">
                    <Download className="h-5 w-5 mr-2" />
                    Get the Starter Pack free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link href="/book">
                    See the book
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust badges */}
              <div className="mt-8 flex items-center gap-x-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Free shipping
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  30-day returns
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Secure checkout
                </div>
              </div>
            </div>
            
            {/* Book cover mockup */}
            <div className="relative mb-8">
              <Card className="p-8 bg-white shadow-2xl">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
                  <Image
                    src="/images/book-cover.jpg"
                    alt="The Art of the Prompt book cover"
                    fill
                    className="object-contain rounded-lg shadow-lg"
                    priority
                  />
                  {/* 3D effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-lg" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                  #1 Bestseller
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New Release
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
