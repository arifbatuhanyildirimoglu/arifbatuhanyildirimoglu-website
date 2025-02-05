"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center py-20 text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-white">About Me</h2>
        <p className="text-lg mb-6">
          I&apos;m a passionate software engineer with a love for creating elegant solutions to complex problems. Currently working as a web developer, I also aim to improve my skills in the field of artificial intelligence to industry standards.
        </p>
        <p className="text-lg">
          When I&apos;m not coding, you can find me watching movies and series or learning business related topics. I believe in continuous learning and always
          strive to stay up-to-date with the latest technologies and best practices in software development.
        </p>
      </motion.div>
    </section>
  )
}

