"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and the technologies used.",
    images: ["/project1-main.jpg", "/project1-1.jpg", "/project1-2.jpg"],
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2 and the technologies used.",
    images: ["/project2-main.jpg", "/project2-1.jpg", "/project2-2.jpg"],
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3 and the technologies used.",
    images: ["/project3-main.jpg", "/project3-1.jpg", "/project3-2.jpg"],
  },
]

function ProjectCard({ project }: { project: { title: string; description: string; images: string[] } }) {
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
      className="w-full max-w-2xl mx-auto mb-24"
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
            <div className="relative h-64">
              <Image
                src={project.images[currentImage] || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-2 right-2 flex space-x-2">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImage(imgIndex)
                    }}
                    className={`w-3 h-3 rounded-full ${currentImage === imgIndex ? "bg-blue-400" : "bg-gray-400"}`}
                  />
                ))}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
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
            className="bg-gray-800 p-4 flex items-center justify-center"
          >
            <p className="text-gray-300">{project.description}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

