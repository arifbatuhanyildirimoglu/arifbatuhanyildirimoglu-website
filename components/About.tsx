"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen py-12 sm:py-16 md:py-20 text-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-white">
            About Me
          </h2>
          
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="leading-relaxed"
            >
              I&apos;m a passionate software engineer with a strong foundation in computer science
              and a deep love for creating innovative solutions. My journey in technology
              began during my high school years, where I discovered my passion for coding
              and problem-solving.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="leading-relaxed"
            >
              Throughout my career, I&apos;ve had the opportunity to work on diverse projects,
              from web applications to mobile games. This variety has helped me develop
              a versatile skill set and adaptability to new technologies and challenges.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="leading-relaxed"
            >
              I specialize in full-stack web development and game development, with expertise
              in technologies like React, Next.js, Node.js, and Unity. I&apos;m always eager
              to learn new technologies and stay up-to-date with industry trends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4 sm:pt-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
                What I Do
              </h3>
              <ul className="list-disc list-inside space-y-3 sm:space-y-4 pl-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Develop responsive and user-friendly web applications
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Create engaging mobile games with Unity
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Design and implement efficient backend solutions
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Optimize application performance and user experience
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

