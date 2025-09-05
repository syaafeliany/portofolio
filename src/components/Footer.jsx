"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShinyText from '@/components/ui/shiny-text';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/syaafeliany", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/resya-anugerah-feliany-265493381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:anugerahfeliany@gmail.com", label: "Email" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#193060] text-[#CEE0F4] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
    
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#CEE0F4] hover:text-[#859FC0] hover:bg-[#315381]/10"
                  asChild
                >
                  <a href={link.href} aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-[#859FC0]/20 pt-8"
          >

            <ShinyText 
                text={`© ${currentYear} Portfolio. Made with Resya`}
                disabled={false} 
                speed={3} 
                className="flex items-center justify-center gap-2" 
            />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
