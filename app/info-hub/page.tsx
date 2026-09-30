export default function InfoHub() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: 'clamp(32px,6vw,48px)', fontWeight: 900, color: '#111', letterSpacing: '-1px', lineHeight: 1.15 }}>Info Hub by Tozi</h1>
        <p style={{ fontSize: '14px', color: '#555', marginTop: '12px' }}>Your daily dose of amazing facts.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="ih-card">
          <h2>What we do</h2>
          <p>
            Info Hub by Tozi makes short, original fact videos about space, plants and nature, science, animals,
            the human body, history, geography, technology, ancient mysteries, psychology, entertainment
            (Hollywood &amp; Bollywood) and world news.
          </p>
        </div>

        <div className="ih-card">
          <h2>Info Hub Publisher</h2>
          <p>
            Info Hub Publisher is our own internal tool. It uploads our videos to our own YouTube channel,
            Facebook Page and Instagram account on a daily schedule. It is not offered to the public and
            only accesses accounts owned by Info Hub by Tozi.
          </p>
        </div>

        <div className="ih-card">
          <h2>Find us</h2>
          <ul>
            <li><a href="https://www.youtube.com/@InfoHubByTozi" target="_blank" rel="noopener noreferrer">YouTube: @InfoHubByTozi</a></li>
            <li><a href="https://www.instagram.com/infohubbytozi" target="_blank" rel="noopener noreferrer">Instagram: @infohubbytozi</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
