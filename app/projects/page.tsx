"use client"

import { useState } from "react"
import { projects as allProjects } from "@/components/projects-section"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/projects-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function ProjectsPage() {
  const [showAll, setShowAll] = useState(false)
  const projects = allProjects.websites
  const visibleProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <>
      <AnimatedBackground />
      <Header />
      <section className="py-20 min-h-screen relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                All Projects
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse all of my projects below.
            </p>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
            {projects.length > 6 && !showAll && (
              <div className="flex justify-center mt-8">
                <button
                  className="px-6 py-2 rounded bg-cyan-500 text-white hover:bg-cyan-600 transition"
                  onClick={() => setShowAll(true)}
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
} 