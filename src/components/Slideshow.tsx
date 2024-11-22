"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    name: "Malisense",
    image: "./images/RegisSakura.jpg",
    description: "A game about exploring the dungeon to dodge monsters based on the 5 senses",
    tags: ["Leadership", "Unity", "C#"],
    link: "/projects/1",
  },
  {
    id: 2,
    name: "TBD",
    image: "./images/DB.png",
    description: "Game Project currently in developement",
    tags: ["Leadership", "C++", "FUN"],
    link: "/projects/2",
  },
  {
    id: 3,
    name: "Seasonal Anime Song Retrevial",
    image: "/placeholder.svg",
    description: "A day project to get all the anime songs from a certain season",
    tags: ["Python", "Learning"],
    link: "/projects/3",
  },
]

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [key, setKey] = useState(0)

  const resetTimer = useCallback(() => {
    setKey(prevKey => prevKey + 1)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [key])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
    resetTimer()
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    resetTimer()
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Recent Projects</h2>
      <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg drop-shadow-xl">
        <Link href={currentProject.link} className="block">
          <div className="flex h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-2/3 relative"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="w-1/3 p-6 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{currentProject.name}</h3>
                    <p className="text-gray-300 mb-4">{currentProject.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tags.map((tag) => (
                        <span key={tag} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Link>
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

