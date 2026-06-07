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
    <div className="relative min-h-screen bg-black flex flex-col items-center overflow-hidden">

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

        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: fixed; width: 40px; height: 40px;
          border-color: #00ff88; border-style: solid; opacity: 0.4;
          z-index: 50;
        }
        .corner-tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }

        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .fade-up { animation: fadeUp 0.6s ease both; }
        .fade-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.2s ease both; }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(16px)}
          to{opacity:1;transform:none}
        }

        .cyber-card {
          border: 1px solid rgba(0,255,136,0.2);
          background: rgba(0,255,136,0.02);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .cyber-card:hover {
          border-color: #00ff88;
          transform: translateY(-4px);
          box-shadow: 0 0 30px rgba(0,255,136,0.2);
        }

        .contact-btn {
          border: 1px solid rgba(0,255,136,0.4);
          background: rgba(0,255,136,0.05);
          border-radius: 6px;
          transition: all 0.2s ease;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .contact-btn:hover {
          background: #00ff88;
          color: #000;
          transform: translateY(-2px);
          border-color: #00ff88;
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
        MARKETING · SERVICES
      </div>
      <div className="fixed bottom-6 right-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        SAATOZI.COM
      </div>

      {/* BACK Button */}
      <Link
        href="/marketing-choice"
        className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition"
      >
        ← BACK
      </Link>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="fade-up flex items-center justify-center gap-2 mb-4">
            <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
            <span className="space-mono text-[11px] text-[#00ff88] tracking-[3px] uppercase">
              SERVICE CATALOGUE
            </span>
          </div>

          <h1 className="fade-up-1 orbitron text-[clamp(32px,6vw,48px)] font-black text-white tracking-[0.15em] leading-tight mb-4">
            WHAT I CAN
            <br />
            DO FOR YOU
          </h1>

          <div className="fade-up-2 w-32 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, idx) => (
            <div key={idx} className="fade-up-2 cyber-card p-5">
              <h3 className="orbitron text-[15px] font-bold text-[#00ff88] tracking-wide mb-2">
                {service.name}
              </h3>
              <p className="space-mono text-[11px] text-white/40 leading-relaxed mb-4">
                {service.desc}
              </p>
              
              {/* Contact Buttons - Larger and Clearer */}
              <div className="flex flex-wrap gap-3 mt-3">
                <button
                  onClick={() => sendToWhatsApp(service.name)}
                  className="contact-btn px-4 py-2 text-[#00ff88]"
                >
                  💬 WHATSAPP
                </button>
                <button
                  onClick={() => sendEmail(service.name)}
                  className="contact-btn px-4 py-2 text-[#00ff88]"
                >
                  📧 EMAIL
                </button>
                <button
                  onClick={sendInstagram}
                  className="contact-btn px-4 py-2 text-[#00ff88]"
                >
                  📸 INSTAGRAM
                </button>
              </div>
              
              <p className="text-[#00ff88]/30 text-[8px] tracking-wider mt-3">
                ⚡ Charges depend on conversation
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}