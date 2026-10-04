'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import type { MouseEvent } from 'react';

export default function Home() {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);

  // Mouse position (-1 to 1) drives the glow and dots. Set as CSS variables so React doesn't re-render.
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty('--mx', String((e.clientX / window.innerWidth - 0.5) * 2));
    el.style.setProperty('--my', String((e.clientY / window.innerHeight - 0.5) * 2));
  };

  // Buttons lean toward the cursor.
  const magnetMove = (e: MouseEvent<HTMLButtonElement>) => {
    const b = e.currentTarget;
    const r = b.getBoundingClientRect();
    b.style.setProperty('--bx', `${(e.clientX - (r.left + r.width / 2)) * 0.18}px`);
    b.style.setProperty('--by', `${(e.clientY - (r.top + r.height / 2)) * 0.25}px`);
  };
  const magnetLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.setProperty('--bx', '0px');
    e.currentTarget.style.setProperty('--by', '0px');
  };

  return (
    <div ref={rootRef} onMouseMove={handleMove} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', background: 'linear-gradient(180deg, #f7f7f8 0%, #ececee 55%, #e2e2e6 100%)' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .poppins { font-family: 'Poppins', sans-serif; }

        .studio-glow {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%);
          pointer-events: none;
          z-index: 0;
          translate: calc(var(--mx, 0) * -30px) calc(var(--my, 0) * -20px);
          transition: translate 0.8s cubic-bezier(0.2, 0.8, 0.3, 1);
        }

        .letter {
          display: inline-block;
          animation: letterIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes letterIn {
          from { opacity: 0; transform: translateY(60px) scale(0.6) rotate(6deg); }
          to { opacity: 1; transform: none; }
        }

        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-1 { animation: fadeUp 0.7s 0.15s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.3s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.45s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.6s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }

        .expand-line {
          animation: expandLine 0.8s 0.4s ease both;
          transform: scaleX(0);
          transform-origin: center;
        }
        @keyframes expandLine { to { transform: scaleX(1); } }

        .path-btn {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), translate 0.35s cubic-bezier(0.2, 0.8, 0.3, 1), box-shadow 0.25s ease;
          translate: var(--bx, 0px) var(--by, 0px);
          position: relative;
          overflow: hidden;
          border: none;
          cursor: pointer;
        }
        .path-btn:hover {
          transform: translateY(-4px) scale(1.05);
        }
        .path-btn:active {
          transform: scale(0.95);
        }
        .path-btn-fitness {
          background: #FF6B4A;
          color: #fff;
          box-shadow: 0 8px 24px rgba(255,107,74,0.28);
        }
        .path-btn-fitness:hover {
          box-shadow: 0 12px 32px rgba(255,107,74,0.4);
        }
        .path-btn-marketing {
          background: #2DD4BF;
          color: #08332e;
          box-shadow: 0 8px 24px rgba(45,212,191,0.28);
        }
        .path-btn-marketing:hover {
          box-shadow: 0 12px 32px rgba(45,212,191,0.4);
        }

        .status-dot { animation: blink 1.4s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .drift-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          pointer-events: none;
          translate: calc(var(--mx, 0) * var(--depth, 20) * 1px) calc(var(--my, 0) * var(--depth, 20) * 1px);
          transition: translate 0.9s cubic-bezier(0.2, 0.8, 0.3, 1);
        }
        .drift-orb-1 { --depth: 40; }
        .drift-orb-2 { --depth: -30; }
        .drift-orb-3 { --depth: 55; }
        .drift-orb-4 { --depth: -45; }
        .drift-orb-1 {
          width: 10px; height: 10px;
          background: #FF6B4A;
          opacity: 0.35;
          top: 22%; left: 20%;
          animation: drift1 7s ease-in-out infinite;
        }
        .drift-orb-2 {
          width: 14px; height: 14px;
          background: #2DD4BF;
          opacity: 0.3;
          top: 28%; right: 18%;
          animation: drift2 8s ease-in-out infinite;
        }
        .drift-orb-3 {
          width: 8px; height: 8px;
          background: #FF6B4A;
          opacity: 0.25;
          bottom: 25%; right: 24%;
          animation: drift1 6s ease-in-out infinite;
        }
        .drift-orb-4 {
          width: 9px; height: 9px;
          background: #2DD4BF;
          opacity: 0.28;
          bottom: 22%; left: 22%;
          animation: drift2 6.5s ease-in-out infinite;
        }
        @keyframes drift1 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(12px,-18px); }
        }
        @keyframes drift2 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-14px,14px); }
        }

        @media (max-width: 640px) {
          .btn-row { flex-direction: column; }
        }

        @media (prefers-reduced-motion: reduce) {
          .letter, .fade-up, .fade-up-1, .fade-up-2, .fade-up-3, .fade-up-4, .expand-line,
          .drift-orb, .status-dot { animation: none; }
          .expand-line { transform: none; }
          .studio-glow, .drift-orb, .path-btn { translate: none; transition: none; }
        }
      `}</style>

      <div className="studio-glow" />
      <div className="drift-orb drift-orb-1" />
      <div className="drift-orb drift-orb-2" />
      <div className="drift-orb drift-orb-3" />
      <div className="drift-orb drift-orb-4" />

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>

        <div className="fade-up poppins" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
          <div className="status-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#111' }} />
          <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#555' }}>Fitness coach and digital marketer</span>
        </div>

        <div className="fade-up-1 poppins" style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: 'clamp(64px,15vw,110px)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1, color: '#111', margin: 0 }} aria-label="TOZI">
            {'TOZI'.split('').map((c, i) => (
              <span key={i} aria-hidden="true" className="letter" style={{ animationDelay: `${0.25 + i * 0.12}s` }}>{c}</span>
            ))}
          </h1>
        </div>

        <div className="fade-up-2 poppins" style={{ marginBottom: '14px' }}>
          <p style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#777', margin: 0 }}>Choose your path</p>
        </div>

        <div className="expand-line" style={{ width: '224px', height: '1px', marginBottom: '40px', background: 'linear-gradient(90deg, transparent, #ccc, transparent)' }} />

        <div className="fade-up-3 btn-row" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
          <button onMouseMove={magnetMove} onMouseLeave={magnetLeave} onClick={() => router.push('/fitness-choice')} className="path-btn path-btn-fitness poppins" style={{ padding: '20px 40px', borderRadius: '16px', fontWeight: 600, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Fitness
            <span style={{ display: 'block', fontSize: '10px', opacity: 0.85, fontWeight: 400, marginTop: '4px', textTransform: 'none', letterSpacing: 'normal' }}>Workout, nutrition, goals</span>
          </button>
          <button onMouseMove={magnetMove} onMouseLeave={magnetLeave} onClick={() => router.push('/marketing-choice')} className="path-btn path-btn-marketing poppins" style={{ padding: '20px 40px', borderRadius: '16px', fontWeight: 600, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Marketing
            <span style={{ display: 'block', fontSize: '10px', opacity: 0.85, fontWeight: 400, marginTop: '4px', textTransform: 'none', letterSpacing: 'normal' }}>Growth, content, strategy</span>
          </button>
        </div>

        <div className="fade-up-4 poppins" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: '#ccc' }} />
          <button onClick={() => window.open('https://ig.me/j/AbYr1PJBkE4lwAY7/', '_blank')} style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#888', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif" }}>
            Join the circle
          </button>
          <div style={{ width: '40px', height: '1px', background: '#ccc' }} />
        </div>

      </div>
    </div>
  );
}
