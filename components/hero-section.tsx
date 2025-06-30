"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="block">Hello, I&apos;m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Brix Lampago
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Software Developer & Digital Craftsman
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-none">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-950/30">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500/40 to-purple-600/40 backdrop-blur-sm" />
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-900">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-Cv943dhazB6Mtu4Y9NATVwyvEX0IQt.png"
                  alt="Brix Lampago"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Orbiting elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 -mt-1.5 rounded-full bg-cyan-500/70" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 -mb-1.5 rounded-full bg-purple-500/70" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 -ml-1.5 rounded-full bg-cyan-500/70" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 -mr-1.5 rounded-full bg-purple-500/70" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
