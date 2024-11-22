import Image from 'next/image'
import Link from 'next/link'

const mainProjects = [
  { id: 1, name: "Malisense", image: "/images/DB.png", tags: ["Leadership", "Unity", "C#"], bio: "GDA group game that is about exploring the dungeon avoid sense based monsters" },
  { id: 2, name: "TBD Game", image: "/images/DB.png", tags: ["Leadership", "UNreal", "C++"], bio: "Small studio that is aimed at creating a portfolio game in Unreal" },
  { id: 3, name: "Wildfire Minigame", image: "/images/DB.png", tags: ["Unity", "C++"], bio: "Small project for wildfire games" },
  { id: 4, name: "Chess Program and AI", image: "/images/DB.png", tags: ["C++", "AI", "Algorithms"], bio: "Created a chess program alongside an AI that you can play against" },
  // { id: 5, name: "Blockchain Voting System", image: "/images/DB.png", tags: ["Solidity", "Ethereum", "Web3.js"], bio: "Secure and transparent voting system using blockchain technology." },
]

const sideProjects = [
  { id: 6, name: "Anime Song Retrevial", image: "/images/DB.png", tags: ["Learning", "Python"], bio: "Real-time weather information with location-based forecasts." },
  // { id: 7, name: "Task Manager CLI", image: "/images/DB.png", tags: ["Python", "Click"], bio: "Command-line interface for efficient task management." },
  // { id: 8, name: "Personal Blog", image: "/images/DB.png", tags: ["Next.js", "MDX"], bio: "A personal blog built with Next.js and MDX for content management." },
]

function ProjectGrid({ projects, title }: { projects: typeof mainProjects, title: string }) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
      <div className="border-b border-gray-700 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="block">
            <div className="transition-transform duration-300 hover:scale-105 w-full max-w-[300px] mx-auto">
              <h3 className="text-lg font-semibold mb-3 text-white text-center">{project.name}</h3>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-square">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-700 p-4">
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-center text-sm">{project.bio}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-sky-950">
      <main className="max-w-7xl mx-auto px-8 py-8">
        <ProjectGrid projects={mainProjects} title="Main Projects" />
        <ProjectGrid projects={sideProjects} title="Side Projects" />
      </main>
    </div>
  )
}

