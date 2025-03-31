import SearchBar from "@/components/search-bar"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-600/20 via-transparent to-transparent opacity-70" />

      {/* Oval/lens effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60vh] bg-amber-600/10 rounded-full blur-3xl transform rotate-12" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-16">
          <HeroSection />
          <SearchBar />
        </div>
      </div>
    </main>
  )
}

