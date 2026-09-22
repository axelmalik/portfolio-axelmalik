"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"
import { FiArrowUpRight } from "react-icons/fi"

interface Project {
  id: string
  title: string
  subtitle: string
  category: "all" | "web" | "mobile"
  year: string
  description: string
  image: string
  tags: string[]
  github?: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    id: "lupalupewear",
    title: "Lupalupe.wear",
    subtitle: "Premium Modest Fashion & E-Commerce Store",
    category: "web",
    year: "2025",
    description:
      "A high-performance modern e-commerce storefront for modest fashion brand Lupalupe.wear. Engineered with Next.js and Supabase backend, featuring dynamic catalog indexing, wishlist & cart state synchronization, and streamlined checkout workflows.",
    image: "/lupalupe.png",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "E-Commerce"],
    link: "https://lupalupewear.store",
  },
  {
    id: "escpos-emu",
    title: "ESC/POS Emulator",
    subtitle: "Virtual Thermal Printer & Multi-Port Network Emulator",
    category: "mobile",
    year: "2025",
    description:
      "A native Android thermal printer emulator engineered for POS software development and hardware testing. Runs concurrent multi-port TCP socket listeners, parses raw ESC/POS command streams, decodes raster bitmap graphics, and renders interactive 58mm/80mm receipt previews.",
    image: "/escpos-emu.png",
    tags: ["Android", "Kotlin", "TCP Sockets", "ESC/POS Protocol", "Hardware Simulation"],
    github: "https://github.com/axelmalik/escpos-emu-android",
  },
  {
    id: "kontaku",
    title: "Kontaku",
    subtitle: "Mobile Contact Manager Application",
    category: "mobile",
    year: "2024",
    description:
      "A modern cross-platform mobile utility built with Flutter and Dart. Designed for rapid contact indexing, instant fuzzy search, group categorization, and a minimalist gesture-driven mobile interface.",
    image: "/kontaku.png",
    tags: ["Flutter", "Dart", "Android", "Mobile Architecture"],
    github: "https://github.com/axelmalik/kontaku",
  },
  // {
  //   id: "cinetics",
  //   title: "Cinetics",
  //   subtitle: "Movie Commerce & Digital Streaming Platform",
  //   category: "web",
  //   year: "2024",
  //   description:
  //     "A dual-channel entertainment platform that allows customers to purchase physical disc media as well as acquire on-demand streaming licenses. Features relational catalog search, cart management, and order processing.",
  //   image: "/cinetics.jpg",
  //   tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
  //   github: "https://github.com/axelmalik/Cinetics-Final",
  // },
  {
    id: "infokus",
    title: "Infokus",
    subtitle: "School Financial Administration & Tuition Portal",
    category: "web",
    year: "2024",
    description:
      "An institutional finance management system designed for schools to manage student tuition fees, automated invoice generation, payment status verification, and comprehensive ledger reporting.",
    image: "/infokus.png",
    tags: ["Web Architecture", "PHP", "MySQL", "Systems Analysis"],
    // github: "https://github.com/axelmalik",
  },
  // {
  //   id: "theatera",
  //   title: "Theatera",
  //   subtitle: "Cinema Seat Reservation & Ticketing Portal",
  //   category: "web",
  //   year: "2023",
  //   description:
  //     "An intuitive cinema booking platform engineered to make theatre seat selection and schedule booking quick and frictionless. Features an interactive 2D seat matrix and instant digital confirmation.",
  //   image: "/theatera.png",
  //   tags: ["JavaScript (ES6+)", "CSS3", "HTML5", "Interactive UI"],
  //   github: "https://github.com/axelmalik",
  // },
]

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Applications" },
  { id: "mobile", label: "Mobile Apps" },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "mobile">("all")
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.35"],
  })
  const projectsProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  })
  const sparkleRotate = useTransform(projectsProgress, [0, 1], [-90, 270])
  const sparkleScale = useTransform(projectsProgress, [0, 0.4, 1], [0.3, 1.2, 1])

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section ref={sectionRef} id="projects" className="py-24 sm:py-32 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <SlideUp>
        {/* Header with Sliding Pill Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Selected{" "}
                <span className="relative inline-block">
                  Projects.
                  <svg
                    viewBox="0 0 170 14"
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-neutral-400/80 dark:text-neutral-500/80 overflow-visible pointer-events-none origin-left"
                    fill="none"
                  >
                    <motion.path
                      d="M 4 8 C 50 2, 110 12, 166 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{ pathLength: projectsProgress }}
                    />
                  </svg>
                </span>
              </h2>
              <motion.div
                style={{ rotate: sparkleRotate, scale: sparkleScale }}
                whileHover={{ scale: 1.35, rotate: 45 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="cursor-pointer text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors select-none origin-center"
                title="Handcrafted work"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M 12 2 C 12 7, 7 12, 2 12 C 7 12, 12 17, 12 22 C 12 17, 17 12, 22 12 C 17 12, 12 7, 12 2 Z"
                    style={{ pathLength: projectsProgress }}
                  />
                </svg>
              </motion.div>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md">
              A curated collection of mobile applications and full-stack web platforms built with focus on craft and reliability.
            </p>
          </div>

          {/* Sliding Filter Tabs */}
          <div className="flex items-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as "all" | "web" | "mobile")}
                className="relative px-4 py-1.5 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300 transition-colors"
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="activeProjectFilter"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white dark:bg-neutral-800 shadow-xs"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Big Cards Showcase */}
        <motion.div layout className="space-y-20 lg:space-y-28">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#0c0d12]/50 overflow-hidden shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                {/* Image Container with Smooth Zoom */}
                <div className="relative aspect-[16/10] sm:aspect-[21/10] overflow-hidden bg-neutral-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={800}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                  />
                </div>

                {/* Details Footer */}
                <div className="p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium text-neutral-400">
                        &bull; {project.year}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="shrink-0 flex flex-wrap items-center gap-2.5 self-start md:self-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs"
                      >
                        <span>Visit Site</span>
                        <FiArrowUpRight size={13} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-full border text-xs font-medium transition-colors ${
                          project.link
                            ? "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                            : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200"
                        }`}
                      >
                        <BsGithub size={13} />
                        <span>Source Code</span>
                        <FiArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SlideUp>
    </section>
  )
}
