"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

type Project = {
  title: string
  description: string
  image: string
  link?: string
  tags?: string[]
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    link: "https://github.com/brixlampago/portfolio",
    tags: ["Next.js", "Tailwind CSS", "React"],
  },
  {
    title: "Task Manager App",
    description: "A simple and intuitive task manager app to organize your daily activities.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    link: "https://github.com/brixlampago/task-manager",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "E-commerce Store",
    description: "A modern e-commerce store with product listings, cart, and checkout functionality.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "https://github.com/brixlampago/ecommerce-store",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support and user authentication.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "https://github.com/brixlampago/blog-platform",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
]

export default function ProjectSection() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 2}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-cyan-800/30 text-cyan-300 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-auto bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-2 rounded hover:from-cyan-600 hover:to-cyan-700 transition-colors font-semibold text-center"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/projects"
              className="px-6 py-2 rounded bg-cyan-500 text-white hover:bg-cyan-600 transition"
            >
              Show All
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
