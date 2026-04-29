'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '../../lib/prisma';

export async function getSites() {
  try {
    const sites = await prisma.site.findMany({
      orderBy: { createdAt: 'desc' },
    });
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
    const existing = await prisma.site.findUnique({
      where: { subdomain: data.subdomain.toLowerCase() },
    });

    if (existing) {
      return { success: false, error: 'Subdomain already taken.' };
    }

    // Create site
    const site = await prisma.site.create({
      data: {
        subdomain: data.subdomain.toLowerCase(),
        name: data.name,
        category: data.category,
        content: data.content || {},
      },
    });

    revalidatePath('/admin');
    return { success: true, site };
  } catch (error: any) {
    console.error('[Action createSite Error]:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteSite(id: string) {
  try {
    await prisma.site.delete({
      where: { id },
    });
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
    const site = await prisma.site.update({
      where: { id: data.id },
      data: {
        name: data.name,
        category: data.category,
        content: data.content,
      },
    });
    revalidatePath('/admin');
    return { success: true, site };
  } catch (error: any) {
    console.error('[Action updateSite Error]:', error);
    return { success: false, error: error.message };
  }
}
