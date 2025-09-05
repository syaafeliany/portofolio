"use client"

import Header from "@/components/Header"
import MainHome from "@/components/Home"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <MainHome />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
