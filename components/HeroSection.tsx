"use client"

import React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { FiArrowDown, FiArrowUpRight, FiMail } from "react-icons/fi"
import { BsGithub, BsLinkedin } from "react-icons/bs"

interface HeroSectionProps {
  onOpenResume?: () => void
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const { scrollY } = useScroll()
  const doodleX = useTransform(scrollY, [0, 450], [0, 16])
  const doodleScaleX = useTransform(scrollY, [0, 450], [1, 1.08])
  const triggerResume = () => {
    if (onOpenResume) {
      onOpenResume()
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-resume-modal"))
    }
  }

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Typography & Story Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 space-y-6 text-left"
        >
          {/* Subtle Location & Status Tag */}
          {/* 
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>Mobile Developer at Senja Solutions</span>
            <span>&bull;</span>
            <span>Universitas Terbuka</span>
          </div>
          */}

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08]">
              Muhammad <br />
              <span className="relative inline-block">
                Axel Malik
                <motion.svg
                  viewBox="0 0 260 18"
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-neutral-400/80 dark:text-neutral-500/80 overflow-visible pointer-events-none origin-left"
                  fill="none"
                  style={{ x: doodleX, scaleX: doodleScaleX }}
                >
                  <motion.path
                    d="M 4 12 C 60 5, 170 15, 256 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.svg>
              </span>{" "}
              <br className="hidden sm:inline" />
              Kestana.
            </h1>
            <p className="text-lg sm:text-2xl font-medium text-neutral-500 dark:text-neutral-400 leading-snug">
              Mobile developer &amp; software engineer building cross-platform apps with Flutter.
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            I am currently working as a Mobile Developer at <span className="text-neutral-900 dark:text-white font-medium">Senja Solutions</span> while pursuing an online degree in Information Systems (Sistem Informasi) at <span className="text-neutral-900 dark:text-white font-medium">Universitas Terbuka</span>. With engineering experience at PT Antang Gunung Meratus (Baramulti Group) and SMK Telkom Banjarbaru, I focus on building reliable, fast, and beautifully crafted software.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-sm"
            >
              <span>View Projects</span>
              <FiArrowDown size={13} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 font-medium text-xs text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
            >
              <span>Get in Touch</span>
              <FiArrowUpRight size={13} />
            </a>

            <button
              onClick={triggerResume}
              className="inline-flex items-center space-x-1 px-3 py-2.5 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Resume</span>
              <FiArrowUpRight size={13} />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-4 text-neutral-400 dark:text-neutral-500">
            <a
              href="https://github.com/axelmalik"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <BsGithub size={17} />
            </a>
            <a
              href="mailto:axelmalik07@gmail.com"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <FiMail size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/axelmalik/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={17} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Refined Portrait Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="w-64 sm:w-72 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-all duration-500 group-hover:scale-[1.015]">
              <Image
                src="/potarait.jpg"
                alt="Muhammad Axel Malik Kestana"
                width={360}
                height={450}
                priority
                className="w-full h-80 sm:h-96 object-cover filter contrast-[1.02]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
