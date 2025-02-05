"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
}

export default function Hero() {
  const title = "Hello, I'm Arif Batuhan Yıldırımoğlu"

  return (
    <section id="home" className="h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold mb-4 text-white"
          >
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="text-white">
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl text-gray-200"
          >
            Software Engineer | Problem Solver | Tech Enthusiast
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/your-image.jpg"
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full border-4 border-blue-400 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}

