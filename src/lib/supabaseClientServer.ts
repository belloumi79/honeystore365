import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

type KeyType = 'anon' | 'service_role';

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

export const createClientServer = async (keyType: KeyType = 'anon') => {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  validateEnv('NEXT_PUBLIC_SUPABASE_URL', supabaseUrl, ['your-supabase-url']);

  const supabaseKey = keyType === 'service_role'
    ? process.env.SUPABASE_SERVICE_ROLE_KEY!
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (keyType === 'service_role') {
    validateEnv('SUPABASE_SERVICE_ROLE_KEY', supabaseKey as string, ['service-role-key']);
  } else {
    validateEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', supabaseKey as string, ['anon', 'public-anon-key']);
  }

  return createServerClient(
    supabaseUrl!,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        },
      },
    }
  );
};
