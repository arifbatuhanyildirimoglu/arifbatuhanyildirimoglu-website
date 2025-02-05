"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const journeyItems = [
  { year: "2018", title: "Started Computer Science Degree", description: "Began my journey in software engineering." },
  { year: "2020", title: "First Internship", description: "Gained practical experience at a tech startup." },
  { year: "2021", title: "Graduated University", description: "Completed my degree with honors." },
  { year: "2022", title: "First Full-time Role", description: "Joined a leading tech company as a junior developer." },
  {
    year: "2023",
    title: "Promoted to Senior Developer",
    description: "Recognized for my contributions and leadership.",
  },
]

function JourneyItem({ 
  item, 
  index, 
  isGlowing,
  progress,
  isLast
}: { 
  item: { year: string; title: string; description: string }, 
  index: number, 
  isGlowing: boolean,
  progress: number,
  isLast: boolean
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  // Calculate if the milestone has been passed
  const isPassed = progress * 100 > (index + 1) * (100 / journeyItems.length)

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={`flex items-center ${isLast ? "mb-0" : "mb-16"} ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
    >
      <div className="w-1/2" />
      <div className="absolute left-1/2 transform -translate-x-1/2">
        {/* Connection line to main timeline */}
        <motion.div
          className="absolute top-1/2 w-8 h-0.5"
          style={{
            left: index % 2 === 0 ? '100%' : 'auto',
            right: index % 2 === 0 ? 'auto' : '100%',
            background: index % 2 === 0 
              ? 'linear-gradient(to left, rgba(96, 165, 250, 0), rgb(96, 165, 250))'
              : 'linear-gradient(to right, rgba(96, 165, 250, 0), rgb(96, 165, 250))'
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isPassed ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      <motion.div
        initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          scale: isGlowing ? 1.05 : 1
        }}
        transition={{ 
          delay: 0.2, 
          duration: 0.5,
          scale: {
            duration: 0.3
          }
        }}
        className={`w-1/2 p-6 rounded-lg transition-all duration-300 relative
          ${isPassed ? 'bg-gray-800/80' : 'bg-gray-800/50'}
          ${isGlowing ? 'shadow-2xl shadow-blue-500/30 bg-gray-800' : ''}
          backdrop-blur-sm
        `}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isPassed ? "100%" : "0%" }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"
          style={{ borderRadius: "0 0 0.5rem 0.5rem" }}
        />
        <h3 className="text-xl font-bold mb-2 text-blue-400">{item.year}</h3>
        <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
        <p className="text-gray-300">{item.description}</p>
      </motion.div>
    </motion.div>
  )
}

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && containerRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        
        // Check if section is in view
        const isVisible = sectionRect.top < window.innerHeight && sectionRect.bottom > 0
        setIsInView(isVisible)

        if (isVisible) {
          // Calculate scroll progress through the section
          const viewportMiddle = window.innerHeight / 2
          const sectionMiddle = sectionRect.height / 2
          const distanceFromMiddle = viewportMiddle - (sectionRect.top + sectionMiddle)
          const progress = (distanceFromMiddle + sectionMiddle) / sectionRect.height
          const normalizedProgress = Math.max(0, Math.min(1, progress))
          setLineProgress(normalizedProgress)

          // Find the active milestone
          const items = containerRef.current.querySelectorAll('.timeline-item')
          let activeIndex = null

          items.forEach((item, index) => {
            const rect = item.getBoundingClientRect()
            const itemCenter = rect.top + rect.height / 2
            
            if (Math.abs(itemCenter - viewportMiddle) < 10) {
              activeIndex = index
            }
          })

          setActiveItemIndex(activeIndex)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="journey" className="min-h-screen py-20 relative text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Journey</h2>
        <div ref={containerRef} className="relative">
          {/* Timeline line container */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Background line */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-400/20"
            />
            
            {/* Animated progress line */}
            {isInView && (
              <motion.div
                className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 to-blue-400"
                style={{
                  height: `${lineProgress * 100}%`,
                  boxShadow: "0 0 20px 2px rgba(96, 165, 250, 0.5)",
                }}
              >
                {/* Particles following the line */}
                <AnimatePresence>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 -left-0.5 rounded-full bg-blue-300"
                      initial={{ top: "0%", opacity: 0, scale: 0 }}
                      animate={{
                        top: "100%",
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.6,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  ))}
                </AnimatePresence>

                {/* Glowing dot at the end of the line */}
                <motion.div
                  className="absolute bottom-0 w-4 h-4 -left-1.5 rounded-full bg-blue-400"
                  style={{
                    boxShadow: "0 0 20px 5px rgba(96, 165, 250, 0.7)",
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            )}
          </div>

          {journeyItems.map((item, index) => (
            <div key={item.year} className="timeline-item">
              <JourneyItem 
                item={item} 
                index={index} 
                isGlowing={index === activeItemIndex}
                progress={lineProgress}
                isLast={index === journeyItems.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

