"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FiArrowLeft, FiCalendar } from "react-icons/fi"
import { supabase } from "@/lib/supabase"
import type { Blog } from "@/lib/supabase"
import { useParams } from "next/navigation"

export default function BlogPost() {
  const [post, setPost] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const params = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('slug', params.slug)
          .eq('published', true)
          .single()

        if (error || !data) {
          setNotFound(true)
        } else {
          setPost(data)
        }
      } catch (error) {
        console.error('Error fetching blog post:', error)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto pt-24 sm:pt-28 md:pt-32 text-center text-gray-400">
            Loading...
          </div>
        </div>
      </main>
    )
  }

  if (notFound) {
    return (
      <main className="min-h-screen bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto pt-24 sm:pt-28 md:pt-32">
            <div className="mb-8">
              <Link
                href="/blog"
                className="group inline-block p-2 -m-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <FiArrowLeft className="text-lg sm:text-xl" />
                  Back to Blog
                </span>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 sm:p-8
                border border-gray-700/50 text-center"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Blog Post Not Found
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-6">
                The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
              </p>
              <Link
                href="/blog"
                className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-medium 
                  hover:bg-blue-600 transition-colors duration-300"
              >
                View All Posts
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto pt-24 sm:pt-28 md:pt-32">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="group inline-block p-2 -m-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm sm:text-base">
                <FiArrowLeft className="text-lg sm:text-xl" />
                Back to Blog
              </span>
            </Link>
          </div>

          {/* Article */}
          <article>
            {/* Header */}
            <header className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {post?.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-400">
                <FiCalendar className="text-blue-400" />
                <time className="text-sm sm:text-base">
                  {new Date(post?.created_at || '').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </header>

            {/* Featured Image */}
            {post?.image_url && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video mb-8 sm:mb-12 rounded-lg overflow-hidden"
              >
                <Image
                  src={post.image_url}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </motion.div>
            )}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert prose-blue max-w-none
                prose-headings:font-semibold prose-h2:text-2xl sm:prose-h2:text-3xl
                prose-p:text-base sm:prose-p:text-lg prose-p:text-gray-300
                prose-a:text-blue-400 hover:prose-a:text-blue-300
                prose-strong:text-white prose-strong:font-semibold
                prose-code:text-blue-300 prose-code:bg-gray-800/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-700/50
                prose-img:rounded-lg
                prose-blockquote:border-blue-500 prose-blockquote:bg-gray-800/30 prose-blockquote:rounded-r-lg
                prose-li:text-gray-300 pb-12 sm:pb-16 md:pb-20"
              dangerouslySetInnerHTML={{ __html: post?.content || '' }}
            />
          </article>
        </div>
      </div>
    </main>
  )
} 