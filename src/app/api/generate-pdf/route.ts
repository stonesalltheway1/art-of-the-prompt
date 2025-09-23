import { NextRequest, NextResponse } from 'next/server'
import { ProfessionalPDFGenerator } from '@/lib/pdf-generator'
import { mainGuideContent, quickReferenceContent, promptLibraryContent } from '@/lib/pdf-content'

export async function POST(request: NextRequest) {
  try {
    const { type } = await request.json()
    
    const generator = new ProfessionalPDFGenerator()
    let filename = ''
    
    switch (type) {
      case 'main-guide':
        filename = 'Professional-Prompting-Guide-v1.pdf'
        
        // Add cover page
        generator.addTitle(
          mainGuideContent.title,
          mainGuideContent.subtitle
        )
        
        // Add author info
        generator.addSection({
          title: '',
          content: `By ${mainGuideContent.author}\n\nA comprehensive guide to mastering AI communication for professional results.\n\nPublished 2025 • PromptLabBook.com`,
          type: 'text'
        })
        
        // Add table of contents
        const tocSections = mainGuideContent.sections.map((section, index) => ({
          title: section.title,
          page: index + 3 // Assuming cover + TOC takes 2 pages
        }))
        generator.addTableOfContents(tocSections)
        
        // Add all sections
        mainGuideContent.sections.forEach(section => {
          generator.addSection(section)
        })
        break
        
      case 'quick-reference':
        filename = 'Quick-Reference-Card-v1.pdf'
        
        generator.addTitle(quickReferenceContent.title)
        quickReferenceContent.sections.forEach(section => {
          generator.addSection(section)
        })
        break
        
      case 'prompt-library':
        filename = 'Prompt-Library-Collection-v1.pdf'
        
        generator.addTitle(promptLibraryContent.title)
        
        promptLibraryContent.categories.forEach(category => {
          generator.addSection({
            title: category.name,
            content: `Professional templates for ${category.name.toLowerCase()} tasks.`,
            type: 'text'
          })
          
          category.prompts.forEach(prompt => {
            generator.addSection({
              title: `${prompt.title} (Difficulty: ${'★'.repeat(prompt.difficulty)}${'☆'.repeat(3-prompt.difficulty)})`,
              content: `Use Case: ${prompt.useCase}\n\nTemplate:\n${prompt.template}\n\nCustomization Notes:\n${prompt.customization}`,
              type: 'code'
            })
          })
        })
        break
        
      default:
        return NextResponse.json({ error: 'Invalid PDF type' }, { status: 400 })
    }
    
    const pdfBuffer = generator.generatePDF()
    
    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': pdfBuffer.byteLength.toString()
      }
    })
    
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'PDF Generation API',
    availableTypes: ['main-guide', 'quick-reference', 'prompt-library']
  })
}
