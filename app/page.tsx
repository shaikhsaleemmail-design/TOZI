'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      
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
        
        .glitch-text {
          text-shadow: 0.05em 0 0 rgba(255,0,100,0.75), -0.05em -0.025em 0 rgba(0,255,100,0.75);
          animation: glitch 0.3s infinite;
        }
        @keyframes glitch {
          0% { text-shadow: 0.05em 0 0 rgba(255,0,100,0.75), -0.05em -0.025em 0 rgba(0,255,100,0.75); }
          50% { text-shadow: -0.05em -0.025em 0 rgba(255,0,100,0.75), 0.025em 0.05em 0 rgba(0,255,100,0.75); }
          100% { text-shadow: 0.025em 0.05em 0 rgba(255,0,100,0.75), 0.05em 0 0 rgba(0,255,100,0.75); }
        }
      `}</style>

      {/* Fixed Coords */}
      <div className="fixed bottom-6 left-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">SYS_v2.0 · ONLINE</div>
      <div className="fixed bottom-6 right-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">SAATOZI.COM</div>

      {/* Main Content */}
      <div className="text-center px-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
          <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">System Online — Choose your path</span>
        </div>

        <h1 className="orbitron text-7xl md:text-9xl font-black text-white tracking-[0.15em] glitch-text mb-4">TOZI</h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button onClick={() => router.push('/fitness-choice')} className="cyber-btn orbitron font-bold text-[11px] tracking-[3px] uppercase text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] px-10 py-5">
            FITNESS
            <span className="block space-mono text-[8px] opacity-50 mt-1">Workout · Nutrition · Goals</span>
          </button>
          <button onClick={() => router.push('/marketing-choice')} className="cyber-btn orbitron font-bold text-[11px] tracking-[3px] uppercase text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] px-10 py-5">
            MARKETING
            <span className="block space-mono text-[8px] opacity-50 mt-1">Growth · Content · Strategy</span>
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-[#00ff88] opacity-20" />
          <button onClick={() => window.open('https://ig.me/j/AbYr1PJBkE4lwAY7/', '_blank')} className="space-mono text-[9px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">✦ JOIN THE CIRCLE</button>
          <div className="w-12 h-px bg-[#00ff88] opacity-20" />
        </div>
      </div>
    </div>
  );
}