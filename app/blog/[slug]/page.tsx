import { supabase } from '@/lib/supabase';
import type { Blog } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getBlogPost(slug: string) {
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !blog) {
    console.error('Error fetching blog:', error);
    return null;
  }

  return blog as Blog;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogPost(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-900 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          ← Back to Blog
        </Link>
        <article className="max-w-3xl mx-auto">
          <div className="relative aspect-[21/9] w-full mb-8">
            <Image
              src={blog.image_url}
              alt={blog.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-white">{blog.title}</h1>
            <time className="text-gray-400 block">
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white
              prose-p:text-gray-300
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
              prose-strong:text-white
              prose-code:text-gray-300
              prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
              prose-blockquote:border-blue-500 prose-blockquote:bg-gray-800/50 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:not-italic
              prose-li:text-gray-300
              prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </main>
  );
} 