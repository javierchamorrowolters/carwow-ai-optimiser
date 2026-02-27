'use client';

import Link from 'next/link';
import { DEMO_CAMPAIGNS, AssetType } from '@/data/mockData';

const ASSET_CONFIG: Record<AssetType, { label: string; icon: string; desc: string; color: string }> = {
  rsa_copy:     { label: 'RSA Copy',         icon: '📝', desc: '15 headlines + 4 descriptions for Google Ads', color: 'from-blue-500/20 to-blue-500/5' },
  image:        { label: 'Display Images',    icon: '🖼', desc: '3 aspect ratio variants — 1:1, 4:5, 9:16',     color: 'from-purple-500/20 to-purple-500/5' },
  landing_page: { label: 'Landing Page',      icon: '🌐', desc: 'Full HTML/CSS/JS conversion page',            color: 'from-[#1CDCEB]/20 to-[#1CDCEB]/5' },
  video:        { label: 'Video Storyboard',  icon: '🎬', desc: '30-second storyboard → rendered MP4',         color: 'from-red-500/20 to-red-500/5' },
};

export default function HomePage() {
  const byType = (type: AssetType) => DEMO_CAMPAIGNS.filter(c => c.asset_type === type);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Campaign Dashboard</h1>
        <p className="text-white/50">AI-powered marketing asset generation & iteration · Powered by Claude + Gemini</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(Object.keys(ASSET_CONFIG) as AssetType[]).map((type) => {
          const config = ASSET_CONFIG[type];
          const campaigns = byType(type);
          return (
            <div key={type} className={`rounded-2xl bg-gradient-to-br ${config.color} border border-white/10 p-6`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl mb-2">{config.icon}</div>
                  <h2 className="text-xl font-semibold">{config.label}</h2>
                  <p className="text-white/40 text-sm mt-1">{config.desc}</p>
                </div>
                <Link href={`/campaign/new?type=${type}`} className="px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors whitespace-nowrap">
                  + New
                </Link>
              </div>

              {campaigns.length === 0 ? (
                <p className="text-white/30 text-sm">No campaigns yet</p>
              ) : (
                <div className="space-y-2 mt-4">
                  {campaigns.map(c => (
                    <Link key={c.id} href={`/campaign/${c.id}`} className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                      <div>
                        <div className="font-medium text-sm">{c.name}</div>
                        <div className="text-white/40 text-xs mt-0.5">
                          {c.iterations.length} iteration{c.iterations.length !== 1 ? 's' : ''}
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
        <h3 className="font-semibold mb-2 text-[#1CDCEB]">How it works</h3>
        <div className="grid grid-cols-4 gap-4 text-sm text-white/60">
          {[
            'Create a campaign with a brief',
            'AI generates initial marketing asset',
            'Virtual focus group reviews & scores it',
            'AI iterates based on feedback',
          ].map((step, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1CDCEB]/20 text-[#1CDCEB] flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>{step}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
