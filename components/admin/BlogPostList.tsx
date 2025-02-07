'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Blog } from '@/lib/supabase';
import BlogPostForm from './BlogPostForm';

export default function BlogPostList() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingPost, setEditingPost] = useState<Blog | null>(null);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setPosts(posts.filter(post => post.id !== id));
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  if (editingPost) {
    return (
      <div>
        <button
          onClick={() => setEditingPost(null)}
          className="mb-4 text-blue-500 hover:text-blue-400"
        >
          ← Back to list
        </button>
        <BlogPostForm
          post={editingPost}
          onSuccess={() => {
            setEditingPost(null);
            fetchPosts();
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
        >
          <div>
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-gray-400">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                post.published
                  ? 'bg-green-500/10 text-green-500'
                  : 'bg-yellow-500/10 text-yellow-500'
              }`}
            >
              {post.published ? 'Published' : 'Draft'}
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setEditingPost(post)}
              className="text-blue-500 hover:text-blue-400"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-500 hover:text-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 