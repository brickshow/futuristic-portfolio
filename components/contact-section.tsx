"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

function Mail(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">brix.sequoiamarketingsolutions@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Sitio Crosan Bulacao, Talisay City, Cebu, Philippines</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                  <Github className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="text-white">github.com/brickshow</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitStatus === "success" && <p className="text-green-400 text-sm">Message sent successfully!</p>}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
