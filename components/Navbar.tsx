"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = ["Home", "About", "Skills", "Projects", "Journey", "Contact"]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
        <div className="flex items-center justify-between md:justify-center relative">
          {/* Logo */}
          <Link href="/" className="hidden lg:block lg:absolute lg:left-4">
            <div className="relative w-14 h-14 group overflow-hidden bg-gray-100 rounded-tr-lg rounded-bl-lg transition-all duration-300 hover:rounded-none">
              <div className="absolute inset-0 flex items-center justify-center text-gray-900 font-semibold text-sm transition-all duration-300 group-hover:scale-105">
                {'<ABY>'}
              </div>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <ul className={`
            md:flex md:justify-center md:items-center md:space-x-8
            ${isMenuOpen ? 'block' : 'hidden'}
            space-y-4 md:space-y-0
            py-4 md:py-0
            bg-gray-900/80 md:bg-transparent
            backdrop-blur-md md:backdrop-blur-none
            rounded-lg md:rounded-none
            mt-2 md:mt-0
            px-4 md:px-0
            absolute md:relative
            top-full left-0 right-0
            md:top-auto md:left-auto md:right-auto
          `}>
            {isHomePage ? (
              navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={`text-base sm:text-lg font-medium transition-colors duration-300 block md:inline-block ${
                      activeSection === item ? "text-blue-400" : "text-white hover:text-blue-300"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <Link
                  href="/"
                  className="text-base sm:text-lg font-medium text-white hover:text-blue-300 transition-colors duration-300 block md:inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
            )}
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.div
                  className={`
                    relative overflow-hidden
                    px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg
                    border-2 border-blue-500/50
                    ${pathname.startsWith("/blog")
                      ? "bg-blue-500 shadow-lg shadow-blue-500/30"
                      : "bg-transparent hover:bg-blue-500/10"
                    }
                    group inline-block w-full md:w-auto text-center
                  `}
                  whileHover={{
                    boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className={`
                    relative z-10 text-base sm:text-lg font-medium
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
      </div>
    </motion.nav>
  )
}

