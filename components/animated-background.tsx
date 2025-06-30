"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-cyan-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              width: `${Math.random() * 30 + 20}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              width: ["20%", "40%", "20%"],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i + 20}
            className="absolute w-px bg-purple-500/30"
            style={{
              top: 0,
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 30 + 20}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              height: ["20%", "40%", "20%"],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
