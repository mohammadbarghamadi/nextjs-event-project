import HeroSection from "@/components/Home/hero"
import CoWorker from "@/components/Home/coworkers"

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="container">
        <HeroSection />
        <CoWorker />
      </div>
    </div>
  )
}