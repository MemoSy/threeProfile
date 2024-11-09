import dynamic from 'next/dynamic'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Dynamically import components that might use Three.js
// with ssr disabled
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false })
const About = dynamic(() => import("@/components/About"), { ssr: false })
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false })
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false })
const Contacts = dynamic(() => import("@/components/Contacts"), { ssr: false })

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contacts />
      <Footer />
    </main>
  )
}