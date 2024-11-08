import About from "@/Components/About";
import Clients from "@/Components/Clients";
import Contacts from "@/Components/Contacts";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";


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
  );
}
