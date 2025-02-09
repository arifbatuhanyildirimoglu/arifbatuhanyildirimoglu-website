"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Arif Batuhan
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6">
              Software Engineer
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-8">
              I&apos;m passionate about creating innovative solutions and bringing ideas to life through code.
              Focused on web development and game development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium 
                  hover:bg-blue-600 transition-colors duration-300
                  shadow-lg shadow-blue-500/30 w-full sm:w-auto text-center"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-medium 
                  hover:bg-blue-500/10 transition-colors duration-300
                  w-full sm:w-auto text-center"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
              <Image
                src="/images/author.jpg"
                alt="Arif Batuhan Yıldırımoğlu"
                fill
                className="object-cover rounded-full border-4 border-blue-500/50 z-10"
                priority
                quality={100}
              />
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 filter blur-xl scale-110 animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full p-1.5">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-scroll mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

