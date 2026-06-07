'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FitnessChoice() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

        .grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,255,136,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.07) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridPulse 4s ease-in-out infinite;
        }
        @keyframes gridPulse { 0%,100%{opacity:0.5} 50%{opacity:1} }

        .scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);
          pointer-events: none; z-index: 2;
        }

        .orb {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%);
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          animation: orbPulse 3s ease-in-out infinite;
        }
        @keyframes orbPulse {
          0%,100%{transform:translate(-50%,-50%) scale(1)}
          50%{transform:translate(-50%,-50%) scale(1.15)}
        }

        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: fixed; width: 40px; height: 40px;
          border-color: #00ff88; border-style: solid; opacity: 0.4;
        }
        .corner-tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }

        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .fade-up { animation: fadeUp 0.5s ease both; }
        .fade-up-1 { animation: fadeUp 0.5s 0.1s ease both; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.5s 0.2s ease both; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.5s 0.3s ease both; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.5s 0.45s ease both; opacity: 0; }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(14px)}
          to{opacity:1;transform:none}
        }

        .cyber-card {
          position: relative;
          border: 1px solid rgba(0,255,136,0.25);
          background: rgba(0,255,136,0.03);
          backdrop-filter: blur(10px);
          clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
          transition: all 0.25s ease;
          cursor: pointer;
          overflow: hidden;
        }
        .cyber-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,255,136,0.08) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.25s;
        }
        .cyber-card:hover {
          border-color: #00ff88;
          transform: translateY(-4px);
          box-shadow: 0 0 40px rgba(0,255,136,0.2), inset 0 0 20px rgba(0,255,136,0.05);
        }
        .cyber-card:hover::before { opacity: 1; }

        .card-number {
          font-family: 'Orbitron', monospace;
          font-size: 11px; letter-spacing: 3px;
          color: rgba(0,255,136,0.4);
        }
        .card-title {
          font-family: 'Orbitron', monospace;
          font-weight: 900; letter-spacing: 0.1em;
          color: #fff;
        }
        .card-desc {
          font-family: 'Space Mono', monospace;
          font-size: 10px; color: rgba(255,255,255,0.4);
          letter-spacing: 1px; line-height: 1.8;
        }
        .card-arrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px; color: #00ff88;
          letter-spacing: 2px; opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
        }
        .cyber-card:hover .card-arrow { opacity: 1; transform: translateX(4px); }

        .expand-line {
          animation: expandLine 0.5s 0.25s ease both;
          transform: scaleX(0); transform-origin: center;
        }
        @keyframes expandLine { to{transform:scaleX(1)} }

        .back-link {
          font-family: 'Space Mono', monospace;
          font-size: 10px; letter-spacing: 3px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .back-link:hover { color: #00ff88; }
      `}</style>

      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="orb" />
      <div className="corner-tl" />
      <div className="corner-tr" />
      <div className="corner-bl" />
      <div className="corner-br" />

      {/* BACK */}
      <Link href="/" className="back-link fixed top-8 left-8 z-50">← BACK</Link>

      {/* Bottom coords */}
      <div className="fixed bottom-6 left-6 z-20" style={{fontFamily:"'Space Mono',monospace",fontSize:'8px',color:'#00ff88',opacity:0.25,letterSpacing:'2px'}}>
        FITNESS · MODULE_01
      </div>
      <div className="fixed bottom-6 right-6 z-20" style={{fontFamily:"'Space Mono',monospace",fontSize:'8px',color:'#00ff88',opacity:0.25,letterSpacing:'2px'}}>
        SAATOZI.COM
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-3xl mx-auto">

        {/* Status */}
        <div className="fade-up flex items-center gap-2 mb-8">
          <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:'10px',color:'#00ff88',letterSpacing:'3px',textTransform:'uppercase'}}>
            Fitness Module — Select Option
          </span>
        </div>

        {/* Title */}
        <div className="fade-up-1 mb-3">
          <h1 style={{fontFamily:"'Orbitron',monospace",fontSize:'clamp(32px,7vw,56px)',fontWeight:900,color:'#fff',letterSpacing:'0.12em',lineHeight:1}}>
            FITNESS
          </h1>
        </div>

        <div className="fade-up-2 mb-8">
          <p style={{fontFamily:"'Space Mono',monospace",fontSize:'10px',color:'rgba(0,255,136,0.5)',letterSpacing:'4px',textTransform:'uppercase'}}>
            Your transformation starts here
          </p>
        </div>

        {/* Divider */}
        <div className="expand-line w-48 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mb-12" />

        {/* Cards */}
        <div className="fade-up-3 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">

          {/* ABOUT ME */}
          <div className="cyber-card p-8" onClick={() => router.push('/fitness-about')}>
            <div className="card-number mb-4">01 / ABOUT</div>
            <h2 className="card-title text-3xl mb-3">ABOUT ME</h2>
            <p className="card-desc mb-6">
              My journey · Before & after · Certifications · Philosophy
            </p>
            <div className="card-arrow">ENTER →</div>
          </div>

          {/* START NOW */}
          <div className="cyber-card p-8" onClick={() => router.push('/fitness-plans')}>
            <div className="card-number mb-4">02 / PLANS</div>
            <h2 className="card-title text-3xl mb-3">START NOW</h2>
            <p className="card-desc mb-6">
              3 · 6 · 12 month plans · Custom diet · 1-on-1 coaching
            </p>
            <div className="card-arrow">ENTER →</div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="fade-up-4 mt-12">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto opacity-20" />
        </div>

      </div>
    </div>
  );
}