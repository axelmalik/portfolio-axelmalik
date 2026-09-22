"use client"

import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { RiMoonLine, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { FiArrowUpRight } from "react-icons/fi"

const NAV_ITEMS = [
  { label: "Projects", page: "projects" },
  { label: "About", page: "about" },
  { label: "Stack", page: "skills" },
  { label: "Contact", page: "contact" },
]

interface NavbarProps {
  onOpenResume?: () => void
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["home", "projects", "about", "skills", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const currentTheme = theme === "system" ? systemTheme : theme

  const triggerResume = () => {
    if (onOpenResume) {
      onOpenResume()
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-resume-modal"))
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setNavbar(false)
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `#${targetId}`)
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-8"
    >
      <div
        className={`mx-auto max-w-4xl rounded-full transition-all duration-300 px-5 py-2.5 flex items-center justify-between border ${
          scrolled
            ? "bg-white/85 dark:bg-[#09090b]/85 backdrop-blur-xl border-neutral-200 dark:border-neutral-800 shadow-sm"
            : "bg-white/50 dark:bg-[#09090b]/50 backdrop-blur-md border-neutral-200/50 dark:border-neutral-800/50"
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="cursor-pointer group flex items-center space-x-1.5"
        >
          <span className="font-bold text-sm tracking-tight text-neutral-900 dark:text-white">
            axel malik
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white inline-block"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.page
            return (
              <a
                key={idx}
                href={`#${item.page}`}
                onClick={(e) => handleNavClick(e, item.page)}
                className={`px-3.5 py-1.5 text-xs transition-colors cursor-pointer ${
                  isActive
                    ? "text-neutral-900 dark:text-white font-semibold"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Resume Trigger */}
          <button
            onClick={triggerResume}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors cursor-pointer"
          >
            <span>Resume</span>
            <FiArrowUpRight size={13} />
          </button>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
              title={currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
            >
              {currentTheme === "dark" ? (
                <RiSunLine size={16} />
              ) : (
                <RiMoonLine size={16} />
              )}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-1 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              aria-label="Toggle Theme"
            >
              {currentTheme === "dark" ? <RiSunLine size={16} /> : <RiMoonLine size={16} />}
            </button>
          )}
          <button
            onClick={() => setNavbar(!navbar)}
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            aria-label="Toggle Navigation"
          >
            {navbar ? <IoMdClose size={18} /> : <IoMdMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {navbar && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 mx-auto max-w-4xl rounded-2xl bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl p-4 text-xs space-y-2"
          >
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.page}`}
                onClick={(e) => handleNavClick(e, item.page)}
                className="block px-3 py-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setNavbar(false)
                triggerResume()
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-neutral-900 dark:text-white font-semibold bg-neutral-100 dark:bg-neutral-800"
            >
              <span>View Resume</span>
              <FiArrowUpRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
