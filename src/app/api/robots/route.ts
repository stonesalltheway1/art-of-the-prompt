import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://PromptLabBook.com'
  
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow important pages
Allow: /book
Allow: /free-chapter
Allow: /resources
Allow: /blog
Allow: /blog/*

# Crawl delay (optional)
Crawl-delay: 1`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
