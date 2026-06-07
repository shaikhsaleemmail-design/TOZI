'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FitnessAbout() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/images/before.jpg', title: 'ORIGIN', desc: 'No discipline, no routine, low energy. This was my starting point.' },
    { src: '/images/after1.jpg', title: 'IGNITION', desc: 'Consistency started paying off. First signs of real transformation.' },
    { src: '/images/after2.jpg', title: 'SHIFT', desc: 'Revealed the muscle underneath. Leaner, stronger, more confident.' },
    { src: '/images/after3.jpg', title: 'PEAK', desc: 'Peak condition. Vascular, defined, and disciplined.' },
    { src: '/images/after4.jpg', title: 'MASTERY', desc: 'This is what dedication looks like.' },
    { src: '/images/certificate.jpg', title: 'CERTIFIED', desc: 'Turned my passion into profession. Now I help others transform.' }
  ];

  return (
    <div className="min-h-screen bg-black">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        .orbitron { font-family: 'Orbitron', monospace; }
        .space-mono { font-family: 'Space Mono', monospace; }
        
        .cyber-card {
          border: 1px solid rgba(0,255,136,0.2);
          background: rgba(0,255,136,0.02);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .cyber-card:hover { border-color: #00ff88; transform: translateY(-4px); }
        
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      <Link href="/fitness-choice" className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">
        ← BACK
      </Link>

      <div className="max-w-5xl mx-auto px-6 py-16">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
            <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">Fitness · My Journey</span>
          </div>
          <h1 className="orbitron text-4xl md:text-6xl font-black text-white tracking-[0.15em]">MY FITNESS JOURNEY</h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto mt-5" />
        </div>

        <div className="space-y-12 mb-16">
          {images.map((img, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-6 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <img src={img.src} alt={img.title} className="w-full md:w-1/2 h-64 object-cover rounded-xl cursor-pointer cyber-card p-1" onClick={() => setSelectedImage(img.src)} />
              <div className="md:w-1/2">
                <div className="space-mono text-[10px] text-[#00ff88] opacity-60 tracking-[3px] mb-2">{String(idx + 1).padStart(2, '0')} / {img.title}</div>
                <p className="space-mono text-[12px] text-white/40 leading-relaxed">{img.desc}</p>
                <button onClick={() => setSelectedImage(img.src)} className="mt-3 space-mono text-[9px] text-[#00ff88] opacity-60 hover:opacity-100 tracking-[3px] uppercase transition">VIEW FULL →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
            <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">Watch My Journey</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="cyber-card p-4">
              <div className="space-mono text-[9px] text-[#00ff88] tracking-[3px] mb-3">YOUTUBE</div>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
                <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/avQ4SkXRsq0" title="YouTube" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="space-mono text-[9px] text-[#00ff88] tracking-[3px] mb-3">INSTAGRAM REEL</div>
              <p className="space-mono text-[11px] text-white/40 mb-4">Watch my transformation reel on Instagram</p>
              <a href="https://www.instagram.com/reel/DX94Lu-MHp_/" target="_blank" rel="noopener noreferrer" className="inline-block cyber-card px-6 py-3 text-[#00ff88] border border-[#00ff88] rounded-lg text-[9px] uppercase tracking-[3px] hover:bg-[#00ff88] hover:text-black transition">WATCH REEL →</a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-12">
          <a href="https://www.instagram.com/saatozi" target="_blank" className="cyber-card px-5 py-2 text-[#00ff88] text-[9px] uppercase tracking-[3px] hover:bg-[#00ff88] hover:text-black transition">INSTAGRAM</a>
          <a href="https://youtube.com/@saatozi" target="_blank" className="cyber-card px-5 py-2 text-[#00ff88] text-[9px] uppercase tracking-[3px] hover:bg-[#00ff88] hover:text-black transition">YOUTUBE</a>
          <a href="https://x.com/Saatozi" target="_blank" className="cyber-card px-5 py-2 text-[#00ff88] text-[9px] uppercase tracking-[3px] hover:bg-[#00ff88] hover:text-black transition">X (TWITTER)</a>
          <a href="https://wa.me/918657282577" target="_blank" className="cyber-card px-5 py-2 text-[#00ff88] text-[9px] uppercase tracking-[3px] hover:bg-[#00ff88] hover:text-black transition">WHATSAPP</a>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
          <button className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/60 hover:text-[#00ff88] tracking-[3px] uppercase" onClick={() => setSelectedImage(null)}>← CLOSE</button>
          <img src={selectedImage} alt="Full" className="max-w-[90vw] max-h-[90vh] object-contain border border-[#00ff88]/30 rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}