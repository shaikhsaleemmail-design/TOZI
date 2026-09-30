import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Info Hub by Tozi',
};

export default function InfoHubPrivacy() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: 'clamp(32px,6vw,44px)', fontWeight: 900, color: '#111', letterSpacing: '-1px', lineHeight: 1.15 }}>Privacy Policy</h1>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '12px' }}>Last updated: 30 September 2026</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="ih-card">
          <h2>Who we are</h2>
          <p>
            Info Hub by Tozi (&quot;we&quot;) runs the Info Hub by Tozi channels and the Info Hub Publisher app.
            This policy explains what data the app uses and how.
          </p>
        </div>

        <div className="ih-card">
          <h2>What the app does</h2>
          <p>
            Info Hub Publisher uploads our own original videos to our own YouTube channel, Facebook Page and
            Instagram account. It only connects to accounts owned by Info Hub by Tozi. It is not used by the public.
          </p>
        </div>

        <div className="ih-card">
          <h2>Data we access</h2>
          <ul>
            <li>Access tokens for our own YouTube, Facebook and Instagram accounts, so the app can upload videos.</li>
            <li>Basic details of our own channel and posts (such as video IDs, titles and view counts) to check that uploads worked.</li>
          </ul>
          <p style={{ marginTop: '10px' }}>
            We do not collect, sell or share personal data of viewers or other users. Tokens are stored securely on our server and are never shared.
          </p>
        </div>

        <div className="ih-card">
          <h2>YouTube API Services</h2>
          <p>
            Info Hub Publisher uses YouTube API Services. By using it you agree to the{' '}
            <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>.
            Google&apos;s handling of data is covered by the{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
            You can remove the app&apos;s access to a Google account at any time from the{' '}
            <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer">Google security settings page</a>.
          </p>
        </div>

        <div className="ih-card">
          <h2>Meta (Facebook &amp; Instagram)</h2>
          <p>
            Posting to Facebook and Instagram uses Meta&apos;s APIs and follows the{' '}
            <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">Meta Privacy Policy</a>.
            Access can be removed at any time from Facebook Settings → Business integrations.
          </p>
        </div>

        <div className="ih-card">
          <h2>Data deletion</h2>
          <p>
            To ask us to delete any data linked to you, email{' '}
            <a href="mailto:infohubbytozi@gmail.com">infohubbytozi@gmail.com</a> with the subject &quot;Data deletion&quot;.
            We will delete it within 30 days and confirm by email.
          </p>
        </div>

        <div className="ih-card">
          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href="mailto:infohubbytozi@gmail.com">infohubbytozi@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
