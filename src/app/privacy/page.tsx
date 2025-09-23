import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Art of the Prompt',
  description: 'Privacy policy for The Art of the Prompt website and services.',
  robots: 'noindex, nofollow',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul>
                <li>Subscribe to our newsletter</li>
                <li>Purchase a book</li>
                <li>Contact us for support</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Send you newsletters and updates</li>
                <li>Process and fulfill orders</li>
                <li>Provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
              
              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2>Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website and for analytics purposes. You can control cookie settings through your browser.
              </p>
              
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@PromptLabBook.com<br />
                Address: [Your Business Address]
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
