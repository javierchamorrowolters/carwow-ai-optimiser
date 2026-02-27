'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AssetType, DEMO_REDIRECT } from '@/data/mockData';

const ASSET_TYPES: { value: AssetType; label: string; icon: string; desc: string }[] = [
  { value: 'image',        label: 'Display Images',   icon: '🖼', desc: '3 aspect ratio variants via Gemini Imagen 4' },
  { value: 'rsa_copy',     label: 'RSA Copy',          icon: '📝', desc: '15 headlines + 4 descriptions for Google Ads' },
  { value: 'landing_page', label: 'Landing Page',      icon: '🌐', desc: 'Full self-contained HTML conversion page' },
  { value: 'video',        label: 'Video Storyboard',  icon: '🎬', desc: '30-second storyboard → rendered MP4' },
];

const LOADING_STEPS = [
  'Parsing campaign brief…',
  'Generating initial asset with Gemini…',
  'Assembling virtual focus group…',
  'Running AI panellist analysis…',
  'Synthesising focus group feedback…',
  'Scoring asset across key dimensions…',
  'Finalising first iteration…',
];

function NewCampaignForm() {
  const router = useRouter();
  const params = useSearchParams();
  const defaultType = (params.get('type') as AssetType) || 'rsa_copy';

  const [name, setName] = useState('');
  const [assetType, setAssetType] = useState<AssetType>(defaultType);
  const [brief, setBrief] = useState('');
  const [loading, setLoading] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !brief.trim()) return;
    setLoading(true);
    setStepIndex(0);

    // Cycle through loading steps, then redirect to demo campaign
    const totalMs = 8000;
    const stepMs = totalMs / LOADING_STEPS.length;

    for (let i = 0; i < LOADING_STEPS.length; i++) {
      await new Promise(r => setTimeout(r, stepMs));
      setStepIndex(i + 1);
    }

    router.push(`/campaign/${DEMO_REDIRECT[assetType]}`);
  }

  if (loading) {
    return (
      <div className="max-w-lg mx-auto text-center py-24">
        <div className="w-16 h-16 rounded-2xl bg-[#1CDCEB]/20 flex items-center justify-center mx-auto mb-8 thinking-glow">
          <svg className="w-8 h-8 text-[#1CDCEB] animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3">Generating your campaign…</h2>
        <p className="text-[#1CDCEB] text-sm font-medium mb-8">{LOADING_STEPS[Math.min(stepIndex, LOADING_STEPS.length - 1)]}</p>
        <div className="flex flex-col gap-2 text-left max-w-sm mx-auto">
          {LOADING_STEPS.map((step, i) => (
            <div key={i} className={`flex items-center gap-3 text-sm transition-all ${i < stepIndex ? 'text-white/70' : i === stepIndex ? 'text-[#1CDCEB]' : 'text-white/20'}`}>
              {i < stepIndex ? (
                <svg className="w-4 h-4 text-[#1CDCEB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : i === stepIndex ? (
                <svg className="w-4 h-4 animate-spin flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <div className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0" />
              )}
              {step}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <a href="/" className="text-white/40 hover:text-white text-sm transition-colors">← Back to Dashboard</a>
        <h1 className="text-3xl font-bold mt-4 mb-2">New Campaign</h1>
        <p className="text-white/50">Set up your brief and AI will generate the first asset immediately</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Campaign Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Carwow EV Spring 2026"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#1CDCEB] transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-3">Asset Type</label>
          <div className="grid grid-cols-2 gap-3">
            {ASSET_TYPES.map(t => (
              <button
                key={t.value}
                type="button"
                onClick={() => setAssetType(t.value)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  assetType === t.value
                    ? 'border-[#1CDCEB] bg-[#1CDCEB]/10 text-white'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30'
                }`}
              >
                <div className="text-xl mb-1">{t.icon}</div>
                <div className="font-medium text-sm">{t.label}</div>
                <div className="text-xs mt-1 opacity-60">{t.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Campaign Brief</label>
          <textarea
            value={brief}
            onChange={e => setBrief(e.target.value)}
            placeholder="e.g. Carwow Meta ad campaign for EV buyers in the UK. Target audience: eco-conscious professionals 28-45…"
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#1CDCEB] transition-colors resize-none"
            required
          />
          <p className="text-white/30 text-xs mt-2">Be specific — this becomes the AI prompt for generation and all iterations</p>
        </div>

        <button
          type="submit"
          disabled={!name.trim() || !brief.trim()}
          className="w-full py-4 bg-[#1CDCEB] text-black font-bold rounded-xl hover:bg-[#1CDCEB]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
        >
          Create Campaign & Generate →
        </button>
      </form>
    </div>
  );
}

export default function NewCampaignPage() {
  return (
    <Suspense fallback={<div className="text-white/50">Loading…</div>}>
      <NewCampaignForm />
    </Suspense>
  );
}
