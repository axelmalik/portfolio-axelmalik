"use client"

import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FiMail, FiArrowUp } from "react-icons/fi"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 py-12 text-xs text-neutral-500 transition-colors">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-neutral-900 dark:text-white">
              axel malik.
            </span>
            <span>&bull;</span>
            <span>Software Engineer</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/axelmalik"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <BsGithub size={15} />
            </a>
            <a
              href="mailto:axelmalik07@gmail.com"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <FiMail size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/axelmalik/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-neutral-400 text-[11px]">
          <p>&copy; {currentYear} Muhammad Axel Malik Kestana. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
