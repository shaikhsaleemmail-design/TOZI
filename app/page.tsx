'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        :root { --neon: #00ff88; }

        .orbitron { font-family: 'Orbitron', monospace; }
        .space-mono { font-family: 'Space Mono', monospace; }

        /* Grid */
        .grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,255,136,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.07) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridPulse 4s ease-in-out infinite;
        }
        @keyframes gridPulse { 0%,100%{opacity:0.5} 50%{opacity:1} }

        /* Scanlines */
        .scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);
          pointer-events: none; z-index: 2;
        }

        /* TOZI Glitch */
        .logo-wrap { position: relative; display: inline-block; }
        .logo-wrap::before, .logo-wrap::after {
          content: 'TOZI';
          position: absolute; top: 0; left: 0; right: 0;
          font-family: 'Orbitron', monospace;
          font-size: inherit; font-weight: 900; letter-spacing: 0.15em;
        }
        .logo-wrap::before {
          color: #00ff88;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          animation: glitch1 3s infinite;
        }
        .logo-wrap::after {
          color: #ff0066;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          animation: glitch2 3s infinite;
        }
        @keyframes glitch1 {
          0%,90%,100%{transform:none;opacity:0}
          91%{transform:translateX(-4px);opacity:0.8}
          93%{transform:translateX(4px);opacity:0.8}
          95%{transform:none;opacity:0}
        }
        @keyframes glitch2 {
          0%,85%,100%{transform:none;opacity:0}
          86%{transform:translateX(4px);opacity:0.8}
          88%{transform:translateX(-4px);opacity:0.8}
          90%{transform:none;opacity:0}
        }

        /* Orb pulse */
        .orb {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,136,0.10) 0%, transparent 70%);
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          animation: orbPulse 3s ease-in-out infinite;
        }
        @keyframes orbPulse {
          0%,100%{transform:translate(-50%,-50%) scale(1);opacity:0.8}
          50%{transform:translate(-50%,-50%) scale(1.2);opacity:1}
        }

        /* Status dot blink */
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Fade in up */
        .fade-up { animation: fadeUp 0.6s ease both; }
        .fade-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.6s 0.4s ease both; }
        .fade-up-4 { animation: fadeUp 0.6s 0.55s ease both; }
        .fade-up-5 { animation: fadeUp 0.6s 0.7s ease both; }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(16px)}
          to{opacity:1;transform:none}
        }

        /* Expand line */
        .expand-line {
          animation: expandLine 0.6s 0.4s ease both;
          transform: scaleX(0);
          transform-origin: center;
        }
        @keyframes expandLine { to{transform:scaleX(1)} }

        /* Clip-path button shape */
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

        /* Corner brackets */
        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: fixed; width: 40px; height: 40px;
          border-color: #00ff88; border-style: solid; opacity: 0.5;
        }
        .corner-tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }
      `}</style>

      {/* Background layers */}
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="orb" />

      {/* Corner brackets */}
      <div className="corner-tl" />
      <div className="corner-tr" />
      <div className="corner-bl" />
      <div className="corner-br" />

      {/* Fixed bottom coords */}
      <div className="fixed bottom-6 left-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        SYS_v2.0 · ONLINE
      </div>
      <div className="fixed bottom-6 right-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        SAATOZI.COM
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Status bar */}
        <div className="fade-up flex items-center gap-2 mb-8">
          <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
          <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
            System Online — Choose your path
          </span>
        </div>

        {/* TOZI Logo */}
        <div className="fade-up-1 mb-4">
          <h1
            className="logo-wrap orbitron text-[clamp(64px,15vw,110px)] font-black text-white tracking-[0.15em] leading-none"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            TOZI
          </h1>
        </div>

        {/* Tagline */}
        <div className="fade-up-2 mb-8">
          <p className="space-mono text-[10px] text-[#00ff88] opacity-60 tracking-[4px] uppercase">
            Fitness · Digital Marketing · Results
          </p>
        </div>

        {/* Divider */}
        <div className="expand-line w-64 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mb-10" />

        {/* Buttons */}
        <div className="fade-up-3 flex flex-col sm:flex-row gap-4 justify-center mb-14">

          <button
            onClick={() => router.push('/fitness-choice')}
            className="cyber-btn orbitron font-bold text-[11px] tracking-[3px] uppercase text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] px-10 py-5 backdrop-blur-sm"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            FITNESS
            <span className="block space-mono text-[8px] opacity-50 tracking-[2px] font-normal mt-1">
              Workout · Nutrition · Goals
            </span>
          </button>

          <button
            onClick={() => router.push('/marketing-choice')}
            className="cyber-btn orbitron font-bold text-[11px] tracking-[3px] uppercase text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] px-10 py-5 backdrop-blur-sm"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            MARKETING
            <span className="block space-mono text-[8px] opacity-50 tracking-[2px] font-normal mt-1">
              Growth · Content · Strategy
            </span>
          </button>

        </div>

        {/* Join Community */}
        <div className="fade-up-4 flex items-center gap-4">
          <div className="w-12 h-px bg-[#00ff88] opacity-20" />
          <button
            onClick={() => window.open('https://ig.me/j/AbYr1PJBkE4lwAY7/', '_blank')}
            className="space-mono text-[9px] text-white opacity-30 hover:opacity-100 hover:text-[#00ff88] tracking-[3px] uppercase transition-all duration-200"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            ✦ JOIN THE CIRCLE
          </button>
          <div className="w-12 h-px bg-[#00ff88] opacity-20" />
        </div>

      </div>
    </div>
  );
}