import Image from 'next/image'

// Mock data (replace with your actual data)
const personalInfo = {
  name: "Regis Pak",
  location: "San Clemente, CA",
  avatar: "./images/RegisSakuraPFP.jpg",
  bio: "UCSC Senio Studying Computer Science Game Design",
}

const skills = [
  "JavaScript", "React", "Node.js", "Python", "SQL", "Git"
]

const resumeItems = [
  { title: "Education", content: "2021-2025 UCSC B.S in Computer Science Game Design" },
  { title: "Experience", content: "Fun" },
  { title: "Certifications", content: "NONE" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="./images/DB.png"
          alt="Profile Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-gray-900 bg-opacity-75">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Main Content Area */}
          <div className="bg-sky-950 rounded-lg p-6">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row mb-8">
              {/* Avatar (square) */}
              <div className="w-32 h-32 overflow-hidden mb-4 md:mb-0 md:mr-6">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={128}
                  height={128}
                  objectFit="cover"
                />
              </div>
              {/* Name and Location */}
              <div>
                <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
                <p className="text-gray-400">{personalInfo.location}</p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="md:col-span-2">
                {/* Bio */}
                <div className="bg-gray-700 rounded-lg p-4 mb-8">
                  <h2 className="text-xl font-semibold mb-2">About Me</h2>
                  <p>{personalInfo.bio}</p>
                </div>

                {/* Resume Items */}
                {resumeItems.map((item, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 mb-8">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                ))}

                {/* Additional Image Spots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="./images/DB.png"
                      alt="Additional Image 1"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="./images/DB.png"
                      alt="Additional Image 2"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                {/* Placeholder for Future Content */}
                <div className="bg-gray-700 rounded-lg p-4 mb-8">
                  <h2 className="text-xl font-semibold mb-2">Future Content</h2>
                  <p>This space is reserved for additional information or sections you may want to add in the future.</p>
                </div>
              </div>

              {/* Right Column (contains Skills) */}
              <div className="md:col-span-1">
                {/* Skills */}
                <div className="bg-gray-700 rounded-lg p-4 mb-8">
                  <h2 className="text-xl font-semibold mb-2">Skills</h2>
                  <ul className="list-disc list-inside">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                {/* Additional Image Spot */}
                <div className="relative h-64 rounded-lg overflow-hidden mb-8">
                  <Image
                    src="./images/DB.png"
                    alt="Additional Image 3"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

