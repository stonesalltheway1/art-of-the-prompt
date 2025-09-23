import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface BookCover3DProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showBadges?: boolean
}

export default function BookCover3D({ 
  className = '', 
  size = 'md',
  showBadges = true 
}: BookCover3DProps) {
  const sizeClasses = {
    sm: 'max-w-xs',
    md: 'max-w-sm',
    lg: 'max-w-md',
    xl: 'max-w-lg'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <Card className="p-8 bg-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/images/book-cover.jpg"
            alt="The Art of the Prompt book cover"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
          {/* 3D effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-lg" />
        </div>
      </Card>
      
      {showBadges && (
        <>
          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
            #1 Bestseller
          </div>
          <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            New Release
          </div>
          <div className="absolute top-1/2 -right-6 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg transform -translate-y-1/2">
            Free Shipping
          </div>
        </>
      )}
    </div>
  )
}
