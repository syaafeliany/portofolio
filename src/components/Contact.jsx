"use client"


import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AOS from "aos"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "anugerahfeliany@gmail.com",
      href: "mailto:anugerahfeliany@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+62 822 1399 6898",
      href: "tel:+6282213996898",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#193060]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#315381] mb-6 font-[var(--font-space-grotesk)]">
            Get In Touch
          </h2>
          <p className="text-lg text-[#CEE0F4] max-w-3xl mx-auto font-[var(--font-dm-sans)] text-pretty">
            I always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#315381] mb-4 font-[var(--font-space-grotesk)]">Let's Connect</h3>
                <p className="text-[#CEE0F4] font-[var(--font-dm-sans)]">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#315381] border-[#859FC0] hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="text-[#CEE0F4]">{info.icon}</div>
                          <div>
                            <h4 className="font-semibold text-[#CEE0F4] font-[var(--font-space-grotesk)]">
                              {info.title}
                            </h4>
                            <a
                              href={info.href}
                              className="text-[#859FC0] hover:text-[#CEE0F4] transition-colors duration-200 font-[var(--font-dm-sans)]"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="fade-left"
          >
            <Card className="bg-[#315381] border-[#859FC0] shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#CEE0F4] mb-2 font-[var(--font-dm-sans)]"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#CEE0F4] border-[#859FC0] focus:ring-[#315381] text-[#193060]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#CEE0F4] mb-2 font-[var(--font-dm-sans)]"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#CEE0F4] border-[#859FC0] focus:ring-[#315381] text-[#193060]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#CEE0F4] mb-2 font-[var(--font-dm-sans)]"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-[#CEE0F4] border-[#859FC0] focus:ring-[#315381] resize-none text-[#193060]"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#315381] hover:bg-[#859FC0] text-[#CEE0F4] font-[var(--font-dm-sans)]"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
