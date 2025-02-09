"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"

export default function Contact() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }

  }

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
            {t("mainTitle")}
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                {t("subTitle")}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                {t("description")}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:arifbatuhanyildirimoglu@hotmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FiMail className="text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-base">arifbatuhanyildirimoglu@hotmail.com</span>
                </a>
                <a
                  href="https://github.com/arifbatuhanyildirimoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FiGithub className="text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-base">github.com/arifbatuhanyildirimoglu</span>
                </a>
                <a
                  href="https://linkedin.com/in/arifbatuhanyildirimoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin className="text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-base">linkedin.com/in/arifbatuhanyildirimoglu</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      text-white placeholder-gray-400"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      text-white placeholder-gray-400"
                    placeholder={t("form.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      text-white placeholder-gray-400 resize-none"
                    placeholder={t("form.messagePlaceholder")}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-6 py-3 text-sm sm:text-base font-medium rounded-lg
                    transition-colors duration-200 ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                >
                  {isSubmitting ? t("form.buttonSending") : t("form.buttonIdle")}
                </motion.button>

                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm sm:text-base mt-2">
                    {t("form.successMessage")}
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm sm:text-base mt-2">
                    {t("form.errorMessage")}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

