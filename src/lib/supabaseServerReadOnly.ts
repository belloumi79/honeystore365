import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

function validateEnv(name: string, value: string | undefined, placeholderSnippets: string[] = []) {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}. Add it to your .env.local`);
  }
  const looksLikePlaceholder = placeholderSnippets.some((s) => value.includes(s)) || /<.*>/.test(value);
  if (looksLikePlaceholder || !/^https?:\/\//.test(value) && name === 'NEXT_PUBLIC_SUPABASE_URL') {
    throw new Error(
      `${name} is invalid. Make sure it is set to the exact value from your Supabase project settings.`
    );
  }
}

export const createClientServerReadOnly = async () => {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  validateEnv('NEXT_PUBLIC_SUPABASE_URL', supabaseUrl, ['your-supabase-url']);
  validateEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', supabaseAnonKey, ['anon', 'public-anon-key']);

  return createServerClient(
    supabaseUrl!,
    supabaseAnonKey!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {
          // Do nothing, as cookies cannot be set in a Server Component directly.
          // Session refreshing for Server Components should be handled via Server Actions.
        },
      },
    }
  );
};
