import { Banner } from '../components/Banner'
import { Slideshow } from '../components/Slideshow'
import { Bio } from '../components/Bio'
import { NewSection } from '../components/NewSection'
import { ImageSection } from '../components/ImageSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-950 text-white">
      <Banner />
      <main className="relative z-10">
        <div className="pt-[375px]"> {/* Adjust this value to match your banner height */}
          <Slideshow />
          <ImageSection />
          <Bio />
          <NewSection />
        </div>
      </main>
    </div>
  )
}

