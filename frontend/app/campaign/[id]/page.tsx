'use client';

import { use, useState, useRef, useEffect } from 'react';
import { getDemoCampaign, Iteration } from '@/data/mockData';
import { IterationCard } from '@/components/IterationCard';
import { LoadingState } from '@/components/LoadingState';

const ASSET_TYPE_LABELS: Record<string, string> = {
  image:        '🖼 Display Images',
  rsa_copy:     '📝 RSA Copy',
  landing_page: '🌐 Landing Page',
  video:        '🎬 Video Storyboard',
};

const ITERATE_STEPS = [
  'Analysing current asset…',
  'Assembling virtual focus group…',
  'Panellists reviewing the asset…',
  'Scoring across 5 dimensions…',
  'Synthesising group feedback…',
  'Generating improved asset…',
  'Running final quality check…',
];

export default function CampaignPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const campaign = getDemoCampaign(id);
  const [revealed, setRevealed] = useState(1); // start with first iteration shown
  const [iterating, setIterating] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [briefExpanded, setBriefExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new iteration revealed
  useEffect(() => {
    if (revealed > 1) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  }, [revealed]);

  if (!campaign) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400">
        Campaign not found.
      </div>
    );
  }

  const visibleIterations: Iteration[] = campaign.iterations.slice(0, revealed);
  const hasMore = revealed < campaign.iterations.length;

  async function handleIterate() {
    if (iterating || !hasMore) return;
    setIterating(true);
    setStepIndex(0);

    const totalMs = 5250;
    const stepMs = totalMs / ITERATE_STEPS.length;

    for (let i = 0; i < ITERATE_STEPS.length; i++) {
      await new Promise(r => setTimeout(r, stepMs));
      setStepIndex(i + 1);
    }

    setRevealed(r => r + 1);
    setIterating(false);
  }

  const createdAt = new Date(campaign.created_at).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-[#0A0F1A]/95 backdrop-blur-sm pb-4 mb-6">
        <div className="flex items-start justify-between pt-2">
          <div>
            <a href="/" className="text-white/40 hover:text-white text-xs transition-colors">← Dashboard</a>
            <h1 className="text-2xl font-bold mt-2">{campaign.name}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-white/50">{ASSET_TYPE_LABELS[campaign.asset_type]}</span>
              <span className="text-white/20">·</span>
              <span className="text-sm text-white/50">Created {createdAt}</span>
              <span className="text-white/20">·</span>
              <span className="text-sm text-[#1CDCEB]">
                {revealed} iteration{revealed !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setBriefExpanded(e => !e)}
          className="mt-3 w-full text-left p-3 bg-white/5 hover:bg-white/[0.08] rounded-xl text-sm text-white/50 transition-colors group"
        >
          <div className="flex items-center justify-between gap-3">
            <div className={briefExpanded ? '' : 'line-clamp-2'}>
              <span className="text-white/30 text-xs uppercase tracking-wider mr-2">Brief</span>
              {campaign.brief}
            </div>
            <svg
              className={`w-3.5 h-3.5 flex-shrink-0 text-white/30 group-hover:text-white/50 transition-all ${briefExpanded ? 'rotate-90' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Iterations */}
      <div className="space-y-6">
        {visibleIterations.map((iteration, i) => {
          const isLatest = i === visibleIterations.length - 1;
          return (
            <IterationCard
              key={iteration.number}
              iteration={iteration}
              isLatest={isLatest && !iterating}
              hasMore={hasMore}
              onIterate={isLatest && !iterating && hasMore ? handleIterate : undefined}
            />
          );
        })}

        {/* Fake loading indicator */}
        {iterating && (
          <div className="border border-[#1CDCEB]/20 rounded-2xl p-8 bg-[#1CDCEB]/5">
            <LoadingState
              message={ITERATE_STEPS[Math.min(stepIndex, ITERATE_STEPS.length - 1)]}
              steps={ITERATE_STEPS}
              currentStep={stepIndex}
            />
          </div>
        )}

        {/* All done */}
        {!hasMore && !iterating && (
          <div className="text-center py-6 text-white/30 text-sm border border-white/5 rounded-2xl">
            ✓ All {campaign.iterations.length} iterations complete — this campaign is ready to deploy
          </div>
        )}
      </div>

      <div ref={bottomRef} className="h-12" />
    </div>
  );
}
