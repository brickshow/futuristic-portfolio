"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative text-gray-300 hover:text-white transition-colors group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </Link>
  )
}

export default function Header() {
  const { setTheme, theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="relative h-10 w-10 mr-2">
              <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                BL
              </div>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Brix Lampago
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            {theme === "dark" ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme("light")}
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
              >
                <Moon className="h-5 w-5" />
                <span className="sr-only">Switch to light mode</span>
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme("dark")}
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
              >
                <Sun className="h-5 w-5" />
                <span className="sr-only">Switch to dark mode</span>
              </Button>
            )}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col"
          >
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8 flex-1">
              <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="/skills" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
              {theme === "dark" ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setTheme("light")
                    setMobileMenuOpen(false)
                  }}
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 mt-4"
                >
                  <Moon className="h-5 w-5" />
                  <span className="sr-only">Switch to light mode</span>
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setTheme("dark")
                    setMobileMenuOpen(false)
                  }}
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 mt-4"
                >
                  <Sun className="h-5 w-5" />
                  <span className="sr-only">Switch to dark mode</span>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
