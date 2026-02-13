'use client';

const waveBars = [
  { opacity: 0.7, height: '30%', delay: '-1.2s', color: '#00E5A0' },
  { opacity: 0.5, height: '60%', delay: '-0.9s', color: '#00E5A0' },
  { opacity: 0.6, height: '40%', delay: '-0.6s', color: '#00D4FF' },
  { opacity: 0.8, height: '85%', delay: '-0.3s', color: '#00E5A0' },
  { opacity: 0.5, height: '50%', delay: '-1.0s', color: '#00D4FF' },
  { opacity: 0.6, height: '70%', delay: '-0.4s', color: '#00E5A0' },
  { opacity: 0.4, height: '35%', delay: '-0.7s', color: '#00D4FF' },
  { opacity: 0.7, height: '90%', delay: '-0.1s', color: '#00E5A0' },
  { opacity: 0.55, height: '45%', delay: '-0.8s', color: '#00D4FF' },
  { opacity: 0.45, height: '55%', delay: '-0.5s', color: '#00E5A0' },
];

const outputLines = [
  { width: '140px', delay: '0.8s', from: '#00E5A0', to: '#00D4FF', fromOp: 0.5, toOp: 0.3 },
  { width: '110px', delay: '1.0s', from: '#00E5A0', to: '#00D4FF', fromOp: 0.4, toOp: 0.2 },
  { width: '130px', delay: '1.2s', from: '#00E5A0', to: '#00D4FF', fromOp: 0.35, toOp: 0.15 },
  { width: '100px', delay: '1.5s', from: '#00E5A0', to: '#00D4FF', fromOp: 0.45, toOp: 0.25 },
  { width: '120px', delay: '1.7s', from: '#00E5A0', to: '#00D4FF', fromOp: 0.3, toOp: 0.15 },
  { width: '80px',  delay: '1.9s', from: '#00E5A0', to: '#00D4FF', fromOp: 0.25, toOp: 0.1 },
];

const chips = [
  { label: '✓ Email drafted', bg: 'rgba(0,229,160,0.1)', border: 'rgba(0,229,160,0.2)', color: '#00E5A0', top: '12%', right: '20%', duration: '6s', delay: '0s' },
  { label: '⚡ 2.3s processed', bg: 'rgba(0,212,255,0.1)', border: 'rgba(0,212,255,0.2)', color: '#00D4FF', bottom: '18%', left: '15%', duration: '7s', delay: '1s' },
  { label: '🎤 Listening...', bg: 'rgba(255,184,0,0.1)', border: 'rgba(255,184,0,0.2)', color: '#FFB800', top: '25%', left: '8%', duration: '5s', delay: '0.5s' },
  { label: '✕ Filler removed', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', bottom: '25%', right: '8%', duration: '8s', delay: '2s' },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[500px] md:h-[500px] flex items-center justify-center">
      {/* Pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="mic-ring absolute w-[180px] h-[180px] rounded-full border-2 border-mint/20" />
        <div className="mic-ring absolute w-[180px] h-[180px] rounded-full border-2 border-mint/15" style={{ animationDelay: '0.8s' }} />
        <div className="mic-ring absolute w-[180px] h-[180px] rounded-full border border-mint/10" style={{ animationDelay: '1.6s' }} />
      </div>

      {/* Orbiting arcs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="sound-arc w-[200px] h-[200px] animate-arc-spin opacity-25 border-2" />
        <div className="sound-arc w-[260px] h-[260px] animate-arc-spin-reverse opacity-15 border-[1.5px]" style={{ borderColor: 'transparent #00D4FF transparent transparent' }} />
        <div className="sound-arc w-[340px] h-[340px] opacity-10 border" style={{ animation: 'arcSpin 18s linear infinite' }} />
      </div>

      {/* Voice wave bars (LEFT) */}
      <div className="absolute left-[6%] top-1/2 -translate-y-1/2 flex items-center gap-1 h-[180px] md:h-[180px] z-5">
        {waveBars.map((bar, i) => (
          <div
            key={i}
            className="w-1 rounded-full wave-bar"
            style={{
              height: bar.height,
              backgroundColor: `${bar.color}`,
              opacity: bar.opacity,
              animationDelay: bar.delay,
              boxShadow: `0 0 12px ${bar.color}33`,
            }}
          />
        ))}
      </div>

      {/* Central mic */}
      <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-gradient-to-br from-mint to-cyan flex items-center justify-center relative z-10 shadow-[0_0_60px_rgba(0,229,160,0.3),0_0_120px_rgba(0,229,160,0.15)]">
        <svg width="48" height="48" viewBox="0 0 256 256" fill="#060B14">
          <path d="M128,176a48.054,48.054,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.054,48.054,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.111,80.111,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.111,80.111,0,0,1,136,207.6Z" />
        </svg>
      </div>

      {/* Text output lines (RIGHT) */}
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 flex flex-col gap-2 z-5">
        {outputLines.map((line, i) => (
          <div
            key={i}
            className="output-line"
            style={{
              '--line-w': line.width,
              animationDelay: line.delay,
              background: `linear-gradient(to right, ${line.from}${Math.round(line.fromOp * 255).toString(16).padStart(2, '0')}, ${line.to}${Math.round(line.toOp * 255).toString(16).padStart(2, '0')})`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Floating word chips */}
      {chips.map((chip, i) => (
        <div
          key={i}
          className="absolute px-3.5 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap z-[15] hidden md:block"
          style={{
            background: chip.bg,
            border: `1px solid ${chip.border}`,
            color: chip.color,
            top: chip.top,
            right: chip.right,
            bottom: chip.bottom,
            left: chip.left,
            animation: `chipFloat ${chip.duration} ease-in-out infinite`,
            animationDelay: chip.delay,
          } as React.CSSProperties}
        >
          {chip.label}
        </div>
      ))}

      {/* Bottom label */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.25em] text-text-dim">
        <span>Voice In</span>
        <span className="text-mint/40">→</span>
        <span className="text-mint/60">AI</span>
        <span className="text-mint/40">→</span>
        <span>Perfect Text</span>
      </div>
    </div>
  );
}
