import { NextRequest, NextResponse } from 'next/server';

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

export function proxy(request: NextRequest) {
  const origin = request.headers.get('origin') ?? '';
  const isPreflight = request.method === 'OPTIONS';

  const headers = {
    'Access-Control-Allow-Origin': '*',
    ...corsOptions,
  };

  if (isPreflight) {
    return NextResponse.json({}, { headers });
  }

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', origin);

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}
