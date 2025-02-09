'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Blog } from '@/lib/supabase';
import RichTextEditor from './RichTextEditor';
import ImageUpload from './ImageUpload';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslations } from 'next-intl';

interface BlogPostFormProps {
  post?: Blog;
  onSuccess?: () => void;
}

export default function BlogPostForm({ post, onSuccess }: BlogPostFormProps) {
  const t  = useTranslations('admin.components.blogPostForm');
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [imageUrl, setImageUrl] = useState(post?.image_url || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [published, setPublished] = useState(post?.published || false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const blogData = {
        title,
        content,
        image_url: imageUrl,
        excerpt,
        slug,
        published,
      };

      if (post) {
        // Update existing post
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', post.id);
        if (error) throw error;
      } else {
        // Create new post
        const { error } = await supabase
          .from('blogs')
          .insert([blogData]);
        if (error) throw error;
      }

      // Reset form if it's a new post
      if (!post) {
        setTitle('');
        setContent('');
        setImageUrl('');
        setExcerpt('');
        setSlug('');
        setPublished(false);
      }

      setIsDirty(false);
      onSuccess?.();
    } catch (error: unknown) {
      if (error instanceof PostgrestError) {
        setError(error.message);
      } else {
        setError(t("unexpectedError"));
        console.error('Unknown error:', error);
      }

    } finally {
      setLoading(false);
    }
  };

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setIsDirty(true);
    // Only auto-generate slug if it hasn't been manually edited
    if (!post && !slug) {
      setSlug(newTitle.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''));
    }
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    setIsDirty(true);
  };

  const handleInputChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(e.target.value);
    setIsDirty(true);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPublished(e.target.checked);
    setIsDirty(true);
  };

  const handleImageUpload = (url: string) => {
    setImageUrl(url);
    setIsDirty(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-lg">
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-md p-4">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
          {t("title")}
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-300">
          {t("slug")}
        </label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={handleInputChange(setSlug)}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300">
          {t("excerpt")}
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={handleInputChange(setExcerpt)}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t("content")}
        </label>
        <RichTextEditor content={content} onChange={handleContentChange} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t("image")}
        </label>
        <ImageUpload
          onUploadComplete={handleImageUpload}
          currentImageUrl={imageUrl}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="published"
          checked={published}
          onChange={handleCheckboxChange}
          className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="published" className="ml-2 block text-sm text-gray-300">
          {t("published")}
        </label>
      </div>

      <button
        type="submit"
        disabled={loading || !isDirty}
        className="w-full rounded-md bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {loading ? t("loading") : isDirty ? (post ? t("saveChanges") : t("createPost")) : t("noChanges")}
      </button>
    </form>

  ); 
} 