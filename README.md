# The Art of the Prompt - Book Website

A conversion-focused website and funnel for selling "The Art of the Prompt" by Eric Keller, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Conversion-Optimized Design**: Built for maximum book sales and email capture
- **A/B Testing**: Built-in testing framework for headlines, CTAs, and content
- **Analytics Integration**: GA4, Meta Pixel, and TikTok Pixel with GDPR-compliant consent
- **Email Marketing**: ConvertKit/MailerLite integration for newsletter signups
- **E-commerce**: Stripe Checkout for signed paperback sales
- **SEO Optimized**: Schema markup, Open Graph tags, and performance optimization
- **Mobile-First**: Responsive design with Core Web Vitals optimization

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Payments**: Stripe
- **Email**: ConvertKit/MailerLite
- **Analytics**: GA4, Meta Pixel, TikTok Pixel
- **Deployment**: Vercel (recommended)

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd book-website
npm install
```

### 2. Environment Setup

Copy the example environment file and fill in your values:

```bash
cp env.example .env.local
```

Required environment variables:

```env
# Email Provider (ConvertKit or MailerLite)
EMAIL_PROVIDER_API_KEY=your_email_provider_api_key
EMAIL_PROVIDER_API_URL=https://api.convertkit.com/v3
EMAIL_PROVIDER_FORM_ID=your_form_id

# Stripe
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
STRIPE_SIGNED_BOOK_PRICE_ID=price_your_signed_book_price_id

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id
NEXT_PUBLIC_TIKTOK_PIXEL_ID=your_tiktok_pixel_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_AMAZON_BOOK_URL=https://www.amazon.com/dp/B0FPMT3HPD

# A/B Testing
NEXT_PUBLIC_AB_TEST_ENABLED=true
```

### 3. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build and Deploy

```bash
npm run build
npm start
```

## Configuration

### Email Provider Setup

#### ConvertKit
1. Create a ConvertKit account
2. Create a form for newsletter signups
3. Get your API key and form ID
4. Set `EMAIL_PROVIDER=convertkit` in your environment

#### MailerLite
1. Create a MailerLite account
2. Create a group for subscribers
3. Get your API key and group ID
4. Set `EMAIL_PROVIDER=mailerlite` in your environment

### Stripe Setup

1. Create a Stripe account
2. Create a product for the signed paperback
3. Get your publishable and secret keys
4. Set up webhooks pointing to `/api/stripe-webhooks`
5. Add the webhook secret to your environment

### Analytics Setup

#### Google Analytics 4
1. Create a GA4 property
2. Get your measurement ID
3. Add it to `NEXT_PUBLIC_GA_MEASUREMENT_ID`

#### Meta Pixel
1. Create a Facebook Business account
2. Create a pixel
3. Add the pixel ID to `NEXT_PUBLIC_META_PIXEL_ID`

#### TikTok Pixel
1. Create a TikTok Ads account
2. Create a pixel
3. Add the pixel ID to `NEXT_PUBLIC_TIKTOK_PIXEL_ID`

## A/B Testing

The site includes built-in A/B testing for:

1. **Hero Headline**: Test different value propositions
2. **Book Page CTA Order**: Test Amazon vs signed paperback priority
3. **Lead Magnet Teaser**: Test different benefit orders

Tests are stored in cookies and persist for 7 days. Results are tracked through your analytics platforms.

## Content Management

### Updating Copy

Edit the content in these files:
- `src/app/page.tsx` - Homepage content
- `src/app/book/page.tsx` - Book sales page
- `src/app/free-chapter/page.tsx` - Lead magnet page
- `src/lib/content.ts` - Shared content and copy

### Adding Blog Posts

1. Add new posts to `src/app/blog/[slug]/page.tsx`
2. Update the blog index in `src/app/blog/page.tsx`
3. Add schema markup for SEO

### Updating Images

Replace images in the `public/images/` directory:
- `book-cover.jpg` - Main book cover
- `eric-keller.jpg` - Author photo
- `og-*.jpg` - Open Graph images

## Performance Optimization

The site is optimized for Core Web Vitals:

- **LCP**: Optimized images and critical CSS
- **CLS**: Stable layouts and image dimensions
- **TBT**: Minimal JavaScript and efficient loading

### Image Optimization

- Uses Next.js Image component with AVIF/WebP formats
- Responsive image sizes for different devices
- Lazy loading for below-the-fold images

### SEO Features

- JSON-LD schema markup
- Open Graph and Twitter Card meta tags
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Monitoring and Analytics

### Key Metrics to Track

1. **Conversion Rates**
   - Homepage to book page
   - Book page to purchase
   - Free chapter signup rate

2. **Traffic Sources**
   - Organic search
   - Social media
   - Paid advertising
   - Direct traffic

3. **User Behavior**
   - Page views and time on site
   - Bounce rate
   - Scroll depth
   - Form abandonment

### A/B Test Results

Monitor test performance through:
- Google Analytics 4 custom events
- Meta Pixel conversion tracking
- TikTok Pixel analytics

## Support and Maintenance

### Regular Updates

- Update dependencies monthly
- Monitor Core Web Vitals
- Review and optimize conversion rates
- Update content based on performance

### Troubleshooting

Common issues and solutions:

1. **Email signups not working**: Check API keys and form IDs
2. **Stripe checkout failing**: Verify webhook configuration
3. **Analytics not tracking**: Check pixel IDs and consent settings
4. **Images not loading**: Verify image paths and optimization

## License

This project is proprietary software. All rights reserved.

## Contact

For questions or support, contact Eric Keller at eric@artoftheprompt.com