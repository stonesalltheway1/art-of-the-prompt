import { Card } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  company?: string
  content: string
  rating?: number
  avatar?: string
  featured?: boolean
  className?: string
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating = 5,
  avatar,
  featured = false,
  className = '',
}: TestimonialCardProps) {
  return (
    <Card className={`p-6 ${featured ? 'border-blue-200 bg-blue-50' : ''} ${className}`}>
      <div className="flex items-start space-x-4">
        {avatar ? (
          <div className="flex-shrink-0">
            <Image
              src={avatar}
              alt={`${name} avatar`}
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        ) : (
          <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-semibold text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <blockquote className="text-gray-700 mb-4">
            <Quote className="h-4 w-4 text-gray-400 inline mr-1" />
            {content}
          </blockquote>
          
          <div className="text-sm">
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-gray-600">
              {role}
              {company && (
                <>
                  {' '}at <span className="font-medium">{company}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
