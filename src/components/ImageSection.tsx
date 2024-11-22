import Image from 'next/image'

export function ImageSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="./images/RegisSakura.jpg"
          alt="Bio Image"
          fill
          className="object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  )
}

