"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

function ProjectCard({ project, locale }: { project: Project, locale: string | string[] | undefined }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-2xl mx-auto mb-12 md:mb-24"
    >
      <div
        className="bg-gray-800 text-gray-200 overflow-hidden cursor-pointer rounded-lg shadow-lg"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div style={{ backfaceVisibility: "hidden" }}>
            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src={project.images[currentImage] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain bg-gray-900 p-2"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 672px"
                quality={95}
                priority={currentImage === 0}
              />
              <div className="absolute bottom-2 right-2 flex space-x-2">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImage(imgIndex)
                    }}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentImage === imgIndex ? "bg-blue-400" : "bg-gray-400"}`}
                  />
                ))}
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-700 rounded text-xs sm:text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.links && (
                <div className="flex gap-3 sm:gap-4" onClick={(e) => e.stopPropagation()}>
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>GitHub</span>
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            className="bg-gray-800 p-3 sm:p-4 md:p-6 flex items-center justify-center"
          >
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">{project.description[locale as keyof typeof project.description]}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const t = useTranslations('projects')
  const { locale } = useParams()
  return (
    <section id="projects" className="min-h-screen py-12 sm:py-16 md:py-20 text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-white">{t('title')}</h2>
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}

