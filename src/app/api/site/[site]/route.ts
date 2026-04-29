import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ site: string }> }
) {
  try {
    const { site } = await params;

    const siteData = await prisma.site.findUnique({
      where: { subdomain: site },
    });

    if (!siteData) {
      return NextResponse.json(
        { error: 'Site not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(siteData);
  } catch (error: any) {
    console.error('[API Error]:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
