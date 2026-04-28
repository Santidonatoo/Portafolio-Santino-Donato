import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  )
}
