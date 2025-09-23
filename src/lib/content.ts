// Seed content and copy for the website
// Edit this file to update copy across the site

export const siteConfig = {
  name: 'The Art of the Prompt',
  description: 'A Professional\'s Guide to Mastering AI Communication and Amplifying Your Work',
  author: 'Eric Keller',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://PromptLabBook.com',
  amazonUrl: process.env.NEXT_PUBLIC_AMAZON_BOOK_URL || 'https://www.amazon.com/dp/B0FPMT3HPD',
}

export const bookInfo = {
  title: 'The Art of the Prompt',
  subtitle: 'A Professional\'s Guide to Mastering AI Communication and Amplifying Your Work',
  author: 'Eric Keller',
  isbn: '979-8263592004',
  pages: 250,
  publishDate: '2025-09-03',
  price: {
    paperback: 17.99,
    hardcover: 27.99,
    signed: 24.99,
  },
  rating: {
    value: 4.8,
    count: 127,
  },
}

export const heroContent = {
  headline: 'Direct AI like a pro in minutes a day',
  subheadline: 'The book that gives you a simple system to get clear, consistent results with AI',
  description: 'Stop getting generic answers. Start building your professional future.',
  primaryCta: 'Get the Starter Pack free',
  secondaryCta: 'See the book',
}

export const benefits = [
  {
    icon: 'CheckCircle',
    title: 'Clear System',
    description: 'Learn the 5 Pillars of a Perfect Prompt with a proven methodology that works every time.',
  },
  {
    icon: 'Copy',
    title: 'Copy and Paste Prompts',
    description: 'Get 50+ ready-to-use professional templates for research, writing, analysis, and more.',
  },
  {
    icon: 'Zap',
    title: 'Works with Any AI Tool',
    description: 'Master universal principles that work with ChatGPT, Claude, Gemini, and any AI platform.',
  },
]

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'This book transformed how I work with AI. I went from getting generic responses to producing professional-quality content in half the time.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Software Engineer',
    company: 'StartupXYZ',
    content: 'Clear and practical. I used one template and cut my edit time in half. The prompt chain method is a game-changer.',
    rating: 5,
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Professor',
    company: 'University of California',
    content: 'As an academic, I was skeptical about AI tools. This book showed me how to use them ethically and effectively for research and writing.',
    rating: 5,
  },
]

export const whatYouWillLearn = [
  'Master the 5 Pillars of a Perfect Prompt with a proven methodology',
  'Leverage advanced techniques like Chain of Thought reasoning and Few-Shot prompting',
  'Execute high-value professional tasks with expert-level prompts and workflows',
  'Architect complex workflows using the groundbreaking Prompt Chain Method',
  'Build your own custom AI "operating system" and reusable prompt library',
]

export const tableOfContents = [
  { chapter: 'Introduction', title: 'The Problem with Generic AI Results' },
  { chapter: 'Chapter 1', title: 'The 5 Pillars of a Perfect Prompt' },
  { chapter: 'Chapter 2', title: 'The Professional\'s Toolkit' },
  { chapter: 'Chapter 3', title: 'High-Value Professional Tasks' },
  { chapter: 'Chapter 4', title: 'The Prompt Chain Method' },
  { chapter: 'Chapter 5', title: 'Personalizing and Scaling Your Work' },
  { chapter: 'Chapter 6', title: 'Prompting Safely and Ethically' },
  { chapter: 'Chapter 7', title: 'Building Your AI Operating System' },
  { chapter: 'Chapter 8', title: 'The 7-Day Challenge' },
  { chapter: 'Conclusion', title: 'Your Future as a Prompt Architect' },
]

export const faqItems = [
  {
    question: 'What makes this book different from other AI guides?',
    answer: 'Most AI guides give you tips and tricks. This book provides a complete system with proven methodologies, ready-to-use templates, and a step-by-step approach to mastering AI communication in professional contexts.',
  },
  {
    question: 'Do I need technical experience to understand this book?',
    answer: 'No technical experience required. The book is written for professionals from all backgrounds - business leaders, marketers, developers, academics, and students. It focuses on practical application rather than technical theory.',
  },
  {
    question: 'Which AI tools does this book work with?',
    answer: 'The principles and techniques work with any AI tool - ChatGPT, Claude, Gemini, Perplexity, and others. The book teaches universal concepts that apply across all platforms.',
  },
  {
    question: 'What\'s included in the Starter Pack?',
    answer: 'The Starter Pack includes 25 ready-to-use professional prompts, the Five Pillars Cheat Sheet, and the Professional Prompting Checklist. It\'s delivered immediately after you join the newsletter.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most readers see immediate improvements after implementing the first few techniques. The book includes a 7-Day Challenge to help you build lasting habits and see significant results within a week.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, Amazon offers a 30-day return policy for all book purchases. If you\'re not satisfied with your purchase, you can return it for a full refund.',
  },
  {
    question: 'Can I get a signed copy?',
    answer: 'Yes! We offer signed paperback editions through our website. These are personally signed by Eric Keller and include free shipping within the US.',
  },
  {
    question: 'Will this book become outdated as AI evolves?',
    answer: 'The book focuses on fundamental principles and methodologies that remain relevant regardless of AI advancements. The core concepts of clear communication, systematic thinking, and professional workflows are timeless.',
  },
]

export const authorInfo = {
  name: 'Eric Keller',
  title: 'AI Communication Expert',
  bio: 'Eric Keller teaches teams to turn complex work into simple repeatable prompt systems. He writes a weekly newsletter with practical templates and teardown notes, helping thousands of professionals get better results from AI tools.',
  image: '/images/eric-keller.jpg',
  credentials: [
    '10+ years in AI and automation',
    'Trained 500+ professionals',
    'Weekly newsletter with 10,000+ subscribers',
    'Featured in major tech publications',
  ],
  social: {
    twitter: 'https://twitter.com/erickeller',
    linkedin: 'https://linkedin.com/in/erickeller',
    github: 'https://github.com/erickeller',
  },
}

export const starterPackItems = [
  {
    icon: 'BookOpen',
    title: 'Professional Prompting Checklist',
    description: 'A step-by-step checklist to ensure your prompts are professional-grade every time.',
  },
  {
    icon: 'Download',
    title: 'Five Pillars Cheat Sheet',
    description: 'Quick reference guide to the 5 Pillars of a Perfect Prompt for on-the-go use.',
  },
  {
    icon: 'Users',
    title: '25 Ready-to-Use Prompts',
    description: 'Professional templates for research, writing, analysis, planning, and more.',
  },
]

export const blogPosts = [
  {
    slug: '5-pillars-perfect-prompt',
    title: 'The 5 Pillars of a Perfect Prompt',
    excerpt: 'Learn the foundational anatomy of professional-grade AI instructions that produce consistent, high-quality results.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Fundamentals',
    featured: true,
  },
  {
    slug: 'prompt-chain-method',
    title: 'The Prompt Chain Method for Complex Projects',
    excerpt: 'Discover how to chain prompts together to manage complex projects from initial idea to polished final product.',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Advanced Techniques',
    featured: true,
  },
  {
    slug: 'ai-ethics-professionals',
    title: 'AI Ethics for Professionals',
    excerpt: 'Navigate the critical landscape of data privacy, intellectual property, and quality control with AI tools.',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Ethics & Safety',
    featured: false,
  },
]

export const pressQuotes = [
  {
    quote: "The Art of the Prompt is a game-changer for anyone serious about AI communication. Eric's systematic approach transforms how you interact with AI tools.",
    author: "Dr. Sarah Chen",
    title: "AI Research Director, TechCorp",
  },
  {
    quote: "Finally, a book that goes beyond tips and tricks to provide a complete methodology. This is the AI communication guide professionals have been waiting for.",
    author: "Michael Rodriguez",
    title: "Software Engineer, StartupXYZ",
  },
  {
    quote: "Eric Keller has created the definitive guide to professional AI communication. The prompt chain method alone is worth the price of admission.",
    author: "Dr. Emily Watson",
    title: "Research Professor, UC Berkeley",
  },
]

export const navigation = [
  { name: 'Book', href: '/book' },
  { name: 'Free Chapter', href: '/free-chapter' },
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: '/blog' },
]

export const legalPages = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

export const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/erickeller',
    icon: 'Twitter',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/erickeller',
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/erickeller',
    icon: 'Github',
  },
]

export const trustBadges = [
  'Free shipping',
  '30-day returns',
  'Secure checkout',
]

export const companyLogos = [
  { name: 'Microsoft', src: '/images/logos/microsoft.svg' },
  { name: 'Google', src: '/images/logos/google.svg' },
  { name: 'Amazon', src: '/images/logos/amazon.svg' },
  { name: 'Meta', src: '/images/logos/meta.svg' },
  { name: 'OpenAI', src: '/images/logos/openai.svg' },
  { name: 'Anthropic', src: '/images/logos/anthropic.svg' },
]
