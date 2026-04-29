'use client';

import React, { useState, useEffect } from 'react';
import { createSite, getSites, deleteSite, updateSite } from './actions';
import { Plus, Trash2, Globe, Sparkles, ExternalLink, RefreshCw, Edit2, Check, X } from 'lucide-react';

export default function AdminPage() {
  const [sites, setSites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form states for creating site
  const [name, setName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [category, setCategory] = useState('dentist');
  const [heroTitle, setHeroTitle] = useState('');
  const [heroSubtitle, setHeroSubtitle] = useState('');

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchSites();
  }, []);

  async function fetchSites() {
    setLoading(true);
    const res = await getSites();
    if (res.success) {
      setSites(res.sites || []);
    } else {
      setError(res.error || 'Failed to fetch sites');
    }
    setLoading(false);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    const cleanSubdomain = subdomain.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (!cleanSubdomain) {
      setError('Invalid subdomain');
      setIsSubmitting(false);
      return;
    }

    // Prepare content based on category
    const content = {
      heroTitle: heroTitle.trim() || undefined,
      heroSubtitle: heroSubtitle.trim() || undefined,
    };

    const res = await createSite({
      name: name.trim(),
      subdomain: cleanSubdomain,
      category,
      content,
    });

    if (res.success) {
      setSuccess(`Site "${name}" created successfully!`);
      setName('');
      setSubdomain('');
      setHeroTitle('');
      setHeroSubtitle('');
      fetchSites();
    } else {
      setError(res.error || 'Failed to create site');
    }
    setIsSubmitting(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this site?')) return;
    const res = await deleteSite(id);
    if (res.success) {
      fetchSites();
    } else {
      alert(res.error || 'Failed to delete site');
    }
  }

  function startEditing(site: any) {
    setEditingId(site.id);
    setEditName(site.name);
    setEditCategory(site.category);
    setEditContent(JSON.stringify(site.content, null, 2));
  }

  async function handleUpdate(id: string) {
    setError('');
    let parsedContent = {};
    try {
      parsedContent = JSON.parse(editContent);
    } catch (e) {
      setError('Invalid JSON content');
      return;
    }

    const res = await updateSite({
      id,
      name: editName,
      category: editCategory,
      content: parsedContent,
    });

    if (res.success) {
      setEditingId(null);
      fetchSites();
    } else {
      setError(res.error || 'Failed to update site');
    }
  }

  function getSiteUrl(sub: string) {
    if (typeof window !== 'undefined') {
      const { host } = window.location;
      const hostParts = host.split('.');
      
      if (hostParts.includes('localhost')) {
        // e.g., dentist.localhost:3000
        const port = host.split(':')[1] ? `:${host.split(':')[1]}` : '';
        return `http://${sub}.localhost${port}`;
      } else {
        // e.g., dentist.doc2graphs.com
        // Find domain root (e.g. doc2graphs.com)
        const rootDomain = hostParts.slice(-2).join('.');
        return `https://${sub}.${rootDomain}`;
      }
    }
    return '#';
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-800 pb-6 mb-10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
                SaaS Multi-Tenant Admin
              </h1>
              <p className="text-slate-400 text-sm mt-1">Manage single-codebase multi-tenant websites.</p>
            </div>
          </div>
          <button
            onClick={fetchSites}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-all text-sm font-medium"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </header>

        {(error || success) && (
          <div className="mb-8">
            {error && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium">
                ⚠️ {error}
              </div>
            )}
            {success && (
              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium">
                ✅ {success}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Create Site Column */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 shadow-xl h-fit">
            <div className="flex items-center gap-2 mb-6">
              <Plus className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Create Website</h2>
            </div>

            <form onSubmit={handleCreate} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Website Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Bright Smiles Dental"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Subdomain
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    required
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value)}
                    placeholder="e.g. brightsmiles"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-l-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-mono"
                  />
                  <span className="px-4 py-3 bg-slate-800 border border-slate-800 rounded-r-xl text-slate-400 text-sm border-l-0">
                    .doc2graphs.com
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Template Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                >
                  <option value="dentist">Dentist Template</option>
                  <option value="clinic">Clinic Template</option>
                  <option value="salon">Salon Template</option>
                </select>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Optional Hero Title
                </label>
                <input
                  type="text"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  placeholder="Leave blank for template default"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Optional Hero Subtitle
                </label>
                <textarea
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  placeholder="Leave blank for template default"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none h-20"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-semibold hover:from-indigo-500 hover:to-teal-400 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50 text-sm flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Creating...' : 'Launch Website'}
              </button>
            </form>
          </div>

          {/* List Sites Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-teal-400" />
              <h2 className="text-xl font-bold text-white">Live Tenant Websites ({sites.length})</h2>
            </div>

            {loading ? (
              <div className="text-center py-10 text-slate-500 text-sm">Loading websites...</div>
            ) : sites.length === 0 ? (
              <div className="text-center py-20 rounded-3xl bg-slate-900 border border-slate-800/80 text-slate-500">
                <Globe className="w-12 h-12 mx-auto mb-4 opacity-20" />
                No tenant websites created yet. Create your first one above!
              </div>
            ) : (
              <div className="grid gap-6">
                {sites.map((site: any) => (
                  <div key={site.id} className="p-6 bg-slate-900 border border-slate-800/80 rounded-3xl hover:border-slate-700/80 transition-all shadow-lg flex flex-col md:flex-row justify-between md:items-center gap-6">
                    <div className="flex-1">
                      {editingId === site.id ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm"
                          />
                          <select
                            value={editCategory}
                            onChange={(e) => setEditCategory(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm"
                          >
                            <option value="dentist">dentist</option>
                            <option value="clinic">clinic</option>
                            <option value="salon">salon</option>
                          </select>
                          <textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-xs font-mono h-32"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleUpdate(site.id)}
                              className="px-3 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-semibold flex items-center gap-1"
                            >
                              <Check className="w-3 h-3" /> Save
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1"
                            >
                              <X className="w-3 h-3" /> Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-white">{site.name}</h3>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-400 capitalize">
                              {site.category}
                            </span>
                          </div>
                          <p className="text-sm font-mono text-indigo-400 mt-2">
                            {site.subdomain}.doc2graphs.com
                          </p>
                          <div className="text-xs text-slate-500 mt-4">
                            Created at {new Date(site.createdAt).toLocaleDateString()}
                          </div>
                        </>
                      )}
                    </div>

                    {editingId !== site.id && (
                      <div className="flex items-center gap-3 self-end md:self-center">
                        <button
                          onClick={() => startEditing(site)}
                          className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-all hover:text-white"
                          title="Edit Site Content"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <a
                          href={getSiteUrl(site.subdomain)}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-indigo-400 hover:bg-slate-700 transition-all hover:text-indigo-300 flex items-center gap-2 text-sm font-semibold"
                          title="Visit Website"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit
                        </a>
                        <button
                          onClick={() => handleDelete(site.id)}
                          className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-rose-400 hover:bg-rose-900/30 hover:border-rose-900/50 hover:text-rose-300 transition-all"
                          title="Delete Website"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
