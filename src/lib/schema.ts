// JSON-LD Schema markup for SEO
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Art of the Prompt",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}

export const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "The Art of the Prompt: A Professional's Guide to Mastering AI Communication and Amplifying Your Work",
  "author": {
    "@type": "Person",
    "name": "Eric Keller",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/author`
  },
  "publisher": {
    "@type": "Organization",
    "name": "Eric Keller"
  },
  "datePublished": "2025-09-03",
  "description": "Stop Getting Generic Answers. Start Building Your Professional Future. A systematic guide to mastering AI communication and amplifying your work.",
  "isbn": "979-8263592004",
  "numberOfPages": 250,
  "inLanguage": "en",
  "bookFormat": ["https://schema.org/Paperback", "https://schema.org/Hardcover", "https://schema.org/EBook"],
  "image": `${process.env.NEXT_PUBLIC_SITE_URL}/images/book-cover.jpg`,
  "offers": [
    {
      "@type": "Offer",
      "url": process.env.NEXT_PUBLIC_AMAZON_BOOK_URL,
      "priceCurrency": "USD",
      "price": "17.99",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    },
    {
      "@type": "Offer",
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
      "priceCurrency": "USD",
      "price": "24.99",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": "Eric Keller"
      },
      "description": "Signed paperback edition"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}

export const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Eric Keller",
  "url": `${process.env.NEXT_PUBLIC_SITE_URL}/author`,
  "image": `${process.env.NEXT_PUBLIC_SITE_URL}/images/eric-keller.jpg`,
  "description": "Eric Keller teaches teams to turn complex work into simple repeatable prompt systems. He writes a weekly newsletter with practical templates and teardown notes.",
  "jobTitle": "AI Communication Expert",
  "worksFor": {
    "@type": "Organization",
    "name": "Eric Keller"
  },
  "sameAs": [
    "https://twitter.com/erickeller",
    "https://linkedin.com/in/erickeller",
    "https://github.com/erickeller"
  ]
}

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Art of the Prompt - Signed Paperback",
  "description": "Signed paperback edition of The Art of the Prompt by Eric Keller",
  "image": `${process.env.NEXT_PUBLIC_SITE_URL}/images/book-cover.jpg`,
  "brand": {
    "@type": "Brand",
    "name": "Eric Keller"
  },
  "offers": {
    "@type": "Offer",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
    "priceCurrency": "USD",
    "price": "24.99",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Person",
      "name": "Eric Keller"
    }
  }
}

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

export const articleSchema = (article: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  image?: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Eric Keller",
    "logo": {
      "@type": "ImageObject",
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`
    }
  },
  "image": article.image || `${process.env.NEXT_PUBLIC_SITE_URL}/images/default-article.jpg`,
  "url": article.url
})

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})
