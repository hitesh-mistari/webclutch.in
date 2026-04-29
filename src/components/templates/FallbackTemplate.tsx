import React from 'react';

interface TemplateProps {
  siteData: {
    name: string;
    category: string;
    content: any;
  };
}

export const FallbackTemplate: React.FC<TemplateProps> = ({ siteData }) => {
  const content = siteData.content || {};

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-3xl mx-auto mb-6">
          🌐
        </div>
        <h1 className="text-2xl font-bold mb-2 text-white">{siteData.name}</h1>
        <p className="text-amber-400 text-sm font-semibold mb-6 uppercase tracking-wider">
          Category: {siteData.category}
        </p>
        <div className="text-slate-400 text-sm leading-relaxed mb-6">
          <p className="font-semibold mb-2">Site Content Raw JSON:</p>
          <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left overflow-auto max-h-40 text-xs font-mono">
            {JSON.stringify(content, null, 2)}
          </pre>
        </div>
        <div className="text-xs text-slate-600">
          Fallback Template Rendered
        </div>
      </div>
    </div>
  );
};
