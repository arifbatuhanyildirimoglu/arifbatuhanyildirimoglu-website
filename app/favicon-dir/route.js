import { readFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  // Path to your favicon file
  const faviconPath = join(process.cwd(), 'public', 'favicon.ico');
  
  try {
    // Read the favicon file
    const favicon = readFileSync(faviconPath);
    
    // Return the favicon with appropriate headers
    return new NextResponse(favicon, {
      headers: {
        'Content-Type': 'image/x-icon',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving favicon:', error);
    return new NextResponse(null, { status: 404 });
  }
} 