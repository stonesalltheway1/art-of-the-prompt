'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Download, FileText, BookOpen, CheckSquare, Loader2 } from 'lucide-react'

interface PDFDownloadProps {
  type: 'main-guide' | 'quick-reference' | 'prompt-library'
  title: string
  description: string
  pages: string
  features: string[]
  className?: string
}

export default function PDFDownload({ 
  type, 
  title, 
  description, 
  pages, 
  features,
  className = '' 
}: PDFDownloadProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getIcon = () => {
    switch (type) {
      case 'main-guide':
        return <BookOpen className="h-8 w-8" />
      case 'quick-reference':
        return <CheckSquare className="h-8 w-8" />
      case 'prompt-library':
        return <FileText className="h-8 w-8" />
      default:
        return <FileText className="h-8 w-8" />
    }
  }

  const handleDownload = async () => {
    setIsGenerating(true)
    setError(null)

    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }

      // Get the PDF blob
      const blob = await response.blob()
      
      // Create download link
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = response.headers.get('content-disposition')?.split('filename=')[1]?.replace(/"/g, '') || `${type}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

    } catch (err) {
      setError('Failed to download PDF. Please try again.')
      console.error('PDF download error:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-3">
            {description}
          </p>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <FileText className="h-4 w-4 mr-1" />
            <span>{pages}</span>
          </div>
          
          <ul className="space-y-1 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
          
          <Button
            onClick={handleDownload}
            disabled={isGenerating}
            className="w-full sm:w-auto"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  )
}

// Pre-configured components for easy use
export function MainGuidePDF({ className }: { className?: string }) {
  return (
    <PDFDownload
      type="main-guide"
      title="Professional's Guide to AI Communication"
      description="Master the 5 Pillars framework with real-world examples and implementation strategies."
      pages="8-10 pages"
      features={[
        "Complete 5 Pillars framework explanation",
        "Professional prompt formula",
        "30-day implementation roadmap",
        "Quality assurance checklist",
        "Ready-to-use templates"
      ]}
      className={className}
    />
  )
}

export function QuickReferencePDF({ className }: { className?: string }) {
  return (
    <PDFDownload
      type="quick-reference"
      title="Quick Reference Card"
      description="Printable cheat sheet and checklist for professional AI communication."
      pages="2 pages"
      features={[
        "5 Pillars visual summary",
        "Emergency prompt formula",
        "Quality check questions",
        "Fillable checklist boxes",
        "Printer-friendly design"
      ]}
      className={className}
    />
  )
}

export function PromptLibraryPDF({ className }: { className?: string }) {
  return (
    <PDFDownload
      type="prompt-library"
      title="Professional Prompt Library"
      description="25 copy-paste templates organized by category with customization guides."
      pages="6-8 pages"
      features={[
        "25 professional prompt templates",
        "Organized by use case",
        "Difficulty ratings",
        "Customization instructions",
        "Industry-specific examples"
      ]}
      className={className}
    />
  )
}
