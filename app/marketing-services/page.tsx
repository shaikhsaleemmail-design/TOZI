'use client';
import Link from 'next/link';

export default function MarketingServices() {
  const services = [
    { name: "Website Creation", desc: "Custom, fast, and mobile-friendly websites tailored to your brand." },
    { name: "Content Strategy", desc: "Data-driven content plans that attract, engage, and convert." },
    { name: "Content Creation", desc: "High-quality posts, reels, and graphics for social media." },
    { name: "Video Editing", desc: "Professional editing for reels, YouTube, and ads." },
    { name: "Social Media Marketing", desc: "Grow your audience and build a loyal community." },
    { name: "Script Writing", desc: "Engaging scripts for reels, ads, and YouTube videos." },
    { name: "Search Engine Optimisation (SEO)", desc: "Rank higher on Google and get organic traffic." },
    { name: "Paid Advertising (Meta Ads & Google Ads)", desc: "ROI-focused ad campaigns that deliver results." },
    { name: "WhatsApp Marketing Automation", desc: "Automated broadcasts, replies, and lead nurturing." },
    { name: "Brand Strategy", desc: "Position your brand for long-term success." },
    { name: "Photo Editing", desc: "Professional retouching and enhancement for visuals." }
  ];

  const sendToWhatsApp = (serviceName: string) => {
    const message = `DIGITAL MARKETING ENQUIRY - Selected Service: ${serviceName}%0A%0AHi TOZI, I'm interested in your "${serviceName}" service. Please share more details.`;
    window.open(`https://wa.me/918657282577?text=${message}`, '_blank');
  };

  const sendEmail = (serviceName: string) => {
    const subject = `Digital Marketing Enquiry - ${serviceName}`;
    const body = `Hi TOZI,%0A%0AI'm interested in your "${serviceName}" service. Please share more details.%0A%0AThank you.`;
    window.location.href = `mailto:shaikhsaleem.mail@gmail.com?subject=${subject}&body=${body}`;
  };

  const sendInstagram = () => {
    window.open('https://instagram.com/saatozi', '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f8', fontFamily: "'Poppins', sans-serif" }}>

      <style>{`
        .svc-card {
          border: 1px solid rgba(0,0,0,0.06);
          background: #ffffff;
          border-radius: 14px;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .svc-card:hover {
          border-color: rgba(45,212,191,0.35);
          transform: translateY(-4px);
        }
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .contact-btn {
          border: 1px solid rgba(0,0,0,0.08);
          background: #f7f7f8;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .contact-btn:hover {
          background: #2DD4BF;
          color: #08332e;
          border-color: #2DD4BF;
        }
        .projects-link {
          border: 1px solid #2DD4BF;
          background: #E9FBF8;
          color: #0F9E86;
          transition: all 0.2s ease;
        }
        .projects-link:hover {
          background: #2DD4BF;
          color: #08332e;
        }
      `}</style>

      <Link href="/marketing-choice" style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 50, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>
        ← Back
      </Link>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '96px 24px 64px' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <div className="status-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2DD4BF' }} />
            <span style={{ fontSize: '11px', color: '#0F9E86', letterSpacing: '2px', textTransform: 'uppercase' }}>Service catalogue</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,6vw,48px)', fontWeight: 900, color: '#111', letterSpacing: '-1px', lineHeight: 1.15 }}>What I can<br />do for you</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {services.map((service, idx) => (
            <div key={idx} className="svc-card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>{service.name}</h3>
              <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.6, marginBottom: '16px' }}>{service.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <button onClick={() => sendToWhatsApp(service.name)} className="contact-btn" style={{ padding: '8px 14px' }}>WhatsApp</button>
                <button onClick={() => sendEmail(service.name)} className="contact-btn" style={{ padding: '8px 14px' }}>Email</button>
                <button onClick={sendInstagram} className="contact-btn" style={{ padding: '8px 14px' }}>Instagram</button>
              </div>

              <p style={{ fontSize: '11px', color: '#aaa' }}>Charges depend on conversation</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/projects" className="projects-link" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: '12px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase' }}>
            View my projects →
          </Link>
        </div>

      </div>
    </div>
  );
}