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

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[400px] bg-gray-800 rounded-lg overflow-hidden">
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
              src={item.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

