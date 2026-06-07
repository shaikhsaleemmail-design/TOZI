'use client';
import Link from 'next/link';

export default function MarketingAbout() {
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
        .fade-up-2 { animation: fadeUp 0.6s 0.2s ease both; }
        .fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
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

        .cyber-card {
          border: 1px solid rgba(0,255,136,0.2);
          background: rgba(0,255,136,0.02);
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.3s ease;
        }
        .cyber-card:hover {
          border-color: #00ff88;
          transform: translateY(-4px);
          box-shadow: 0 0 30px rgba(0,255,136,0.2);
        }

        .cyber-btn {
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.2s ease;
        }
        .cyber-btn:hover {
          background: #00ff88 !important;
          color: #000 !important;
          transform: translateY(-2px);
        }
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
        MARKETING · ABOUT
      </div>
      <div className="fixed bottom-6 right-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        SAATOZI.COM
      </div>

      {/* BACK Button */}
      <Link
        href="/marketing-choice"
        className="fixed top-8 left-8 z-50 space-mono text-[10px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition"
      >
        ← BACK
      </Link>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="fade-up flex items-center justify-center gap-2 mb-4">
            <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
            <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
              Digital Marketing · My Journey
            </span>
          </div>

          <h1 className="fade-up-1 orbitron text-[clamp(28px,6vw,48px)] font-black text-white tracking-[0.15em] leading-tight mb-4">
            MARKETING
            <br />
            JOURNEY
          </h1>

          <div className="expand-line w-48 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto" />
        </div>

        {/* Blog Content */}
        <div className="space-y-6">
          <div className="fade-up-2 cyber-card p-6">
            <p className="space-mono text-[11px] text-white/60 leading-relaxed">
              I started my journey in digital marketing with nothing but curiosity and a strong desire to learn. 
              Without any formal training, I taught myself everything from scratch using YouTube, social media, 
              and hands-on experimentation.
            </p>
          </div>

          <div className="fade-up-3 cyber-card p-6">
            <p className="space-mono text-[11px] text-white/60 leading-relaxed">
              I didn't just watch tutorials—I applied every concept in real time, testing strategies, making mistakes, 
              and improving daily. Over time, I developed a deep understanding of website creation, automation systems, 
              paid advertising, video editing, and photo editing.
            </p>
          </div>

          <div className="fade-up-3 cyber-card p-6">
            <p className="space-mono text-[11px] text-white/60 leading-relaxed">
              Today, I combine all these skills with the power of AI to create efficient, high-performing digital solutions. 
              My approach is simple: <span className="text-[#00ff88]">learn, test, adapt, and execute</span>—and that's what sets my work apart.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="fade-up-3 flex flex-wrap gap-3 justify-center mt-12">
          <a href="https://www.instagram.com/saatozi" target="_blank" rel="noopener noreferrer" className="cyber-btn px-5 py-2 space-mono text-[9px] text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] uppercase tracking-[3px] transition">
            INSTAGRAM
          </a>
          <a href="https://youtube.com/@saatozi" target="_blank" rel="noopener noreferrer" className="cyber-btn px-5 py-2 space-mono text-[9px] text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] uppercase tracking-[3px] transition">
            YOUTUBE
          </a>
          <a href="https://x.com/Saatozi" target="_blank" rel="noopener noreferrer" className="cyber-btn px-5 py-2 space-mono text-[9px] text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] uppercase tracking-[3px] transition">
            X (TWITTER)
          </a>
          <a href="https://wa.me/918657282577" target="_blank" rel="noopener noreferrer" className="cyber-btn px-5 py-2 space-mono text-[9px] text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] uppercase tracking-[3px] transition">
            WHATSAPP
          </a>
        </div>

      </div>
    </div>
  );
}