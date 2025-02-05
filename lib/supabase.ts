import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our blog posts
export type Blog = {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string;
  slug: string;
  excerpt: string;
  published: boolean;
}; 