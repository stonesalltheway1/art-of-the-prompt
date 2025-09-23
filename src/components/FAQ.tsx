'use client'

import { useState, useEffect, useMemo } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Search, 
  ChevronUp, 
  ChevronDown, 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle,
  ExternalLink,
  Hash
} from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
  tags?: string[]
  helpful?: number
  notHelpful?: number
  relatedLinks?: {
    text: string
    url: string
    external?: boolean
  }[]
  lastUpdated?: Date
  priority?: 'high' | 'medium' | 'low'
}

interface FAQCategory {
  id: string
  name: string
  description?: string
  color?: string
}

interface FAQProps {
  items: FAQItem[]
  categories?: FAQCategory[]
  className?: string
  title?: string
  subtitle?: string
  showSearch?: boolean
  showCategories?: boolean
  showVoting?: boolean
  showLastUpdated?: boolean
  showRelatedLinks?: boolean
  allowExpandAll?: boolean
  contactSupport?: {
    text: string
    url: string
  }
  onVote?: (itemId: string, vote: 'helpful' | 'not-helpful') => void
  onSearch?: (query: string) => void
  trackingPrefix?: string
}

export default function FAQ({ 
  items, 
  categories = [],
  className = '',
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions below',
  showSearch = true,
  showCategories = true,
  showVoting = false,
  showLastUpdated = false,
  showRelatedLinks = true,
  allowExpandAll = true,
  contactSupport,
  onVote,
  onSearch,
  trackingPrefix = 'faq'
}: FAQProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [votedItems, setVotedItems] = useState<Record<string, 'helpful' | 'not-helpful'>>({})

  // Generate FAQ structured data for SEO
  const faqStructuredData = useMemo(() => {
    const filteredItems = getFilteredItems()
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: filteredItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    }
  }, [getFilteredItems])

  // Filter items based on search and category
  function getFilteredItems() {
    return items.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }

  const filteredItems = getFilteredItems()

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    onSearch?.(query)
    
    // Track search events
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'faq_search', {
        search_term: query,
        event_category: trackingPrefix
      })
    }
  }

  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    
    // Track category filtering
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'faq_filter_category', {
        category: categoryId,
        event_category: trackingPrefix
      })
    }
  }

  // Handle voting
  const handleVote = (itemId: string, vote: 'helpful' | 'not-helpful') => {
    setVotedItems(prev => ({ ...prev, [itemId]: vote }))
    onVote?.(itemId, vote)
    
    // Track voting
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'faq_vote', {
        item_id: itemId,
        vote_type: vote,
        event_category: trackingPrefix
      })
    }
  }

  // Expand/collapse all items
  const handleExpandAll = () => {
    if (expandedItems.length === filteredItems.length) {
      setExpandedItems([])
    } else {
      setExpandedItems(filteredItems.map(item => item.id))
    }
  }

  // Generate anchor link
  const generateAnchor = (question: string) => {
    return question.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50)
  }

  // Copy link to clipboard
  const copyLink = async (anchor: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${anchor}`
    await navigator.clipboard.writeText(url)
  }

  useEffect(() => {
    // Handle URL hash navigation
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1)
      const item = items.find(item => generateAnchor(item.question) === hash)
      if (item) {
        setExpandedItems(prev => [...prev, item.id])
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [items])

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <section className={`py-16 ${className}`} aria-labelledby="faq-title">
        <div className="mx-auto max-w-4xl px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 id="faq-title" className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {showSearch && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                  aria-label="Search FAQ questions"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Categories */}
              {showCategories && categories.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <Search className="h-4 w-4 text-gray-500" />
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange('all')}
                  >
                    All Questions ({items.length})
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name} ({items.filter(item => item.category === category.id).length})
                    </Button>
                  ))}
                </div>
              )}

              {/* Expand All Toggle */}
              {allowExpandAll && filteredItems.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleExpandAll}
                  className="flex items-center gap-2"
                >
                  {expandedItems.length === filteredItems.length ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Collapse All
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Expand All
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Results Count */}
          {searchQuery && (
            <div className="mb-6 text-sm text-gray-600">
              Showing {filteredItems.length} of {items.length} questions
              {searchQuery && ` for "${searchQuery}"`}
            </div>
          )}

          {/* FAQ Items */}
          {filteredItems.length > 0 ? (
            <Accordion 
              type="multiple" 
              value={expandedItems}
              onValueChange={setExpandedItems}
              className="w-full space-y-4"
            >
              {filteredItems.map((item) => {
                const anchor = generateAnchor(item.question)
                const category = categories.find(cat => cat.id === item.category)
                
                return (
                  <AccordionItem 
                    key={item.id} 
                    value={item.id} 
                    id={anchor}
                    className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group">
                      <div className="flex-1 pr-4">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-relaxed">
                            {item.question}
                          </h3>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {item.priority === 'high' && (
                              <Badge variant="destructive" className="text-xs">
                                Popular
                              </Badge>
                            )}
                            {category && (
                              <Badge variant="secondary" className="text-xs">
                                {category.name}
                              </Badge>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                copyLink(anchor)
                              }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Copy link to this question"
                            >
                              <Hash className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-6 pb-6 overflow-hidden">
                      <div className="prose prose-gray max-w-none">
                        <div 
                          className="text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                        
                        {/* Related Links */}
                        {showRelatedLinks && item.relatedLinks && item.relatedLinks.length > 0 && (
                          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <h4 className="text-sm font-semibold text-blue-900 mb-3">
                              Related Resources
                            </h4>
                            <ul className="space-y-2">
                              {item.relatedLinks.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link
                                    href={link.url}
                                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                                    target={link.external ? '_blank' : '_self'}
                                    rel={link.external ? 'noopener noreferrer' : ''}
                                  >
                                    {link.text}
                                    {link.external && <ExternalLink className="h-3 w-3" />}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Voting and Meta Info */}
                        <div className="mt-6 flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                          <div className="flex items-center gap-4">
                            {showLastUpdated && item.lastUpdated && (
                              <span>
                                Updated {item.lastUpdated.toLocaleDateString()}
                              </span>
                            )}
                            
                            {showVoting && (
                              <div className="flex items-center gap-2">
                                <span>Was this helpful?</span>
                                <div className="flex items-center gap-1">
                                  <Button
                                    variant={votedItems[item.id] === 'helpful' ? 'default' : 'ghost'}
                                    size="sm"
                                    onClick={() => handleVote(item.id, 'helpful')}
                                    className="px-2 py-1 h-8"
                                  >
                                    <ThumbsUp className="h-3 w-3" />
                                    {item.helpful || 0}
                                  </Button>
                                  <Button
                                    variant={votedItems[item.id] === 'not-helpful' ? 'destructive' : 'ghost'}
                                    size="sm"
                                    onClick={() => handleVote(item.id, 'not-helpful')}
                                    className="px-2 py-1 h-8"
                                  >
                                    <ThumbsDown className="h-3 w-3" />
                                    {item.notHelpful || 0}
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          ) : (
            /* No Results */
            <Card className="text-center py-12">
              <CardContent>
                <div className="max-w-md mx-auto">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No questions found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {searchQuery 
                      ? `No questions match "${searchQuery}". Try a different search term.`
                      : 'No questions available in this category.'
                    }
                  </p>
                  {searchQuery && (
                    <Button
                      variant="outline"
                      onClick={() => handleSearch('')}
                      className="mr-2"
                    >
                      Clear Search
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contact Support CTA */}
          {contactSupport && (
            <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="text-center py-8">
                <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                </p>
                <Button asChild>
                  <Link href={contactSupport.url}>
                    {contactSupport.text}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  )
}

// Export types for external use
export type { FAQItem, FAQCategory, FAQProps }