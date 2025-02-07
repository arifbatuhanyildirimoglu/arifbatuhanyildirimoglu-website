"use client"

import { motion } from "framer-motion"

interface JourneyItem {
  title: string
  organization: string
  period: string
  description: string[]
}

const journeyItems: JourneyItem[] = [
  {
    title: "Software Engineer",
    organization: "Colin's",
    period: "2024 - Present",
    description: [
      "Developing web applications using .NET and MSSQL.",
      "Creating responsive and user-friendly interfaces",
      "Implementing backend solutions with various databases and cloud services",
      "Collaborating with clients to understand requirements and deliver high-quality solutions"
    ]
  },
  {
    title: "Game Developer",
    organization: "Happy Game Company",
    period: "2022 - 2023",
    description: [
      "Developing mobile games using Unity and C#",
      "Implementing game mechanics and user interfaces",
      "Optimizing game performance for mobile devices",
      "Publishing games to app stores and maintaining them"
    ]
  },
  {
    title: "Software Engineering Student",
    organization: "Izmir University of Economics",
    period: "2019 - 2023",
    description: [
      "Studied computer science fundamentals and software engineering principles",
      "Completed various projects in different programming languages",
      "Participated in team projects",
      "Graduated with honors"
    ]
  }
]

export default function Journey() {
  return (
    <section id="journey" className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
            My Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-500/30" />

            {/* Journey items */}
            <div className="space-y-12">
              {journeyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col sm:flex-row gap-8 ${
                    index % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "sm:pr-16" : "sm:pl-16"} pl-8 sm:pl-0`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{item.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base text-gray-400 mb-4">
                        <span className="font-medium text-blue-400">{item.organization}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{item.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

