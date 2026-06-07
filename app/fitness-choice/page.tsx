'use client';
import Link from 'next/link';

export default function FitnessChoice() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        .orbitron { font-family: 'Orbitron', monospace; }
        .space-mono { font-family: 'Space Mono', monospace; }
        
        .cyber-btn {
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.2s ease;
        }
        .cyber-btn:hover {
          background: #00ff88 !important;
          color: #000 !important;
          transform: translateY(-3px);
        }
        
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      <Link href="/" className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">
        ← BACK
      </Link>

      <div className="text-center px-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
          <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">Choose your path</span>
        </div>

        <h1 className="orbitron text-4xl md:text-6xl font-black text-white tracking-[0.15em] mb-8">FITNESS DIVISION</h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/fitness-about">
            <button className="cyber-btn orbitron font-bold text-[11px] tracking-[3px] uppercase text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] px-10 py-5">
              ABOUT ME
              <span className="block space-mono text-[8px] opacity-50 mt-1">My journey & story</span>
            </button>
          </Link>
          <Link href="/fitness-plans">
            <button className="cyber-btn orbitron font-bold text-[11px] tracking-[3px] uppercase text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] px-10 py-5">
              START NOW
              <span className="block space-mono text-[8px] opacity-50 mt-1">Begin transformation</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}