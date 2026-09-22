"use client"

import React, { ReactNode } from "react"
import { motion } from "framer-motion"

interface Props {
  children?: ReactNode
  className?: string
  delay?: number
}

export default function SlideUp({ children, className = "", delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.1), ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
