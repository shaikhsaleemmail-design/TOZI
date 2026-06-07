'use client';
import Link from 'next/link';

export default function MarketingChoice() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        :root { --neon: #00ff88; }

        .orbitron { font-family: 'Orbitron', monospace; }
        .space-mono { font-family: 'Space Mono', monospace; }

        .grid-bg {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(0,255,136,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.07) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .scanlines {
          position: fixed; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);
          pointer-events: none;
          z-index: 1;
        }

        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: fixed; width: 40px; height: 40px;
          border-color: #00ff88; border-style: solid; opacity: 0.4;
          z-index: 50;
        }
        .corner-tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }

        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .fade-up { animation: fadeUp 0.6s ease both; }
        .fade-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.25s ease both; }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(16px)}
          to{opacity:1;transform:none}
        }

        .expand-line {
          animation: expandLine 0.6s 0.2s ease both;
          transform: scaleX(0);
          transform-origin: center;
        }
        @keyframes expandLine { to{transform:scaleX(1)} }

        .cyber-btn {
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .cyber-btn:hover {
          background: #00ff88 !important;
          color: #000 !important;
          transform: translateY(-3px);
          box-shadow: 0 0 40px rgba(0,255,136,0.5);
        }
        .cyber-btn::before {
          content: '';
          position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: 0.3s;
        }
        .cyber-btn:hover::before { left: 100%; }
      `}</style>

      {/* Backgrounds */}
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="corner-tl" />
      <div className="corner-tr" />
      <div className="corner-bl" />
      <div className="corner-br" />

      {/* Fixed coords */}
      <div className="fixed bottom-6 left-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        MARKETING · CHOICE
      </div>
      <div className="fixed bottom-6 right-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        SAATOZI.COM
      </div>

      {/* BACK Button */}
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 space-mono text-[10px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition"
      >
        ← BACK
      </Link>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Status bar */}
        <div className="fade-up flex items-center gap-2 mb-8">
          <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
          <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
            System Online — Choose your path
          </span>
        </div>

        {/* Title */}
        <h1 className="fade-up-1 orbitron text-[clamp(28px,6vw,48px)] font-black text-white tracking-[0.15em] leading-tight mb-6">
          MARKETING
          <br />
          DIVISION
        </h1>

        <div className="expand-line w-48 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mb-10" />

        {/* Buttons */}
        <div className="fade-up-2 flex flex-col sm:flex-row gap-4 justify-center mb-14">

          <Link
            href="/marketing-about"
            className="cyber-btn orbitron font-bold text-[11px] tracking-[3px] uppercase text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] px-10 py-5 backdrop-blur-sm"
          >
            ABOUT ME
            <span className="block space-mono text-[8px] opacity-50 tracking-[2px] font-normal mt-1">
              My journey & experience
            </span>
          </Link>

          <Link
            href="/marketing-services"
            className="cyber-btn orbitron font-bold text-[11px] tracking-[3px] uppercase text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] px-10 py-5 backdrop-blur-sm"
          >
            SERVICES
            <span className="block space-mono text-[8px] opacity-50 tracking-[2px] font-normal mt-1">
              What I can do for you
            </span>
          </Link>

        </div>

      </div>
    </div>
  );
}