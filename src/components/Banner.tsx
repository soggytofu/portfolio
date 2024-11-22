import Image from 'next/image'

export function Banner() {
  return (
    // Change here if u want to adjust banner
    <div className="absolute top-0 left-0 right-0 h-[450px] z-0"> {/* Increased height to 600px */}
      <Image
        src="./images/DB.png"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        priority
      />
      {/* Here is the gradient for the line that i would want to change */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-1000"></div>
    </div>
  )
}

