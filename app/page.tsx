"use client"

import AnimatedBackground from "@/components/animated-background"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
