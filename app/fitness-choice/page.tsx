'use client';
import Link from 'next/link';

export default function FitnessChoice() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'linear-gradient(180deg, #f7f7f8 0%, #ececee 55%, #e2e2e6 100%)', fontFamily: "'Poppins', sans-serif" }}>

      <style>{`
        .fitness-card {
          transition: all 0.25s cubic-bezier(0.2, 0.8, 0.3, 1);
          cursor: pointer;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .fitness-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(255,107,74,0.18);
          border-color: rgba(255,107,74,0.3);
        }
      `}</style>

      <Link href="/" style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 50, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>
        ← Back
      </Link>

      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B4A' }} />
          <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999' }}>Fitness module</span>
        </div>

        <h1 style={{ fontSize: 'clamp(40px,7vw,64px)', fontWeight: 900, color: '#111', letterSpacing: '-1px', marginBottom: '48px' }}>Fitness division</h1>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '700px', margin: '0 auto' }}>
          <Link href="/fitness-about" style={{ textDecoration: 'none' }}>
            <div className="fitness-card" style={{ borderRadius: '20px', padding: '40px', width: '260px' }}>
              <div style={{ fontSize: '11px', color: '#FF6B4A', letterSpacing: '2px', marginBottom: '12px' }}>01</div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>About me</h2>
              <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.6 }}>My journey, before and after, certifications</p>
            </div>
          </Link>
          <Link href="/fitness-plans" style={{ textDecoration: 'none' }}>
            <div className="fitness-card" style={{ borderRadius: '20px', padding: '40px', width: '260px' }}>
              <div style={{ fontSize: '11px', color: '#FF6B4A', letterSpacing: '2px', marginBottom: '12px' }}>02</div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Start now</h2>
              <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.6 }}>3, 6, 12 month plans, custom diet, coaching</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}