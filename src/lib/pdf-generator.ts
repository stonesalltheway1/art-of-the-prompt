import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

// Professional color palette
export const colors = {
  primary: '#2563EB',      // Professional Blue
  secondary: '#10B981',    // Success Green
  accent: '#F59E0B',       // Warning Orange
  text: '#374151',         // Dark Gray
  background: '#FFFFFF',   // White
  lightGray: '#F9FAFB',    // Light Gray sections
  darkGray: '#6B7280'      // Medium Gray
}

// Typography settings
export const typography = {
  fonts: {
    primary: 'Inter',
    code: 'Monaco'
  },
  sizes: {
    title: 24,
    heading: 18,
    subheading: 14,
    body: 11,
    caption: 9,
    code: 10
  },
  lineHeight: {
    title: 1.2,
    heading: 1.3,
    body: 1.4
  }
}

// Page settings
export const pageSettings = {
  format: 'letter', // 8.5" x 11"
  margins: {
    top: 54,    // 0.75"
    bottom: 54,
    left: 54,
    right: 54
  },
  bleed: 9      // 0.125"
}

export interface PDFSection {
  title: string
  content: string
  type: 'text' | 'checklist' | 'example' | 'callout' | 'code'
  color?: string
}

export class ProfessionalPDFGenerator {
  private doc: jsPDF
  private currentY: number = pageSettings.margins.top
  private pageWidth: number
  private pageHeight: number
  private contentWidth: number

  constructor() {
    this.doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: pageSettings.format
    })
    
    this.pageWidth = this.doc.internal.pageSize.getWidth()
    this.pageHeight = this.doc.internal.pageSize.getHeight()
    this.contentWidth = this.pageWidth - pageSettings.margins.left - pageSettings.margins.right
  }

  // Add header to every page
  private addHeader(title: string, pageNum?: number): void {
    const headerY = 30
    
    // Logo/Brand area
    this.doc.setFontSize(12)
    this.doc.setTextColor(colors.primary)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text('The Art of the Prompt', pageSettings.margins.left, headerY)
    
    // Document title
    this.doc.setFontSize(10)
    this.doc.setTextColor(colors.text)
    this.doc.setFont('helvetica', 'normal')
    this.doc.text(title, this.pageWidth / 2, headerY, { align: 'center' })
    
    // Page number
    if (pageNum) {
      this.doc.text(`Page ${pageNum}`, this.pageWidth - pageSettings.margins.right, headerY, { align: 'right' })
    }
    
    // Header line
    this.doc.setDrawColor(colors.lightGray)
    this.doc.setLineWidth(0.5)
    this.doc.line(pageSettings.margins.left, headerY + 10, this.pageWidth - pageSettings.margins.right, headerY + 10)
  }

  // Add footer to every page
  private addFooter(): void {
    const footerY = this.pageHeight - 30
    
    // Footer line
    this.doc.setDrawColor(colors.lightGray)
    this.doc.setLineWidth(0.5)
    this.doc.line(pageSettings.margins.left, footerY - 10, this.pageWidth - pageSettings.margins.right, footerY - 10)
    
    // Footer content
    this.doc.setFontSize(8)
    this.doc.setTextColor(colors.darkGray)
    this.doc.setFont('helvetica', 'normal')
    this.doc.text('PromptLabBook.com', pageSettings.margins.left, footerY)
    this.doc.text('© 2025 Eric Keller', this.pageWidth / 2, footerY, { align: 'center' })
    this.doc.text('Professional AI Communication Guide', this.pageWidth - pageSettings.margins.right, footerY, { align: 'right' })
  }

  // Check if we need a new page
  private checkPageBreak(requiredSpace: number): void {
    const availableSpace = this.pageHeight - pageSettings.margins.bottom - this.currentY - 60 // Footer space
    
    if (requiredSpace > availableSpace) {
      this.addNewPage()
    }
  }

  // Add new page with headers/footers
  private addNewPage(): void {
    this.addFooter()
    this.doc.addPage()
    this.currentY = pageSettings.margins.top + 50 // Space for header
  }

  // Add title section
  addTitle(title: string, subtitle?: string): void {
    this.doc.setFontSize(typography.sizes.title)
    this.doc.setTextColor(colors.primary)
    this.doc.setFont('helvetica', 'bold')
    
    const titleLines = this.doc.splitTextToSize(title, this.contentWidth)
    this.doc.text(titleLines, pageSettings.margins.left, this.currentY)
    this.currentY += titleLines.length * typography.sizes.title * typography.lineHeight.title
    
    if (subtitle) {
      this.currentY += 10
      this.doc.setFontSize(typography.sizes.subheading)
      this.doc.setTextColor(colors.text)
      this.doc.setFont('helvetica', 'normal')
      
      const subtitleLines = this.doc.splitTextToSize(subtitle, this.contentWidth)
      this.doc.text(subtitleLines, pageSettings.margins.left, this.currentY)
      this.currentY += subtitleLines.length * typography.sizes.subheading * typography.lineHeight.body
    }
    
    this.currentY += 20
  }

  // Add section with styling
  addSection(section: PDFSection): void {
    const sectionHeight = this.estimateSectionHeight(section)
    this.checkPageBreak(sectionHeight)

    // Section title
    if (section.title) {
      this.doc.setFontSize(typography.sizes.heading)
      this.doc.setTextColor(section.color || colors.primary)
      this.doc.setFont('helvetica', 'bold')
      
      const titleLines = this.doc.splitTextToSize(section.title, this.contentWidth)
      this.doc.text(titleLines, pageSettings.margins.left, this.currentY)
      this.currentY += titleLines.length * typography.sizes.heading * typography.lineHeight.heading + 10
    }

    // Content based on type
    switch (section.type) {
      case 'callout':
        this.addCalloutBox(section.content, section.color)
        break
      case 'code':
        this.addCodeBlock(section.content)
        break
      case 'checklist':
        this.addChecklist(section.content)
        break
      case 'example':
        this.addExampleBox(section.content)
        break
      default:
        this.addBodyText(section.content)
    }

    this.currentY += 15
  }

  // Add regular body text
  private addBodyText(text: string): void {
    this.doc.setFontSize(typography.sizes.body)
    this.doc.setTextColor(colors.text)
    this.doc.setFont('helvetica', 'normal')
    
    const lines = this.doc.splitTextToSize(text, this.contentWidth)
    this.doc.text(lines, pageSettings.margins.left, this.currentY)
    this.currentY += lines.length * typography.sizes.body * typography.lineHeight.body
  }

  // Add callout box
  private addCalloutBox(text: string, bgColor?: string): void {
    const padding = 10
    const boxColor = bgColor || colors.lightGray
    
    const lines = this.doc.splitTextToSize(text, this.contentWidth - (padding * 2))
    const boxHeight = lines.length * typography.sizes.body * typography.lineHeight.body + (padding * 2)
    
    // Draw box
    this.doc.setFillColor(boxColor)
    this.doc.setDrawColor(colors.primary)
    this.doc.setLineWidth(1)
    this.doc.roundedRect(pageSettings.margins.left, this.currentY - padding, this.contentWidth, boxHeight, 3, 3, 'FD')
    
    // Add text
    this.doc.setFontSize(typography.sizes.body)
    this.doc.setTextColor(colors.text)
    this.doc.setFont('helvetica', 'normal')
    this.doc.text(lines, pageSettings.margins.left + padding, this.currentY)
    
    this.currentY += boxHeight + 5
  }

  // Add code block
  private addCodeBlock(code: string): void {
    const padding = 10
    const lines = this.doc.splitTextToSize(code, this.contentWidth - (padding * 2))
    const boxHeight = lines.length * typography.sizes.code * 1.2 + (padding * 2)
    
    // Draw code box
    this.doc.setFillColor('#F8F9FA')
    this.doc.setDrawColor(colors.darkGray)
    this.doc.setLineWidth(0.5)
    this.doc.rect(pageSettings.margins.left, this.currentY - padding, this.contentWidth, boxHeight, 'FD')
    
    // Add code text
    this.doc.setFontSize(typography.sizes.code)
    this.doc.setTextColor('#2D3748')
    this.doc.setFont('courier', 'normal')
    this.doc.text(lines, pageSettings.margins.left + padding, this.currentY)
    
    this.currentY += boxHeight + 5
  }

  // Add checklist items
  private addChecklist(items: string): void {
    const itemList = items.split('\n').filter(item => item.trim())
    
    itemList.forEach(item => {
      // Checkbox
      this.doc.setDrawColor(colors.primary)
      this.doc.setLineWidth(1)
      this.doc.rect(pageSettings.margins.left, this.currentY - 8, 8, 8)
      
      // Item text
      this.doc.setFontSize(typography.sizes.body)
      this.doc.setTextColor(colors.text)
      this.doc.setFont('helvetica', 'normal')
      
      const itemText = item.replace(/^[-•]\s*/, '')
      const lines = this.doc.splitTextToSize(itemText, this.contentWidth - 20)
      this.doc.text(lines, pageSettings.margins.left + 15, this.currentY)
      
      this.currentY += Math.max(lines.length * typography.sizes.body * typography.lineHeight.body, 12) + 3
    })
  }

  // Add example box
  private addExampleBox(content: string): void {
    this.addCalloutBox(content, colors.secondary + '20') // Light green background
  }

  // Estimate section height for page breaks
  private estimateSectionHeight(section: PDFSection): number {
    const titleHeight = section.title ? typography.sizes.heading * typography.lineHeight.heading + 10 : 0
    const contentLines = Math.ceil(section.content.length / 80) // Rough estimate
    const contentHeight = contentLines * typography.sizes.body * typography.lineHeight.body
    
    return titleHeight + contentHeight + 40 // Extra padding
  }

  // Add table of contents
  addTableOfContents(sections: { title: string; page: number }[]): void {
    this.addTitle('Table of Contents')
    
    sections.forEach(section => {
      this.doc.setFontSize(typography.sizes.body)
      this.doc.setTextColor(colors.text)
      this.doc.setFont('helvetica', 'normal')
      
      // Title
      this.doc.text(section.title, pageSettings.margins.left, this.currentY)
      
      // Page number
      this.doc.text(section.page.toString(), this.pageWidth - pageSettings.margins.right, this.currentY, { align: 'right' })
      
      // Dotted line
      const titleWidth = this.doc.getTextWidth(section.title)
      const pageNumWidth = this.doc.getTextWidth(section.page.toString())
      const dotsWidth = this.contentWidth - titleWidth - pageNumWidth - 20
      const dotCount = Math.floor(dotsWidth / 4)
      const dots = '.'.repeat(dotCount)
      
      this.doc.text(dots, pageSettings.margins.left + titleWidth + 10, this.currentY)
      
      this.currentY += typography.sizes.body * typography.lineHeight.body + 5
    })
    
    this.addNewPage()
  }

  // Generate and return PDF
  generatePDF(): Uint8Array {
    const buffer = this.doc.output('arraybuffer') as ArrayBuffer
    return new Uint8Array(buffer)
  }

  // Save PDF to file
  savePDF(filename: string): void {
    this.doc.save(filename)
  }

  // Get PDF as blob for upload
  getPDFBlob(): Blob {
    return this.doc.output('blob')
  }
}
