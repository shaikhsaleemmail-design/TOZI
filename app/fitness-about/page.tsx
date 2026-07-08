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
    <div style={{ minHeight: '100vh', background: '#f7f7f8', fontFamily: "'Poppins', sans-serif" }}>

      <style>{`
        .fit-card {
          border: 1px solid rgba(0,0,0,0.06);
          background: #ffffff;
          border-radius: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .fit-card:hover { border-color: rgba(255,107,74,0.3); transform: translateY(-4px); }
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .social-link {
          border: 1px solid rgba(0,0,0,0.08);
          background: #ffffff;
          color: #FF6B4A;
          transition: all 0.2s ease;
        }
        .social-link:hover { background: #FF6B4A; color: #fff; }
      `}</style>

      <Link href="/fitness-choice" style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 50, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>
        ← Back
      </Link>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px 64px' }}>

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <div className="status-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B4A' }} />
            <span style={{ fontSize: '11px', color: '#FF6B4A', letterSpacing: '2px', textTransform: 'uppercase' }}>Fitness, my journey</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,6vw,52px)', fontWeight: 900, color: '#111', letterSpacing: '-1px' }}>My fitness journey</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '64px' }}>
          {images.map((img, idx) => (
            <div key={idx} style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', flexDirection: idx % 2 === 1 ? 'row-reverse' : 'row' }}>
              <img
                src={img.src}
                alt={img.title}
                className="fit-card"
                style={{ width: '100%', maxWidth: '440px', flex: '1 1 400px', height: '280px', objectFit: 'cover', cursor: 'pointer', padding: '4px' }}
                onClick={() => setSelectedImage(img.src)}
              />
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ fontSize: '11px', color: '#FF6B4A', letterSpacing: '2px', marginBottom: '8px' }}>{String(idx + 1).padStart(2, '0')} / {img.title}</div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '12px' }}>{img.desc}</p>
                <button onClick={() => setSelectedImage(img.src)} style={{ fontSize: '11px', color: '#FF6B4A', letterSpacing: '1px', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer' }}>View full →</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
            <div className="status-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B4A' }} />
            <span style={{ fontSize: '11px', color: '#FF6B4A', letterSpacing: '2px', textTransform: 'uppercase' }}>Watch my journey</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="fit-card" style={{ padding: '16px' }}>
              <div style={{ fontSize: '10px', color: '#FF6B4A', letterSpacing: '2px', marginBottom: '12px' }}>YouTube</div>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px' }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/avQ4SkXRsq0" title="YouTube" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="fit-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '10px', color: '#FF6B4A', letterSpacing: '2px', marginBottom: '12px' }}>Instagram reel</div>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>Watch my transformation reel on Instagram</p>
              <a href="https://www.instagram.com/reel/DX94Lu-MHp_/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'inline-block', padding: '10px 24px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>Watch reel →</a>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '48px' }}>
          <a href="https://www.instagram.com/saatozi" target="_blank" className="social-link" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>Instagram</a>
          <a href="https://youtube.com/@saatozi" target="_blank" className="social-link" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>YouTube</a>
          <a href="https://x.com/Saatozi" target="_blank" className="social-link" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>X (Twitter)</a>
          <a href="https://wa.me/918657282577" target="_blank" className="social-link" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>WhatsApp</a>
        </div>
      </div>

      {selectedImage && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedImage(null)}>
          <button style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 50, fontSize: '12px', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setSelectedImage(null)}>← Close</button>
          <img src={selectedImage} alt="Full" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}