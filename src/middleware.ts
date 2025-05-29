import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  return NextResponse.next({
    request,
  });
}

export const config = {
  matcher: [
    /*
     * Matcher plus spécifique pour éviter les conflits
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
    '/admin/:path*',
  ],
}