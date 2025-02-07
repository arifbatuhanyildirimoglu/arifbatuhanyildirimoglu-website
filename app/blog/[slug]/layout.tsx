import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Post | Arif Batuhan Yıldırımoğlu",
  description: "Read my latest blog posts about software development, technology, and more.",
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 