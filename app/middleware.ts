import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '08eeec2d8482789a1f00ee15335f44c83f47166e776941ebf018c598dcc257c7';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value;

  // Check if token exists
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Try to verify the JWT token
  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next(); // Proceed if the token is valid
  } catch (error) {
    // Log the error and redirect to the login page if token verification fails
    console.error("JWT verification error:", error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

// Configuration for which paths to match
export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/profile/:path*', '/dashboard/user/create'],
};
