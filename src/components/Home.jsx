"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import AOS from "aos"
import "aos/dist/aos.css"

const MainHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#193060] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#315381] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#859FC0] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#CEE0F4] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#315381] mb-6 font-[var(--font-space-grotesk)] text-balance"
          >
            Hi, I'm <span className="text-[#859FC0]">Resya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-[#CEE0F4] mb-8 font-[var(--font-dm-sans)] max-w-2xl mx-auto text-pretty"
          >
           Passionate about technology and design, I specialize in web development and UI/UX. I aim to create innovative, simple, and impactful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-[#315381] hover:bg-[#859FC0] text-[#CEE0F4] font-bold px-8 py-3 text-lg font-[var(--font-dm-sans)]"
            >
              View My Work
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-[#315381] hover:bg-[#859FC0] bg-transparent"
                asChild
              >
                <a
                  href="https://github.com/syaafeliany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-[#315381] group-hover:text-[#859FC0] font-bold" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-[#315381] hover:bg-[#859FC0] bg-transparent"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/resya-anugerah-feliany-265493381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-[#315381] group-hover:text-[#859FC0] font-bold" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-[#315381] hover:bg-[#859FC0] bg-transparent"
                asChild
              >
                <a
                  href="mailto:anugerahfeliany@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-[#315381] group-hover:text-[#859FC0] font-bold" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="animate-bounce"
          >
            <ArrowDown
              className="h-8 w-8 mx-auto cursor-pointer text-[#315381] hover:text-[#859FC0] transition-colors"
              onClick={scrollToProjects}
            />

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MainHome
