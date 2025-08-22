'use client';

import { createBrowserClient } from '@supabase/ssr';

function validateEnv(name: string, value: string | undefined, placeholderSnippets: string[] = []) {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}. Add it to your .env.local`);
  }
  const looksLikePlaceholder = placeholderSnippets.some((s) => value.includes(s)) || /<.*>/.test(value);
  if (looksLikePlaceholder || (!/^https?:\/\//.test(value) && name === 'NEXT_PUBLIC_SUPABASE_URL')) {
    throw new Error(`${name} is invalid. Copy the exact value from your Supabase project settings.`);
  }
}

export const createClientComponent = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  validateEnv('NEXT_PUBLIC_SUPABASE_URL', supabaseUrl, ['your-supabase-url']);
  validateEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', supabaseAnonKey, ['anon', 'public-anon-key']);

  return createBrowserClient(supabaseUrl!, supabaseAnonKey!);
};
