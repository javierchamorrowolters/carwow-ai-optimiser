'use client';

interface LoadingStateProps {
  message: string;
  steps?: string[];
  currentStep?: number;
}

export function LoadingState({ message, steps, currentStep = 0 }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-12 h-12 rounded-xl bg-[#1CDCEB]/20 flex items-center justify-center thinking-glow">
        <svg className="w-6 h-6 text-[#1CDCEB] animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>

      <div className="text-center">
        <p className="text-[#1CDCEB] font-medium text-sm">{message}</p>
      </div>

      {steps && (
        <div className="flex flex-col gap-1.5 w-full max-w-sm">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 text-xs transition-all ${
                i < currentStep ? 'text-white/50' : i === currentStep ? 'text-[#1CDCEB]' : 'text-white/15'
              }`}
            >
              {i < currentStep ? (
                <svg className="w-3.5 h-3.5 text-[#1CDCEB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : i === currentStep ? (
                <svg className="w-3.5 h-3.5 animate-spin flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <div className="w-3.5 h-3.5 rounded-full border border-white/15 flex-shrink-0" />
              )}
              {step}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
