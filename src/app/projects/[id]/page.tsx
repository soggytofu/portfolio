import { use } from 'react'
import Link from 'next/link'
import Slideshow, { MediaItem } from './Slideshow'
import Sidebar from './Sidebar'
import { ChevronRight } from 'lucide-react'

// Sample project data (in a real app, this would come from a database or API)
const projects = [
  {
    id: 1,
    name: "Malisense",
    banner: "/images/DB.png",
    media: [
      { type: 'image', src: "/images/DB.png" },
      { type: 'youtube', src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: 'image', src: "/placeholder.svg" },
    ] as MediaItem[],
    tags: ["Leadership", "Unity", "C#"],
    shortDescription: "A full-stack e-commerce solution with advanced features.",
    fullDescription: "Malisense is a game created with the club GDA at UCSC. Here, I did stuf ...",
    skills: ["Test", "WOW"],
    projectUrl: "https://game-design-art-collab.itch.io/malisense"
  },
  {
    id: 2,
    name: "TBD",
    banner: "/images/DB.png",
    media: [
      { type: 'image', src: "/images/DB.png" },
      { type: 'youtube', src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: 'image', src: "/placeholder.svg" },
    ] as MediaItem[],
    tags: ["Unreal", "C++", "Unreal"],
    shortDescription: "A small team i put together to make an unreal game.",
    fullDescription: "Funny Test Stuff",
    skills: ["Unreal", "C++", "Leadership", "API Integration"],
    projectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "Wildfire Minigames",
    banner: "/images/DB.png",
    media: [
      { type: 'image', src: "/images/DB.png" },
      { type: 'youtube', src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: 'image', src: "/placeholder.svg" },
    ] as MediaItem[],
    tags: ["Unreal", "C++", "Unreal"],
    shortDescription: "A small team i put together to make an unreal game.",
    fullDescription: "Funny Test Stuff",
    skills: ["Unreal", "C++", "Leadership", "API Integration"],
    projectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    name: "Chess Program and AI",
    banner: "/images/DB.png",
    media: [
      { type: 'image', src: "/images/DB.png" },
      { type: 'youtube', src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: 'image', src: "/placeholder.svg" },
    ] as MediaItem[],
    tags: ["C++", "Learning", "Algorithms"],
    shortDescription: "A small team i put together to make an unreal game.",
    fullDescription: "Funny Test Stuff",
    skills: ["Test", "C++", "Test", "Test TEst"],
    projectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 6,
    name: "Anime Song Retrevial",
    banner: "/images/DB.png",
    media: [
      { type: 'image', src: "/images/DB.png" },
      { type: 'youtube', src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: 'image', src: "/placeholder.svg" },
    ] as MediaItem[],
    tags: ["Python", "Learning", "FUN"],
    shortDescription: "A program to scrub through MAL and grab every OP and ED of a season.",
    fullDescription: "This e-commerce platform provides a complete solution for online retail. It features a responsive React frontend, a robust Node.js backend, and MongoDB for efficient data storage. Key features include user authentication, product catalog management, shopping cart functionality, and secure payment processing.",
    skills: ["Unreal", "C++", "Leadership", "API Integration"],
    projectUrl: "https://example.com/ecommerce-platform"
  },
]
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))

  if (!project) {
    return <div className="min-h-screen bg-sky-950 text-white flex items-center justify-center">Project not found</div>
  }

  return (
    <div className="min-h-screen bg-sky-950 text-white">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href="/projects" className="text-blue-400 hover:underline mb-4 inline-block flex items-center">
          <ChevronRight className="transform rotate-180 mr-1" />
          Back to Projects
        </Link>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Slideshow media={project.media} />
          </div>
          <div className="lg:w-1/3">
            <Sidebar project={project} />
          </div>
        </div>
        <div className="mt-8 bg-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-6 border-b border-gray-600 pb-4">
            <h1 className="text-3xl font-bold mr-4">{project.name}</h1>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded text-center transition duration-300"
            >
              Play Now
            </a>
          </div>
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-300 mb-6">{project.fullDescription}</p>
          <div className="border-b border-gray-600 mb-6"></div>
          <h3 className="text-xl font-semibold mb-3">Skills Demonstrated:</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            {project.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

