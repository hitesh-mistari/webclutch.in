import React from 'react';
import { notFound } from 'next/navigation';
import { query } from '../../lib/db';
import { getTemplate } from '../../components/templates';

interface PageProps {
  params: Promise<{ site: string }>;
}

export default async function Page({ params }: PageProps) {
  const { site } = await params;

  // Fetch site data from the database
  const res = await query('SELECT * FROM "Site" WHERE subdomain = $1', [site]);
  const siteData = res.rows[0];

  // Requirement 9: Show "Site not found" if subdomain does not exist
  if (!siteData) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-3xl mx-auto mb-6">
            🚫
          </div>
          <h1 className="text-2xl font-bold mb-2 text-white">404 - Site Not Found</h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            The subdomain <span className="text-rose-400 font-mono font-bold">{site}</span> does not exist on our platform.
          </p>
          <a
            href="http://localhost:3000/admin"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-600 text-sm"
          >
            Go to Admin Panel
          </a>
        </div>
      </div>
    );
  }

  // Get the template based on category
  const Template = getTemplate(siteData.category);

  return <Template siteData={siteData} />;
}
