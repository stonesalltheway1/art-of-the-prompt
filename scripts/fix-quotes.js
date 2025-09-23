#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to fix
const filesToFix = [
  'src/app/book/page.tsx',
  'src/app/free-chapter/page.tsx',
  'src/app/page.tsx',
  'src/app/resources/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/thank-you-optin/page.tsx',
  'src/app/thank-you-purchase/page.tsx',
  'src/components/Hero.tsx',
  'src/components/NewsletterForm.tsx',
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common quote issues
    content = content.replace(/'/g, '&apos;');
    content = content.replace(/"/g, '&quot;');
    
    // Fix specific patterns that should remain as quotes
    content = content.replace(/&quot;([^&]*?)&quot;/g, '"$1"');
    content = content.replace(/&apos;([^&]*?)&apos;/g, "'$1'");
    
    // Fix JSX attributes that should use regular quotes
    content = content.replace(/className=&quot;([^&]*?)&quot;/g, 'className="$1"');
    content = content.replace(/href=&quot;([^&]*?)&quot;/g, 'href="$1"');
    content = content.replace(/src=&quot;([^&]*?)&quot;/g, 'src="$1"');
    content = content.replace(/alt=&quot;([^&]*?)&quot;/g, 'alt="$1"');
    content = content.replace(/type=&quot;([^&]*?)&quot;/g, 'type="$1"');
    content = content.replace(/name=&quot;([^&]*?)&quot;/g, 'name="$1"');
    content = content.replace(/id=&quot;([^&]*?)&quot;/g, 'id="$1"');
    content = content.replace(/value=&quot;([^&]*?)&quot;/g, 'value="$1"');
    content = content.replace(/placeholder=&quot;([^&]*?)&quot;/g, 'placeholder="$1"');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed quotes in: ${filePath}`);
  }
});

console.log('🎉 Quote fixing complete!');
