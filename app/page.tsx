import dynamic from 'next/dynamic'
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"

// Dynamically import components that might use Three.js
// with ssr disabled
const Hero = dynamic(() => import("@/Components/Hero"), { ssr: false })
const About = dynamic(() => import("@/Components/About"), { ssr: false })
const Projects = dynamic(() => import("@/Components/Projects"), { ssr: false })
const Clients = dynamic(() => import("@/Components/Clients"), { ssr: false })
const Contacts = dynamic(() => import("@/Components/Contacts"), { ssr: false })

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