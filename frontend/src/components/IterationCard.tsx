'use client';

import { useState } from 'react';
import { Iteration } from '@/data/mockData';
import { AssetDisplay } from './AssetDisplay';
import { FocusGroupSummary } from './FocusGroupSummary';

interface IterationCardProps {
  iteration: Iteration;
  isLatest: boolean;
  hasMore: boolean;
  onIterate?: () => void;
}

function ordinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function IterationCard({ iteration, isLatest, hasMore, onIterate }: IterationCardProps) {
  const [feedback, setFeedback] = useState('');
  const timestamp = new Date(iteration.timestamp).toLocaleString('en-GB', {
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
  });

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white/[0.03] border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1CDCEB]/20 text-[#1CDCEB] flex items-center justify-center font-bold text-sm">
            {iteration.number}
          </div>
          <div>
            <div className="font-semibold text-sm">{ordinal(iteration.number)} Iteration</div>
            <div className="text-white/30 text-xs">{timestamp}</div>
          </div>
        </div>
        {isLatest && (
          <span className="text-xs px-2.5 py-1 bg-[#1CDCEB]/20 text-[#1CDCEB] rounded-full font-medium">
            Latest
          </span>
        )}
      </div>

      {/* Asset */}
      <div className="p-6">
        <AssetDisplay asset={iteration.asset} />
      </div>

      {/* Focus Group */}
      {iteration.focus_group && (
        <div className="px-6 pb-4 border-t border-white/5 pt-4">
          <FocusGroupSummary result={iteration.focus_group} />
        </div>
      )}

      {/* Feedback + iterate — only on latest iteration */}
      {isLatest && onIterate && hasMore && (
        <div className="px-6 pb-6 pt-2 space-y-3">
          <div>
            <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
              Additional feedback for next iteration <span className="normal-case text-white/20">(optional)</span>
            </label>
            <textarea
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              placeholder="e.g. Make the CTA more prominent, try a warmer colour palette, add a person in the foreground…"
              rows={3}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#1CDCEB]/50 transition-colors resize-none"
            />
          </div>
          <button
            onClick={onIterate}
            className="w-full py-3.5 border border-[#1CDCEB]/40 text-[#1CDCEB] font-semibold rounded-xl hover:bg-[#1CDCEB]/10 transition-all text-sm"
          >
            Run Focus Group & Iterate →
          </button>
        </div>
      )}
    </div>
  );
}
