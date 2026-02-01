import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let targetUrlString: string;
  const shouldRewrite = pathname.startsWith('/blog');

  const matchedBlog = pathname.match(
    /^\/[a-zA-Z]{2}-[a-zA-Z]{2}\/blog(\/.*)?$/
  );
  if (matchedBlog) {
    targetUrlString = `/blog${matchedBlog[1] ?? ''}`;
  } else {
    targetUrlString = `/en-US${pathname}`;
  }

  const targetUrl = new URL(targetUrlString, request.nextUrl);
  return shouldRewrite
    ? NextResponse.rewrite(targetUrl)
    : NextResponse.redirect(targetUrl, 301);
}

export const config = {
  matcher: [
    '/',
    '/(docs|examples|blog)/:path*',
    '/([a-zA-Z]{2}-[a-zA-Z]{2})/blog/:path*',
  ],
};
