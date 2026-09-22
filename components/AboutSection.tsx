"use client"

import React, { useRef } from "react"
import SlideUp from "./SlideUp"
import { motion, useScroll, useSpring } from "framer-motion"

const WORK_EXPERIENCE = [
  {
    period: "Jul 2025 — Present",
    role: "Mobile Developer",
    organization: "Senja Solutions &bull; Contract (On-site)",
    description:
      "Developing and scaling mobile applications utilizing JavaScript, TypeScript, and modern mobile tooling. Collaborating on client solutions, mobile architectures, and intuitive interface design.",
  },
  {
    period: "Nov 2024 — Feb 2025",
    role: "Software Developer",
    organization: "PT Antang Gunung Meratus (Baramulti Group) &bull; Internship",
    description:
      "Contributed to mobile application development and full-stack web solutions in Banjarbaru, Indonesia. Built operational software tools and streamlined internal workflows.",
  },
]

const EDUCATION = [
  {
    period: "August 2026 — Present",
    role: "Information Systems (Sistem Informasi)",
    organization: "Universitas Terbuka &bull; Online",
    description:
      "Pursuing an online degree in Information Systems, diving into enterprise architectures, relational databases, systems design, and modern software engineering paradigms.",
  },
  {
    period: "2023 — 2026",
    role: "Software Engineering (Rekayasa Perangkat Lunak)",
    organization: "SMK Telkom Banjarbaru",
    description:
      "Comprehensive vocational foundations in object-oriented programming, full-stack web platforms, database normalization, and mobile development with Flutter & Dart.",
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.35"],
  })
  const circlePathLength = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={sectionRef} id="about" className="py-24 sm:py-32 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <SlideUp>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-snug">
              About &amp;{" "}
              <span className="relative inline-block">
                Philosophy.
                <svg
                  viewBox="0 0 190 52"
                  className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+1rem)] h-[calc(100%+0.5rem)] text-neutral-400/80 dark:text-neutral-500/80 pointer-events-none overflow-visible"
                  fill="none"
                >
                  <motion.path
                    d="M 12 28 C 10 12, 45 4, 95 4 C 150 4, 182 14, 180 28 C 178 44, 140 48, 90 48 C 38 48, 8 40, 14 22"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    style={{ pathLength: circlePathLength }}
                  />
                </svg>
              </span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I am a Mobile Developer at <span className="text-neutral-900 dark:text-white font-medium">Senja Solutions</span> and an Information Systems student at <span className="text-neutral-900 dark:text-white font-medium">Universitas Terbuka</span>, based in South Kalimantan, Indonesia.
              </p>
              <p>
                My professional experience includes software development at <span className="text-neutral-900 dark:text-white font-medium">PT Antang Gunung Meratus (Baramulti Group)</span> and vocational software engineering at <span className="text-neutral-900 dark:text-white font-medium">SMK Telkom Banjarbaru</span>.
              </p>
              <p>
                I focus on clean architecture, responsive mobile engineering with <span className="text-neutral-900 dark:text-white font-medium">Flutter &amp; Dart</span>, and performant web systems with <span className="text-neutral-900 dark:text-white font-medium">TypeScript, PHP, and relational databases</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Work & Education */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Work Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Work Experience
              </h3>
              <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80 border-y border-neutral-200/80 dark:border-neutral-800/80">
                {WORK_EXPERIENCE.map((item, idx) => (
                  <div key={idx} className="py-5 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                        {item.role}
                      </h4>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {item.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 pt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Education
              </h3>
              <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80 border-y border-neutral-200/80 dark:border-neutral-800/80">
                {EDUCATION.map((item, idx) => (
                  <div key={idx} className="py-5 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                        {item.role}
                      </h4>
                      <span className="text-xs font-medium text-neutral-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {item.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 pt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </SlideUp>
    </section>
  )
}
