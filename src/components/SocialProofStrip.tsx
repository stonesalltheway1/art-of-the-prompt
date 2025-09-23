import Image from 'next/image'

interface SocialProofStripProps {
  className?: string
}

export default function SocialProofStrip({ className = '' }: SocialProofStripProps) {
  const logos = [
    { name: 'Microsoft', src: '/images/logos/microsoft.svg', alt: 'Microsoft' },
    { name: 'Google', src: '/images/logos/google.svg', alt: 'Google' },
    { name: 'Amazon', src: '/images/logos/amazon.svg', alt: 'Amazon' },
    { name: 'Meta', src: '/images/logos/meta.svg', alt: 'Meta' },
    { name: 'OpenAI', src: '/images/logos/openai.svg', alt: 'OpenAI' },
    { name: 'Anthropic', src: '/images/logos/anthropic.svg', alt: 'Anthropic' },
  ]

  return (
    <div className={`bg-gray-50 py-12 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Trusted by professionals at
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <div className="relative h-12 w-24 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Join thousands of professionals getting better AI results
          </p>
        </div>
      </div>
    </div>
  )
}
