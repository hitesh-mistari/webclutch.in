'use server';

import { revalidatePath } from 'next/cache';
import { query } from '../../lib/db';
import crypto from 'crypto';

export async function getSites() {
  try {
    const res = await query('SELECT * FROM "Site" ORDER BY "createdAt" DESC');
    const sites = res.rows;
    return { success: true, sites };
  } catch (error: any) {
    console.error('[Action getSites Error]:', error);
    return { success: false, error: error.message };
  }
}

interface CreateSiteInput {
  subdomain: string;
  name: string;
  category: string;
  content: any;
}

export async function createSite(data: CreateSiteInput) {
  try {
    // Basic validation
    if (!data.subdomain || !data.name || !data.category) {
      return { success: false, error: 'All fields are required.' };
    }

    // Check if subdomain is unique
    const existingRes = await query('SELECT * FROM "Site" WHERE subdomain = $1', [data.subdomain.toLowerCase()]);
    const existing = existingRes.rows[0];

    if (existing) {
      return { success: false, error: 'Subdomain already taken.' };
    }

    // Create site
    const id = crypto.randomUUID();
    const res = await query(
      'INSERT INTO "Site" (id, subdomain, name, category, content) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id, data.subdomain.toLowerCase(), data.name, data.category, data.content || {}]
    );
    const site = res.rows[0];

    revalidatePath('/admin');
    return { success: true, site };
  } catch (error: any) {
    console.error('[Action createSite Error]:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteSite(id: string) {
  try {
    await query('DELETE FROM "Site" WHERE id = $1', [id]);
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    console.error('[Action deleteSite Error]:', error);
    return { success: false, error: error.message };
  }
}

interface UpdateSiteInput {
  id: string;
  name: string;
  category: string;
  content: any;
}

export async function updateSite(data: UpdateSiteInput) {
  try {
    const res = await query(
      'UPDATE "Site" SET name = $1, category = $2, content = $3 WHERE id = $4 RETURNING *',
      [data.name, data.category, data.content, data.id]
    );
    const site = res.rows[0];
    revalidatePath('/admin');
    return { success: true, site };
  } catch (error: any) {
    console.error('[Action updateSite Error]:', error);
    return { success: false, error: error.message };
  }
}
