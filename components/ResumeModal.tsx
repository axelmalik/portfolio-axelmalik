"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoMdClose } from "react-icons/io"
import { FiDownload, FiMail, FiArrowUpRight } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"

interface ResumeModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function ResumeModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }: ResumeModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  useEffect(() => {
    const handleToggle = () => setInternalIsOpen((prev) => !prev)
    const handleOpen = () => setInternalIsOpen(true)
    const handleClose = () => setInternalIsOpen(false)

    window.addEventListener("toggle-resume-modal", handleToggle)
    window.addEventListener("open-resume-modal", handleOpen)
    window.addEventListener("close-resume-modal", handleClose)

    return () => {
      window.removeEventListener("toggle-resume-modal", handleToggle)
      window.removeEventListener("open-resume-modal", handleOpen)
      window.removeEventListener("close-resume-modal", handleClose)
    }
  }, [])

  const isVisible = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const handleClose = controlledOnClose || (() => setInternalIsOpen(false))

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#0c0d12] border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-10 z-10 text-neutral-900 dark:text-neutral-100"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-200/80 dark:border-neutral-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Curriculum Vitae
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
                  title="Print or Save PDF"
                >
                  <FiDownload size={13} />
                  <span>Save PDF</span>
                </button>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="py-6 space-y-8 text-left">
              {/* Header */}
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Muhammad Axel Malik Kestana
                </h2>
                <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Software Engineer &bull; Full-Stack &amp; Mobile Developer
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 pt-1">
                  <span>Banjarbaru, Indonesia</span>
                  <span>&bull;</span>
                  <a href="mailto:axelmalik07@gmail.com" className="hover:underline text-neutral-600 dark:text-neutral-300">
                    axelmalik07@gmail.com
                  </a>
                  <span>&bull;</span>
                  <a href="https://github.com/axelmalik" target="_blank" rel="noreferrer" className="hover:underline text-neutral-600 dark:text-neutral-300">
                    github.com/axelmalik
                  </a>
                  <span>&bull;</span>
                  <a href="https://www.linkedin.com/in/axelmalik/" target="_blank" rel="noreferrer" className="hover:underline text-neutral-600 dark:text-neutral-300">
                    linkedin.com/in/axelmalik
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Summary
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Software engineer currently working as a Mobile Developer at Senja Solutions while studying Information Systems (Sistem Informasi) online at Universitas Terbuka. Experienced in cross-platform and native mobile engineering (Flutter, Dart, iOS/Swift, Android/Kotlin) and scalable web architectures (PHP, TypeScript, MySQL).
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Work Experience
                </h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        Senja Solutions
                      </h4>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Jul 2025 — Present</span>
                    </div>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      Mobile Developer &bull; Contract (On-site)
                    </p>
                    <p className="text-xs text-neutral-400 pt-0.5">
                      Developing cross-platform mobile applications utilizing JavaScript, TypeScript, and mobile toolchains. Collaborating on-site on system architectures and intuitive interface engineering.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        PT Antang Gunung Meratus (Baramulti Group)
                      </h4>
                      <span className="text-xs text-neutral-400">Nov 2024 — Feb 2025</span>
                    </div>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      Software Developer &bull; Internship (On-site &bull; Banjarbaru)
                    </p>
                    <p className="text-xs text-neutral-400 pt-0.5">
                      Contributed to mobile application development and full-stack web tools to optimize operational workflows and internal management systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        Universitas Terbuka
                      </h4>
                      <span className="text-xs text-neutral-400">August 2026 — Present</span>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Bachelor of Information Systems (Sistem Informasi) &bull; Online
                    </p>
                    <p className="text-xs text-neutral-400">
                      Focus: Enterprise Information Architecture, Relational Databases, and Systems Analysis.
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        SMK Telkom Banjarbaru
                      </h4>
                      <span className="text-xs text-neutral-400">2023 — 2026</span>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Software Engineering (Rekayasa Perangkat Lunak)
                    </p>
                    <p className="text-xs text-neutral-400">
                      Focus: Web Application Development, Mobile Architecture with Flutter, OOP, and Relational Databases.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Skills &amp; Technologies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                    <span className="font-semibold block mb-1">Web Development</span>
                    <p className="text-neutral-500">React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3</p>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                    <span className="font-semibold block mb-1">Mobile Development</span>
                    <p className="text-neutral-500">Flutter, Dart, iOS (Swift), Android (Kotlin), Mobile UI Architecture</p>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                    <span className="font-semibold block mb-1">Backend &amp; Persistence</span>
                    <p className="text-neutral-500">PHP, Java, MySQL, Relational Database Modeling, REST APIs</p>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                    <span className="font-semibold block mb-1">Engineering Tools</span>
                    <p className="text-neutral-500">Git, GitHub, Systems Analysis, VS Code, Figma</p>
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Featured Projects
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900 dark:text-white">Lupalupe.wear — E-Commerce Store</span>
                      <span className="text-neutral-400">Next.js, Supabase, Tailwind</span>
                    </div>
                    <p className="text-neutral-500 pt-0.5">
                      Live production storefront featuring dynamic catalog indexing, wishlist &amp; cart state sync, and Supabase backend.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900 dark:text-white">ESC/POS Emulator — Thermal Printer Simulator</span>
                      <span className="text-neutral-400">Android, Kotlin, Sockets</span>
                    </div>
                    <p className="text-neutral-500 pt-0.5">
                      Native Android network printer emulator with multi-port TCP server, ESC/POS byte parsing, and raster rendering.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900 dark:text-white">Kontaku — Mobile Contact Manager</span>
                      <span className="text-neutral-400">Flutter, Dart, Android</span>
                    </div>
                    <p className="text-neutral-500 pt-0.5">
                      Modern mobile utility featuring card-driven interface, instant contact indexing, and clean gestures.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900 dark:text-white">Cinetics — Movie Commerce &amp; Streaming Platform</span>
                      <span className="text-neutral-400">PHP, MySQL, Tailwind</span>
                    </div>
                    <p className="text-neutral-500 pt-0.5">
                      Platform combining physical movie media purchasing with virtual license checkout and dynamic catalog search.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-end space-x-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Close
              </button>
              <a
                href="mailto:axelmalik07@gmail.com"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold"
              >
                <FiMail size={13} />
                <span>Contact Axel</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
