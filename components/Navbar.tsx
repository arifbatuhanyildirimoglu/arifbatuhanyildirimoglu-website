"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = ["Home", "About", "Skills", "Projects", "Journey", "Contact"]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const sections = navItems.map((item) => document.getElementById(item.toLowerCase()))
        const scrollPosition = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i])
            break
          }
        }
      }

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <ul className="flex justify-center items-center space-x-8">
          {isHomePage ? (
            navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeSection === item ? "text-blue-400" : "text-white hover:text-blue-300"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))
          ) : (
            <li>
              <Link
                href="/"
                className="text-lg font-medium text-white hover:text-blue-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
          )}
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/blog">
              <motion.div
                className={`
                  relative overflow-hidden
                  px-6 py-2 rounded-lg
                  border-2 border-blue-500/50
                  ${pathname.startsWith("/blog")
                    ? "bg-blue-500 shadow-lg shadow-blue-500/30"
                    : "bg-transparent hover:bg-blue-500/10"
                  }
                  group
                `}
                whileHover={{
                  boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 }
                }}
              >
                <span className={`
                  relative z-10 text-lg font-medium
                  ${pathname.startsWith("/blog") ? "text-white" : "text-blue-400 group-hover:text-blue-300"}
                  transition-colors duration-300
                `}>
                  Blog
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "overlay" }}
                />
                {!pathname.startsWith("/blog") && (
                  <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.3),transparent_70%)]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                  />
                )}
              </motion.div>
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  )
}

