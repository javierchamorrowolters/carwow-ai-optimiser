import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Carwow AI Optimiser — Marketing Asset Iteration Platform',
  description: 'AI-powered marketing asset generation and iteration with virtual focus groups.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0A0F1A] text-white">
        <nav className="border-b border-white/10 px-6 py-4 flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1CDCEB] flex items-center justify-center text-black font-bold text-xs">
              AI
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white">Carwow</span>
              <span className="font-semibold text-lg tracking-tight text-[#1CDCEB]">AI Optimiser</span>
            </div>
          </a>
          <span className="text-white/20 text-sm hidden md:block">·</span>
          <span className="text-white/30 text-sm hidden md:block">Marketing Asset Iteration Platform</span>
          <div className="ml-auto">
            <a href="/campaign/new" className="px-4 py-2 bg-[#1CDCEB] text-black text-sm font-semibold rounded-lg hover:bg-[#1CDCEB]/90 transition-colors">
              + New Campaign
            </a>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
