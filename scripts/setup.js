#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up The Art of the Prompt website...\n');

// Create necessary directories
const directories = [
  'public/images',
  'public/images/logos',
  'public/downloads',
  'src/components/ui',
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Create placeholder images
const placeholderImages = [
  'public/images/book-cover.jpg',
  'public/images/eric-keller.jpg',
  'public/images/og-default.jpg',
  'public/images/og-home.jpg',
  'public/images/og-book.jpg',
  'public/images/og-free-chapter.jpg',
  'public/images/logos/microsoft.svg',
  'public/images/logos/google.svg',
  'public/images/logos/amazon.svg',
  'public/images/logos/meta.svg',
  'public/images/logos/openai.svg',
  'public/images/logos/anthropic.svg',
];

placeholderImages.forEach(imagePath => {
  if (!fs.existsSync(imagePath)) {
    const dir = path.dirname(imagePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Create a simple placeholder file
    if (imagePath.endsWith('.svg')) {
      fs.writeFileSync(imagePath, `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#f3f4f6"/>
  <text x="50" y="50" text-anchor="middle" dy=".3em" font-family="Arial" font-size="12" fill="#6b7280">Logo</text>
</svg>`);
    } else {
      fs.writeFileSync(imagePath, 'Placeholder image - replace with actual image');
    }
    console.log(`✅ Created placeholder: ${imagePath}`);
  }
});

// Create download files
const downloadFiles = [
  'public/downloads/starter-pack.pdf',
  'public/downloads/free-chapter.pdf',
  'public/downloads/book-cover-hires.jpg',
  'public/downloads/book-cover-web.jpg',
  'public/downloads/book-cover-thumb.jpg',
  'public/downloads/eric-keller-hires.jpg',
  'public/downloads/eric-keller-web.jpg',
  'public/downloads/press-release.pdf',
  'public/downloads/author-bio-short.txt',
  'public/downloads/author-bio-long.txt',
  'public/downloads/sample-qa.pdf',
];

downloadFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (filePath.endsWith('.txt')) {
      fs.writeFileSync(filePath, 'Placeholder content - replace with actual content');
    } else {
      fs.writeFileSync(filePath, 'Placeholder file - replace with actual file');
    }
    console.log(`✅ Created download file: ${filePath}`);
  }
});

// Create favicon files
const faviconFiles = [
  'public/favicon.ico',
  'public/apple-touch-icon.png',
  'public/favicon-32x32.png',
  'public/favicon-16x16.png',
  'public/site.webmanifest',
];

faviconFiles.forEach(faviconPath => {
  if (!fs.existsSync(faviconPath)) {
    if (faviconPath.endsWith('.webmanifest')) {
      fs.writeFileSync(faviconPath, JSON.stringify({
        name: 'The Art of the Prompt',
        short_name: 'Art of the Prompt',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone'
      }, null, 2));
    } else {
      fs.writeFileSync(faviconPath, 'Placeholder favicon - replace with actual favicon');
    }
    console.log(`✅ Created favicon: ${faviconPath}`);
  }
});

console.log('\n🎉 Setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Copy env.example to .env.local and fill in your values');
console.log('2. Replace placeholder images with actual images');
console.log('3. Replace placeholder download files with actual content');
console.log('4. Update the content in src/lib/content.ts');
console.log('5. Run npm run dev to start the development server');
console.log('\n📚 For detailed setup instructions, see README.md');
