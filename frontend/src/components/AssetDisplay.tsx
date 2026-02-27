'use client';

import { AssetData, RSACopy } from '@/data/mockData';

function CharBadge({ count, max }: { count: number; max: number }) {
  const ok = count <= max;
  return (
    <span className={`text-xs px-1.5 py-0.5 rounded font-mono ${ok ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
      {count}/{max}
    </span>
  );
}

function ImageAsset({ asset }: { asset: AssetData }) {
  const urls = asset.urls || [];
  const labels = ['1:1 Square', '4:5 Portrait', '9:16 Story'];

  if (urls.length === 0) {
    return <div className="text-white/40 text-sm">No images generated</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {urls.map((url, i) => (
        <div key={i} className="space-y-2">
          <div className="text-xs text-white/40 text-center">{labels[i] || `Variant ${i + 1}`}</div>
          <div className="relative bg-white/5 rounded-xl overflow-hidden aspect-square border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={url}
              alt={`Variant ${i + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.style.display = 'none';
                t.parentElement!.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-white/20 text-xs gap-1"><span>🖼</span><span>${labels[i]}</span><span class="text-[10px]">Image placeholder</span></div>`;
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function RSACopyAsset({ asset }: { asset: AssetData }) {
  const content = asset.content as RSACopy;
  if (!content) return <div className="text-white/40 text-sm">No copy generated</div>;

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-white/40 uppercase tracking-wider">Headlines</span>
          <span className="text-xs text-white/30">({content.headlines?.length || 0}/15) · max 30 chars</span>
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          {(content.headlines || []).map((h, i) => (
            <div key={i} className="flex items-center justify-between p-2.5 bg-white/5 rounded-lg">
              <span className="text-sm font-medium">{h.text}</span>
              <CharBadge count={h.chars} max={30} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-white/40 uppercase tracking-wider">Descriptions</span>
          <span className="text-xs text-white/30">({content.descriptions?.length || 0}/4) · max 90 chars</span>
        </div>
        <div className="space-y-1.5">
          {(content.descriptions || []).map((d, i) => (
            <div key={i} className="flex items-start justify-between p-3 bg-white/5 rounded-lg gap-4">
              <span className="text-sm text-white/80">{d.text}</span>
              <CharBadge count={d.chars} max={90} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoAsset({ asset }: { asset: AssetData }) {
  const url = asset.urls?.[0];

  if (!url) {
    return (
      <div className="flex flex-col items-center justify-center h-48 bg-white/5 rounded-xl border border-white/10 text-white/30 gap-2 text-sm">
        <span className="text-3xl">🎬</span>
        <span>Video placeholder</span>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="relative rounded-xl overflow-hidden bg-black border border-white/10" style={{ aspectRatio: '16/9' }}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={url}
          controls
          className="w-full h-full object-contain"
          onError={(e) => {
            const v = e.target as HTMLVideoElement;
            v.style.display = 'none';
            const parent = v.parentElement;
            if (parent) {
              parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-white/20 gap-2 text-sm"><span class="text-4xl">🎬</span><span>Drop your .mp4 into public/videos/</span><span class="text-xs font-mono text-white/15">${url}</span></div>`;
            }
          }}
        />
      </div>
      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl text-sm text-white/50">
        <span className="text-[#1CDCEB]">🎬</span>
        <span className="font-mono text-xs">{url}</span>
      </div>
    </div>
  );
}

function LandingPageAsset({ asset }: { asset: AssetData }) {
  const content = asset.content as { html?: string } | undefined;
  const html = content?.html;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
        <div className="text-[#1CDCEB]">🌐</div>
        <div className="flex-1 text-sm text-white/60">{asset.html_path || 'Landing page'}</div>
        {html && (
          <button
            onClick={() => {
              const w = window.open('', '_blank');
              if (w) { w.document.write(html); w.document.close(); }
            }}
            className="px-3 py-1.5 text-xs bg-[#1CDCEB] text-black font-semibold rounded-lg hover:bg-[#1CDCEB]/90 transition-colors"
          >
            Open ↗
          </button>
        )}
      </div>
      {html && (
        <div className="relative w-full rounded-xl overflow-hidden border border-white/10" style={{ height: '420px' }}>
          <iframe
            srcDoc={html}
            className="w-full h-full"
            title="Landing page preview"
            sandbox="allow-scripts"
          />
        </div>
      )}
    </div>
  );
}

export function AssetDisplay({ asset }: { asset: AssetData }) {
  switch (asset.type) {
    case 'image':        return <ImageAsset asset={asset} />;
    case 'rsa_copy':     return <RSACopyAsset asset={asset} />;
    case 'landing_page': return <LandingPageAsset asset={asset} />;
    case 'video':        return <VideoAsset asset={asset} />;
    default:             return <div className="text-white/40 text-sm">Unknown asset type</div>;
  }
}
