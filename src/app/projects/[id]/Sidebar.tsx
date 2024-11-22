import Image from 'next/image'

type Project = {
  name: string
  banner: string
  shortDescription: string
  tags: string[]
}

export default function Sidebar({ project }: { project: Project }) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden h-full flex flex-col">
      <Image
        src={project.banner}
        alt={project.name}
        width={400}
        height={200}
        className="w-full object-cover"
      />
      <div className="p-6 flex-grow">
        <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
        <p className="text-gray-300 mb-4">{project.shortDescription}</p>
        <div>
          <h3 className="font-semibold mb-2">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

