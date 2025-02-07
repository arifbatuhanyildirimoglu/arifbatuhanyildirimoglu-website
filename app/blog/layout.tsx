import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Arif Batuhan Yıldırımoğlu",
  description: "Read my latest blog posts about software development, technology, and more.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-900">
      {children}
    </div>
  )
} 