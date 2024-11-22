'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type MediaItem = {
    type: 'image' | 'video' | 'youtube'
    src: string
}
  
export default function Slideshow({ media }: { media: MediaItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      if (media[currentIndex].type === 'video' && videoRef.current) {
        if (videoRef.current.ended) {
          nextSlide()
        }
      } else if (media[currentIndex].type !== 'youtube') {
        nextSlide()
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex, media])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length)
  }

  const getYoutubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}`
      : url
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="aspect-video relative">
        {media[currentIndex].type === 'image' && (
          <Image
            src={media[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
        )}
        {media[currentIndex].type === 'video' && (
          <video
            ref={videoRef}
            src={media[currentIndex].src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        )}
        {media[currentIndex].type === 'youtube' && (
          <iframe
            width="100%"
            height="100%"
            src={getYoutubeEmbedUrl(media[currentIndex].src)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <button onClick={prevSlide} className="text-white hover:text-blue-400 p-2">
            <ChevronLeft size={24} />
          </button>
          <div className="flex-1 overflow-x-auto mx-2">
            <div className="flex space-x-2 justify-center">
              {media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden ${
                    index === currentIndex ? 'ring-2 ring-blue-400' : ''
                  }`}
                >
                  {item.type === 'image' && (
                    <Image
                      src={item.src}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      objectFit="cover"
                    />
                  )}
                  {item.type === 'video' && (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <span className="text-white text-xs">Video</span>
                    </div>
                  )}
                  {item.type === 'youtube' && (
                    <div className="w-full h-full bg-red-600 flex items-center justify-center">
                      <span className="text-white text-xs">YouTube</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          <button onClick={nextSlide} className="text-white hover:text-blue-400 p-2">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

