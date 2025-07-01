"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Laptop, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { url } from "inspector"

export const projects = {
  websites: [
    {
      title: "Grand Vista Hotel",
      description: "Experience Luxury Beyond Compare",
      tech: ["React", "Tailwind CSS"],
      image: "/Images/bg.png",
      url: "https://grandvistahotel.vercel.app/"
    },
    {
      title: "Sequoia Marketing Solutions",
      description: "Transform Your Idea in Digital",
      tech: ["React.js", "Tailwind CSS",],
      image: "/Images/sequoia.png",
      url: "https://www.sequoiamarketingsolutions.com/",
    },
    // {
    //   title: "Analytics Dashboard",
    //   description: "Real-time data visualization for business metrics",
    //   tech: ["React", "D3.js", "Firebase"],
    //   image: "/placeholder.svg?height=300&width=500",
    // },
    // {
    //   title: "Analytics Dashboard",
    //   description: "Real-time data visualization for business metrics",
    //   tech: ["React", "D3.js", "Firebase"],
    //   image: "/placeholder.svg?height=300&width=500",
    // },
    // {
    //   title: "Analytics Dashboard",
    //   description: "Real-time data visualization for business metrics",
    //   tech: ["React", "D3.js", "Firebase"],
    //   image: "/placeholder.svg?height=300&width=500",
    // },
    // {
    //   title: "Analytics Dashboard",
    //   description: "Real-time data visualization for business metrics",
    //   tech: ["React", "D3.js", "Firebase"],
    //   image: "/placeholder.svg?height=300&width=500",
    // },
    //    {
    //   title: "Analytics Dashboard",
    //   description: "Real-time data visualization for business metrics",
    //   tech: ["React", "D3.js", "Firebase"],
    //   image: "/placeholder.svg?height=300&width=500",
    // },
  ],
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  url?: string;
}

export function ProjectGrid({ projects }: { projects: any[] }) {
  // Only show up to 6 projects by default
  const visibleProjects = projects.slice(0, 6);
  
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white w-full transition transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30">
                View Project
              </Button>
            </a>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-cyan-400 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of websites that showcase my development skills.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <ProjectGrid projects={projects.websites} />
          {/* Always show the Show All button, even after refresh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <a href="/projects" className="px-6 py-2 rounded bg-cyan-500 text-white hover:bg-cyan-600 transition transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30">
              Show All
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

