import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Array of image extensions we want to cache
const CACHE_IMAGES = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".ico"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for an image
  if (CACHE_IMAGES.some((ext) => pathname.endsWith(ext))) {
    // Create a new response
    const response = NextResponse.next();

    // Set caching headers
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
    response.headers.set(
      "Expires",
      new Date(Date.now() + 31536000000).toUTCString()
    );

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all image files
    "/(.*).(jpg|jpeg|gif|png|svg|ico|webp)$",
    // Match all files in assets directory
    "/assets/:path*",
  ],
};
