"use client"

import React, { useRef } from "react"
import SlideUp from "./SlideUp"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiAndroid,
  SiSwift,
  SiKotlin,
  SiApple,
  SiPhp,
  SiMysql,
  SiGit,
  SiFigma,
  SiSupabase,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { FiServer, FiCpu } from "react-icons/fi"

const SKILL_GROUPS = [
  {
    title: "Web & Interface",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5 / CSS3", icon: SiHtml5 },
    ],
  },
  {
    title: "Mobile Architecture",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "iOS", icon: SiApple },
      { name: "Swift", icon: SiSwift },
      { name: "Android", icon: SiAndroid },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Supabase", icon: SiSupabase },
      { name: "MySQL", icon: SiMysql },
      { name: "PHP", icon: SiPhp },
      { name: "Java", icon: FaJava },
      { name: "REST APIs", icon: FiServer },
    ],
  },
  {
    title: "Tools & Systems",
    skills: [
      { name: "Git & GitHub", icon: SiGit },
      { name: "Figma", icon: SiFigma },
      { name: "Systems Analysis", icon: FiCpu },
    ],
  },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.35"],
  })
  const skillsProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  })
  const sparkRotate = useTransform(skillsProgress, [0, 1], [-45, 180])

  return (
    <section ref={sectionRef} id="skills" className="py-24 sm:py-32 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <SlideUp>
        <div className="space-y-4 mb-14">
          <div className="flex items-center space-x-2.5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Technical{" "}
              <span className="relative inline-block">
                Arsenal.
                <svg
                  viewBox="0 0 160 14"
                  className="absolute -bottom-1 left-0 w-full h-2.5 text-neutral-400/80 dark:text-neutral-500/80 overflow-visible pointer-events-none origin-left"
                  fill="none"
                >
                  <motion.path
                    d="M 4 9 C 45 3, 95 12, 156 5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    style={{ pathLength: skillsProgress }}
                  />
                </svg>
              </span>
            </h2>
            <motion.div
              style={{ rotate: sparkRotate }}
              className="text-neutral-400 dark:text-neutral-500 select-none pointer-events-none origin-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <motion.path
                  d="M 12 4 L 12 20 M 4 12 L 20 12"
                  style={{ pathLength: skillsProgress }}
                />
              </svg>
            </motion.div>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md">
            Languages, frameworks, and engineering tools I utilize to construct software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {group.skills.map((skill, sIdx) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center space-x-3 p-3.5 rounded-xl bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                    >
                      <Icon size={16} className="text-neutral-600 dark:text-neutral-400 shrink-0" />
                      <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </SlideUp>
    </section>
  )
}
