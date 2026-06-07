'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FitnessChoice() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        .orbitron { font-family: 'Orbitron', monospace; }
        .space-mono { font-family: 'Space Mono', monospace; }
        
        .cyber-card {
          border: 1px solid rgba(0,255,136,0.3);
          background: rgba(0,255,136,0.05);
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .cyber-card:hover {
          border-color: #00ff88;
          transform: translateY(-4px);
          box-shadow: 0 0 30px rgba(0,255,136,0.2);
        }
        
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* BACK Button */}
      <Link href="/" className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">
        ← BACK
      </Link>

      {/* Main Content */}
      <div className="text-center px-6 w-full max-w-4xl mx-auto">
        
        {/* Status */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
          <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">Fitness Module</span>
        </div>

        {/* CHOOSE YOUR PATH */}
        <p className="space-mono text-[10px] text-white/40 tracking-[4px] uppercase mb-2">CHOOSE YOUR PATH</p>

        {/* FITNESS DIVISION - Medium */}
        <h1 className="orbitron text-3xl md:text-4xl font-black text-white tracking-[0.15em] mb-8">FITNESS DIVISION</h1>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          
          {/* ABOUT ME Card */}
          <div onClick={() => router.push('/fitness-about')} className="cyber-card p-8 md:p-10">
            <div className="space-mono text-[10px] text-[#00ff88]/60 tracking-[3px] mb-3">01</div>
            <h2 className="orbitron text-4xl md:text-5xl font-bold text-white tracking-wide mb-3">ABOUT ME</h2>
            <p className="space-mono text-[11px] text-white/40 leading-relaxed">My journey · Before & after · Certifications · Philosophy</p>
            <div className="mt-4 space-mono text-[10px] text-[#00ff88] opacity-60 group-hover:opacity-100">ENTER →</div>
          </div>

          {/* START NOW Card */}
          <div onClick={() => router.push('/fitness-plans')} className="cyber-card p-8 md:p-10">
            <div className="space-mono text-[10px] text-[#00ff88]/60 tracking-[3px] mb-3">02</div>
            <h2 className="orbitron text-4xl md:text-5xl font-bold text-white tracking-wide mb-3">START NOW</h2>
            <p className="space-mono text-[11px] text-white/40 leading-relaxed">3 · 6 · 12 month plans · Custom diet · 1-on-1 coaching</p>
            <div className="mt-4 space-mono text-[10px] text-[#00ff88] opacity-60">ENTER →</div>
          </div>

        </div>
      </div>
    </div>
  );
}