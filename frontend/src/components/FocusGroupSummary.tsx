'use client';

import { useState } from 'react';
import { FocusGroupResult } from '@/data/mockData';

function ScoreBar({ label, score }: { label: string; score: number }) {
  const pct = (score / 10) * 100;
  const color = score >= 8 ? '#1CDCEB' : score >= 6 ? '#60a5fa' : score >= 4 ? '#f59e0b' : '#ef4444';
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-white/50 capitalize">{label.replace('_', ' ')}</span>
        <span className="font-semibold" style={{ color }}>{score.toFixed(1)}</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full score-bar"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export function FocusGroupSummary({ result }: { result: FocusGroupResult }) {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider">
        <div className="w-4 h-4 rounded bg-[#1CDCEB]/20 flex items-center justify-center">
          <span className="text-[#1CDCEB] text-[10px]">AI</span>
        </div>
        Virtual Focus Group Results
      </div>

      {/* Scores */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 p-4 bg-white/[0.03] rounded-xl border border-white/5">
        {Object.entries(result.scores).map(([key, val]) => (
          <ScoreBar key={key} label={key} score={val} />
        ))}
      </div>

      {/* Synthesis */}
      <div className="text-sm text-white/60 leading-relaxed">
        {result.synthesis}
      </div>

      {/* Bullets */}
      <ul className="space-y-1.5">
        {result.summary_bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm text-white/50">
            <span className="text-[#1CDCEB] mt-0.5 flex-shrink-0">→</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Transcript toggle */}
      <button
        onClick={() => setShowTranscript(s => !s)}
        className="text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1.5"
      >
        <svg className={`w-3 h-3 transition-transform ${showTranscript ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {showTranscript ? 'Hide' : 'Show'} full panellist transcript ({result.full_transcript.length} panellists)
      </button>

      {showTranscript && (
        <div className="space-y-3">
          {result.full_transcript.map((p, i) => (
            <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-sm">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-semibold">{p.panellist}</span>
                  <span className="text-white/30 ml-2">{p.age}</span>
                  <span className="text-white/30 mx-1">·</span>
                  <span className="text-white/40 text-xs">{p.profile}</span>
                </div>
                <span className={`font-bold text-base ${p.score >= 8 ? 'text-[#1CDCEB]' : p.score >= 6 ? 'text-blue-400' : p.score >= 4 ? 'text-amber-400' : 'text-red-400'}`}>
                  {p.score}/10
                </span>
              </div>
              <p className="text-white/55 leading-relaxed mb-2">{p.reaction}</p>
              <div className="flex gap-4 text-xs">
                <div><span className="text-green-400 mr-1">Liked:</span><span className="text-white/40">{p.liked}</span></div>
              </div>
              <div className="mt-1 text-xs"><span className="text-amber-400 mr-1">Change:</span><span className="text-white/40">{p.change}</span></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
