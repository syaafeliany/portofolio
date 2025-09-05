"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Code, Palette, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AOS from "aos"

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Backend Development",
      description: "Node.js, Express, PostgreSQL, MongoDB",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design, Canva",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Git, Agile, Team Leadership, Communication",
    },
  ]

  // Tilted card state & handler
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    // Max tilt angle
    const maxTilt = 20
    const tiltX = ((y - centerY) / centerY) * maxTilt
    const tiltY = ((x - centerX) / centerX) * maxTilt
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section id="about" className="py-20 bg-[#193060]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#315381] mb-6 font-[var(--font-space-grotesk)]">
            About Me
          </h2>
          <p className="text-lg text-[#CEE0F4] max-w-3xl mx-auto font-[var(--font-dm-sans)] text-pretty">
            I am an Informatics student at President University with a strong interest in web development and UI/UX design. 
            I enjoy turning ideas into functional and user-friendly digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="fade-right"
            whileHover={{ y: -10 }} // efek bakal up saat hover
          >
            <div
              className="bg-[#315381]/60 rounded-2xl p-8 shadow-lg border border-[#CEE0F4]/30 backdrop-blur-md"
              style={{
                boxShadow: "0 8px 32px 0 rgba(49,83,129,0.25)",
                // efek glass: background transparan, blur, border
                background: "rgba(49,83,129,0.35)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(206,224,244,0.18)",
              }}
            >
              <h3 className="text-2xl font-bold text-[#CEE0F4] mb-4 font-[var(--font-space-grotesk)]">
                My Journey
              </h3>
              <p className="text-[#859FC0] mb-4 font-[var(--font-dm-sans)]">
                I started my journey in Informatics at President University, where I explored web development and UI/UX design. 
                During my studies, I worked on projects such as an Online Education platform, JagaD’s Coffee web, and Klik Klik Coddoc as MTDD/design. 
                These experiences strengthened my skills in front-end development, UI design, and project leadership.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="fade-left"
            className="flex justify-center"
            whileHover={{ y: -10 }} // efek bakal up saat hover
          >
            <div
              ref={cardRef}
              className="w-80 h-80 rounded-2xl flex items-center justify-center border border-[#CEE0F4]/30 backdrop-blur-md"
              style={{
                background: "rgba(49,83,129,0.35)",
                boxShadow: `0 16px 40px 0 rgba(49,83,129,0.25), 
                  ${tilt.x !== 0 || tilt.y !== 0
                    ? `${-tilt.y * 2}px ${tilt.x * 2}px 40px 0 rgba(49,83,129,0.35)`
                    : "0 0 0 0 transparent"
                  }`,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.2s cubic-bezier(.03,.98,.52,.99), box-shadow 0.2s cubic-bezier(.03,.98,.52,.99)",
                border: "1px solid rgba(206,224,244,0.18)",
                backdropFilter: "blur(12px)",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Ganti tulisan DEV dengan foto Anda */}
              <img
                src="/me.jpg" // Path ke file di folder public
                alt="My Photo"
                className="w-64 h-64 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="bg-[#315381] border-[#859FC0] hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-[#CEE0F4] mb-4 flex justify-center">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-[#CEE0F4] mb-2 font-[var(--font-space-grotesk)]">
                    {skill.title}
                  </h4>
                  <p className="text-[#859FC0] text-sm font-[var(--font-dm-sans)]">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
