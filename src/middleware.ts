import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Récupérer le token depuis les cookies
  const token = request.cookies.get('sb-access-token')?.value ||
                request.cookies.get('supabase-auth-token')?.value ||
                request.cookies.get('sb-llsifflkfjogjagmbmpi-auth-token.0')?.value

  const isLoggedIn = !!token
  const isOnAuthPage = request.nextUrl.pathname === '/auth/login' || 
                      request.nextUrl.pathname === '/auth/register'
  const isOnProtectedPage = request.nextUrl.pathname.startsWith('/dashboard') || 
                           request.nextUrl.pathname.startsWith('/admin')

  // Si l'utilisateur est connecté et sur une page d'auth, rediriger vers admin
  if (isLoggedIn && isOnAuthPage) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // Si l'utilisateur n'est pas connecté et sur une page protégée, rediriger vers login
  if (!isLoggedIn && isOnProtectedPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}