'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type MediaItem = {
  type: 'image' | 'video' | 'youtube'
  src: string
}

interface SlideshowProps {
  media: MediaItem[]
}

export default function Slideshow({ media }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % media.length)
  }, [media.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + media.length) % media.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="w-full bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative w-full h-[400px]">
        {media.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'image' && (
              <Image src={item.src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
            )}
            {item.type === 'video' && (
              <video src={item.src} autoPlay loop muted className="w-full h-full object-cover" />
            )}
            {item.type === 'youtube' && (
              <iframe
                src={`https://www.youtube.com/embed/${item.src.split('v=')[1]}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 space-x-2 p-2">
        <button
          onClick={prevSlide}
          className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
              index === currentSlide ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <Image src={media[index].src} alt={`Thumbnail ${index + 1}`} width={64} height={64} objectFit="cover" />
          </button>
        ))}
        <button
          onClick={nextSlide}
          className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

