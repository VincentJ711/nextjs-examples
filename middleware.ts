// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`[${request.method}] ${request.url}`);
  return NextResponse.next();
}
