import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '08eeec2d8482789a1f00ee15335f44c83f47166e776941ebf018c598dcc257c7';

// Validate if the filename is valid
function isValidFilename(filename: string): boolean {
    const validCharacters = /^[a-zA-Z0-9._-]+$/; // Allow only alphanumeric, dot, underscore, and hyphen
    const dotCount = (filename.match(/\./g) || []).length; // Count the number of dots
    return validCharacters.test(filename) && dotCount <= 1; // Allow only one dot
}

// Check if the requested path is valid
function isValidPath(path: string): boolean {
    // Split the path and validate each part
    const pathParts = path.split('/').filter(Boolean); // Remove empty parts
    return pathParts.every(part => isValidFilename(part)); // Validate each part
}

export function middleware(req: NextRequest) {
    const token = req.cookies.get('accessToken')?.value;

    // Check if token exists
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // Try to verify the JWT token
    try {
        jwt.verify(token, JWT_SECRET);
    } catch (error) {
        // Log the error and redirect to the login page if token verification fails
        console.error("JWT verification error:", error);
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // Validate the requested path
    const requestedPath = req.nextUrl.pathname; // Get the requested path
    if (!isValidPath(requestedPath)) {
        // Return a 400 Bad Request response for invalid paths
        return new NextResponse('Invalid path', { status: 400 });
    }

    return NextResponse.next(); // Proceed if the token is valid and the path is valid
}

// Configuration for which paths to match
export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*', '/profile/:path*', '/dashboard/user/create'],
};
