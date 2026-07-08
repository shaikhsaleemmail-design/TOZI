'use client';
import Link from 'next/link';

export default function MarketingAbout() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f8', fontFamily: "'Poppins', sans-serif" }}>

      <style>{`
        .mkt-card {
          border: 1px solid rgba(0,0,0,0.06);
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .social-link {
          border: 1px solid rgba(0,0,0,0.08);
          background: #ffffff;
          color: #0F9E86;
          transition: all 0.2s ease;
        }
        .social-link:hover { background: #2DD4BF; color: #08332e; }
      `}</style>

      <Link href="/marketing-choice" style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 50, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>
        ← Back
      </Link>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '96px 24px 64px' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <div className="status-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2DD4BF' }} />
            <span style={{ fontSize: '11px', color: '#0F9E86', letterSpacing: '2px', textTransform: 'uppercase' }}>Digital marketing, my journey</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,6vw,48px)', fontWeight: 900, color: '#111', letterSpacing: '-1px', lineHeight: 1.15 }}>Marketing journey</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="mkt-card" style={{ padding: '28px' }}>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75 }}>
              I started my journey in digital marketing with nothing but curiosity and a strong desire to learn.
              Without any formal training, I taught myself everything from scratch using YouTube, social media,
              and hands-on experimentation.
            </p>
          </div>

          <div className="mkt-card" style={{ padding: '28px' }}>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75 }}>
              I didn't just watch tutorials, I applied every concept in real time, testing strategies, making mistakes,
              and improving daily. Over time, I developed a deep understanding of website creation, automation systems,
              paid advertising, video editing, and photo editing.
            </p>
          </div>

          <div className="mkt-card" style={{ padding: '28px' }}>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75 }}>
              Today, I combine all these skills with the power of AI to create efficient, high-performing digital solutions.
              My approach is simple: <span style={{ color: '#0F9E86', fontWeight: 600 }}>learn, test, adapt, and execute</span>, and that's what sets my work apart.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '40px' }}>
          <a href="https://www.instagram.com/saatozi" target="_blank" rel="noopener noreferrer" className="social-link" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>Instagram</a>
          <a href="https://youtube.com/@saatozi" target="_blank" rel="noopener noreferrer" className="social-link" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>YouTube</a>
          <a href="https://x.com/Saatozi" target="_blank" rel="noopener noreferrer" className="social-link" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>X (Twitter)</a>
          <a href="https://wa.me/918657282577" target="_blank" rel="noopener noreferrer" className="social-link" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>WhatsApp</a>
        </div>

      </div>
    </div>
  );
}