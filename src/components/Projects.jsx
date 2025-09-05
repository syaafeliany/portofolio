"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AOS from "aos"

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  const projects = [
    {
      title: "Jagad's Coffee Web",
      description:
        "A coffee e-commerce project developed with PHP, JavaScript, and MySQL, designed to support digital sales, user authentication, and order management.",
      image: "/jagad.png",
      technologies: ["PHP", "JavaScript", "MySQL", "CSS"],
      github: "https://github.com/syaafeliany/Jagad-coffee",
    },
    {
      title: "E-Tech  Education Web",
      description:
        "An e-learning platform developed with PHP, MySQL, JavaScript, and CSS, providing features for courses, tutors, user management, and video-based learning.",
      image: "/edu.png",
      technologies: ["PHP", "JavaScript", "MySQL", "CSS"],
      github: "https://github.com/syaafeliany/edutech",
    },
    {
      title: "Klik Klik Coddoc",
      description:
        "A creative design project in the form of a lanyard-style Instagram post, created using Canva for branding purposes.",
      image: "/lanyard.png",
      technologies: ["Canva", "Design"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-[#193060]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#315381] mb-6 font-[var(--font-space-grotesk)]">
            My Projects
          </h2>
          <p className="text-lg text-[#CEE0F4] max-w-3xl mx-auto font-[var(--font-dm-sans)] text-pretty">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <Card className="bg-[#315381] border-[#859FC0] overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#859FC0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-[#CEE0F4] text-[#193060] hover:bg-[#859FC0]"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-[#CEE0F4] mb-3 font-[var(--font-space-grotesk)]">
                    {project.title}
                  </h3>
                  <p className="text-[#859FC0] mb-4 font-[var(--font-dm-sans)] flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#CEE0F4]/20 text-[#CEE0F4] text-xs rounded-full font-[var(--font-dm-sans)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#859FC0] hover:bg-[#CEE0F4] bg-transparent text-[#CEE0F4]"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
