"use client"

import React, { useState, useRef } from "react"
import SlideUp from "./SlideUp"
import { motion, useScroll, useSpring } from "framer-motion"
import { FiMail, FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const emailAddress = "axelmalik07@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 4000)
  }

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.35"],
  })
  const contactPathLength = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={sectionRef} id="contact" className="py-24 sm:py-32 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <SlideUp>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-snug">
                Let&apos;s{" "}
                <span className="relative inline-block">
                  connect.
                  <svg
                    viewBox="0 0 160 14"
                    className="absolute -bottom-1 left-0 w-full h-2.5 text-neutral-400/80 dark:text-neutral-500/80 overflow-visible pointer-events-none"
                    fill="none"
                  >
                    <motion.path
                      d="M 4 8 C 45 3, 95 11, 154 5"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      style={{ pathLength: contactPathLength }}
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Whether you have an internship opportunity, an inquiry about a project, or just want to discuss software engineering, feel free to reach out.
              </p>
            </div>

            {/* Email Card with 1-Click Copy */}
            <div className="relative group">
              {/* Playful curved doodle arrow pointing to the direct contact */}
              <div className="hidden sm:block absolute -top-7 right-3 text-neutral-400/70 dark:text-neutral-500/70 pointer-events-none">
                <svg
                  width="65"
                  height="30"
                  viewBox="0 0 80 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M 6 8 C 30 4, 55 6, 68 22"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    style={{ pathLength: contactPathLength }}
                  />
                  <motion.path
                    d="M 58 22 L 68 22 L 67 12"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    style={{ pathLength: contactPathLength }}
                  />
                </svg>
              </div>

              <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-3">
              <span className="text-xs font-medium text-neutral-400">Direct Email</span>
              <p className="text-base font-semibold text-neutral-900 dark:text-white">
                {emailAddress}
              </p>
              <div className="flex items-center space-x-2 pt-1">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors shadow-xs"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-emerald-500" size={13} />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={13} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <span>Open Mail</span>
                  <FiArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

            {/* Social Links */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-medium text-neutral-400">Find me on</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/axelmalik"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <BsGithub size={14} />
                  <span>GitHub</span>
                  <FiArrowUpRight size={12} />
                </a>
                <span className="text-neutral-300 dark:text-neutral-700">&bull;</span>
                <a
                  href="https://www.linkedin.com/in/axelmalik/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <BsLinkedin size={14} />
                  <span>LinkedIn</span>
                  <FiArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40">
              {submitted ? (
                <div className="p-8 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <FiCheck size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Message Ready</h3>
                  <p className="text-xs text-neutral-500">
                    Your email client has been opened with your message pre-loaded.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, idea, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </SlideUp>
    </section>
  )
}
