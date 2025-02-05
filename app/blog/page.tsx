import { supabase } from '@/lib/supabase';
import type { Blog } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

async function getBlogPosts() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }

  return blogs as Blog[];
}

export default async function BlogPage() {
  const blogs = await getBlogPosts();

  return (
    <main className="min-h-screen bg-gray-900 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Blog Posts</h1>
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <Link href={`/blog/${blog.slug}`} className="block">
                  <div className="relative aspect-video">
                    <Image
                      src={blog.image_url}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-white hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 hover:text-blue-300 transition-colors">
                        Read More →
                      </span>
                      <time className="text-sm text-gray-500">
                        {new Date(blog.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 