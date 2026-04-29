import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ site: string }> }
) {
  try {
    const { site } = await params;

    const res = await query('SELECT * FROM "Site" WHERE subdomain = $1', [site]);
    const siteData = res.rows[0];

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
