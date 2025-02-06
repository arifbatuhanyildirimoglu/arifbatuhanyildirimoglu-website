"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/skills"

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6
                    border border-gray-700/50 hover:border-blue-500/50 transition-colors
                    flex flex-col items-center gap-2 sm:gap-3 group"
                >
                  <IconComponent className={`text-3xl sm:text-4xl md:text-5xl ${skill.color} 
                    transition-transform group-hover:scale-110`} />
                  <span className="text-sm sm:text-base text-gray-300 text-center font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

