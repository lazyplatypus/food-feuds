import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

let blocked: string[] = ['AT', 'JP', 'KR', 'GB']; 

// Limit middleware pathname config
export const config = {
  matcher: '/answers',
}

export function middleware(req: NextRequest) {
  // Extract country
  const country = req.geo.country || 'US'

  // Specify the correct pathname
  if (blocked.includes(country)) {
    req.nextUrl.pathname = '/blocked'
  } else {
    req.nextUrl.pathname = `/${country}`
  }

  // Rewrite to URL
  return NextResponse.rewrite(req.nextUrl)
}
