"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FiArrowLeft } from "react-icons/fi"
import { supabase } from "@/lib/supabase"
import type { Blog } from "@/lib/supabase"

export default function Blog() {
  const [posts, setPosts] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })

        if (error) throw error
        setPosts(data || [])
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto pt-24 sm:pt-28 md:pt-32">
          {/* Back to Home */}
          <div className="mb-8">
            <Link
              href="/"
              className="group inline-block p-2 -m-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm sm:text-base">
                <FiArrowLeft className="text-lg sm:text-xl" />
                Back to Home
              </span>
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              Sharing my thoughts and experiences about software development,
              technology, and everything in between.
            </p>
          </header>

          {/* Blog Posts */}
          <div className="space-y-8 pb-12 sm:pb-16 md:pb-20">
            {loading ? (
              <div className="text-center text-gray-400">Loading...</div>
            ) : posts.length > 0 ? (
              posts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-colors"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {post.image_url && (
                      <div className="relative aspect-video">
                        <Image
                          src={post.image_url}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                    )}
                    <div className="p-6 sm:p-8">
                      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 text-sm sm:text-base mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          {new Date(post.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <span className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
                          Read More
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 sm:p-8
                  border border-gray-700/50 text-center"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  Coming Soon!
                </h2>
                <p className="text-base sm:text-lg text-gray-300">
                  I&apos;m currently working on some interesting blog posts.
                  Stay tuned for updates!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 