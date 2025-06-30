"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      // Set default theme based on system preference
      const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDarkMode ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
