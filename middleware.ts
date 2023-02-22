import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/', '/answer'],
};

export function middleware(req: NextRequest) {
  console.log(req.geo.city);
  if (req.nextUrl.pathname === '/answer') {
    if (req.geo.country === 'FR') {
      return NextResponse.rewrite(new URL('/wrong', req.url));
    } else if (req.geo.city === 'Portland') {
      return NextResponse.rewrite(new URL('/answer-chi', req.url));
    } else if (req.geo.city === 'San Francisco') {
      return NextResponse.rewrite(new URL('/answer-ny', req.url));
    } else {
      return NextResponse.rewrite(new URL('/answer', req.url));
    }
  }

  if (req.nextUrl.pathname === '/') {
    if (req.geo.city === 'Portland' || req.geo.city === 'San Francisco') {
      return NextResponse.rewrite(new URL('/pizza', req.url));
    } else {
      return NextResponse.rewrite(new URL('/', req.url));
    }
  }

  return NextResponse.rewrite(req.nextUrl);
}
