"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const inputVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center py-20 text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Contact Me
        </motion.h2>
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={inputVariants}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white border-none h-14 text-lg focus:ring-2 focus:ring-blue-400 rounded-lg px-4"
            />
          </motion.div>
          <motion.div variants={inputVariants}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 text-white border-none h-14 text-lg focus:ring-2 focus:ring-blue-400 rounded-lg px-4"
            />
          </motion.div>
          <motion.div variants={inputVariants}>
            <textarea
              placeholder="Your Message"
              className="w-full bg-gray-800 text-white border-none h-40 text-lg focus:ring-2 focus:ring-blue-400 rounded-lg p-4"
            />
          </motion.div>
          <motion.div variants={inputVariants}>
            <button
              type="submit"
              className="w-full h-14 text-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded-lg text-white font-semibold"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  )
}

