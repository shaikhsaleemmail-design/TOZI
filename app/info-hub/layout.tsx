import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Info Hub by Tozi',
  description: 'Daily amazing facts: space, science, nature, history, Bollywood & Hollywood, and world news.',
};

export default function InfoHubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f8', fontFamily: "'Poppins', sans-serif" }}>

      <style>{`
        .ih-card {
          border: 1px solid rgba(0,0,0,0.06);
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          padding: 28px;
        }
        .ih-card h2 { font-size: 16px; font-weight: 700; color: #111; margin-bottom: 10px; }
        .ih-card p, .ih-card li { font-size: 14px; color: #555; line-height: 1.75; }
        .ih-card ul { padding-left: 20px; display: flex; flex-direction: column; gap: 6px; }
        .ih-card a { color: #0F9E86; }
        .ih-nav a { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #999; text-decoration: none; }
        .ih-nav a:hover { color: #0F9E86; }
      `}</style>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>
        <nav className="ih-nav" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', marginBottom: '48px' }}>
          <Link href="/info-hub">Info Hub</Link>
          <Link href="/info-hub/privacy">Privacy</Link>
          <Link href="/info-hub/terms">Terms</Link>
        </nav>

        {children}

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '48px' }}>
          Info Hub by Tozi · Contact: <a href="mailto:infohubbytozi@gmail.com" style={{ color: '#0F9E86' }}>infohubbytozi@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
