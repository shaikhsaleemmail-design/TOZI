import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Info Hub by Tozi',
};

export default function InfoHubTerms() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: 'clamp(32px,6vw,44px)', fontWeight: 900, color: '#111', letterSpacing: '-1px', lineHeight: 1.15 }}>Terms of Service</h1>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '12px' }}>Last updated: 30 September 2026</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="ih-card">
          <h2>About</h2>
          <p>
            These terms cover the Info Hub by Tozi channels, this website and the Info Hub Publisher app.
            By watching our content or using this site, you agree to these terms.
          </p>
        </div>

        <div className="ih-card">
          <h2>Our content</h2>
          <p>
            Our videos are for general information and entertainment only. We check our facts, but we cannot
            promise that everything is always complete or up to date. Nothing we publish is medical, legal or
            financial advice.
          </p>
        </div>

        <div className="ih-card">
          <h2>Ownership</h2>
          <p>
            Our scripts, voiceovers and edits are our own work. Please do not re-upload our videos without permission.
          </p>
        </div>

        <div className="ih-card">
          <h2>Info Hub Publisher</h2>
          <p>
            Info Hub Publisher is an internal tool used only to publish to our own accounts. It uses YouTube API
            Services, so the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>{' '}
            also apply. Posting to Facebook and Instagram follows{' '}
            <a href="https://www.facebook.com/terms" target="_blank" rel="noopener noreferrer">Meta&apos;s Terms</a>.
            See our <a href="/info-hub/privacy">Privacy Policy</a> for how data is handled.
          </p>
        </div>

        <div className="ih-card">
          <h2>Changes</h2>
          <p>
            We may update these terms. The date at the top shows the latest version.
          </p>
        </div>

        <div className="ih-card">
          <h2>Contact</h2>
          <p>
            <a href="mailto:infohubbytozi@gmail.com">infohubbytozi@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
