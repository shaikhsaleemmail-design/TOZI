'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FitnessAbout() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openImage = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeImage = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const images = [
    { src: '/images/before.jpg', title: 'ORIGIN', desc: 'No discipline, no routine, low energy. This was my starting point.' },
    { src: '/images/after1.jpg', title: 'IGNITION', desc: 'Consistency started paying off. First signs of real transformation.' },
    { src: '/images/after2.jpg', title: 'SHIFT', desc: 'Revealed the muscle underneath. Leaner, stronger, more confident.' },
    { src: '/images/after3.jpg', title: 'PEAK', desc: 'Peak condition. Vascular, defined, and disciplined.' },
    { src: '/images/after4.jpg', title: 'MASTERY', desc: 'This is what dedication looks like. Years of hard work paying off.' },
    { src: '/images/certificate.jpg', title: 'CERTIFIED', desc: 'Turned my passion into profession. Now I help others transform.' }
  ];

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Global Styles */}
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

        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .fade-up { animation: fadeUp 0.6s ease both; }
        .fade-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.2s ease both; }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(16px)}
          to{opacity:1;transform:none}
        }

        .expand-line {
          animation: expandLine 0.6s 0.3s ease both;
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

        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: fixed; width: 40px; height: 40px;
          border-color: #00ff88; border-style: solid; opacity: 0.4;
          z-index: 50;
        }
        .corner-tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }

        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(12px);
          z-index: 500;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border: 1px solid #00ff88;
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
        FITNESS · ABOUT_02
      </div>
      <div className="fixed bottom-6 right-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        SAATOZI.COM
      </div>

      {/* BACK Button */}
      <Link
        href="/fitness-choice"
        className="fixed top-8 left-8 z-50 space-mono text-[10px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition"
      >
        ← BACK
      </Link>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="fade-up flex items-center justify-center gap-2 mb-4">
            <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
            <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
              Fitness · My Journey
            </span>
          </div>

          <h1 className="fade-up-1 orbitron text-[clamp(28px,6vw,48px)] font-black text-white tracking-[0.15em] leading-tight">
            MY FITNESS
            <br />
            JOURNEY
          </h1>

          <div className="expand-line w-48 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto mt-6" />
        </div>

        {/* Image Rows */}
        <div className="space-y-8 mb-20">
          {images.map((img, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-6 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg cursor-pointer cyber-card p-1"
                onClick={() => openImage(img.src)}
              />
              <div className="md:w-1/2">
                <div className="space-mono text-[10px] text-[#00ff88] opacity-60 tracking-[3px] mb-2">
                  {String(index + 1).padStart(2, '0')} / ORIGIN
                </div>
                <h2 className="orbitron text-xl font-bold text-white tracking-wide mb-3">
                  {img.title}
                </h2>
                <p className="space-mono text-[11px] text-white/40 leading-relaxed">
                  {img.desc}
                </p>
                <button
                  onClick={() => openImage(img.src)}
                  className="mt-4 space-mono text-[9px] text-[#00ff88] opacity-60 hover:opacity-100 tracking-[3px] uppercase transition"
                >
                  VIEW FULL →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
            <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
              Watch My Journey
            </span>
          </div>

          <h2 className="orbitron text-xl font-bold text-white tracking-[0.15em] mb-8">
            VIDEO LOGS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YouTube */}
            <div className="cyber-card p-4">
              <div className="space-mono text-[9px] text-[#00ff88] tracking-[3px] mb-3">YOUTUBE · LOG_01</div>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/avQ4SkXRsq0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Instagram */}
            <div className="cyber-card p-6 text-center flex flex-col items-center justify-center">
              <div className="space-mono text-[9px] text-[#00ff88] tracking-[3px] mb-3">INSTAGRAM · REEL_01</div>
              <p className="space-mono text-[11px] text-white/40 mb-4">Watch my transformation reel on Instagram</p>
              <a
                href="https://www.instagram.com/reel/DX94Lu-MHp_/"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn inline-block px-6 py-3 space-mono text-[9px] text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.05)] uppercase tracking-[3px] transition"
              >
                WATCH REEL →
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <div className="flex flex-wrap gap-3 justify-center">
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

      {/* Modal */}
      {modalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeImage}>
          <button
            onClick={closeImage}
            className="fixed top-8 left-8 z-50 space-mono text-[10px] text-white/60 hover:text-[#00ff88] tracking-[3px] uppercase transition"
          >
            ← CLOSE
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}