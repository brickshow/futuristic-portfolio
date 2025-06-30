"use client"

import { motion } from "framer-motion"
import { Code, Database } from "lucide-react"

const skills = [
  { name: "React", value: 90, icon: <Code className="text-cyan-400" /> },
  { name: "JavaScript", value: 85, icon: <Code className="text-yellow-400" /> },
  { name: "C#", value: 100, icon: <Code className="text-purple-400" /> },
  { name: "SQL", value: 75, icon: <Database className="text-green-400" /> },
  { name: "ASP.NET", value: 100, icon: <Code className="text-orange-400" /> },
  { name: ".NET MAUI", value: 75, icon: <Code className="text-pink-400" /> },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency in various programming languages and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center mb-2">
                <div className="mr-3 p-2 rounded-md bg-gray-800/50 border border-gray-700">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="ml-auto text-cyan-400">{skill.value}%</span>
              </div>
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
