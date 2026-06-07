'use client';
import Link from 'next/link';

export default function MarketingServices() {
  const services = [
    { name: "Website Creation", description: "Custom, fast, and mobile-friendly websites tailored to your brand." },
    { name: "Content Strategy", description: "Data-driven content plans that attract, engage, and convert." },
    { name: "Content Creation", description: "High-quality posts, reels, and graphics for social media." },
    { name: "Video Editing", description: "Professional editing for reels, YouTube, and ads." },
    { name: "Social Media Marketing", description: "Grow your audience and build a loyal community." },
    { name: "Script Writing", description: "Engaging scripts for reels, ads, and YouTube videos." },
    { name: "Search Engine Optimisation (SEO)", description: "Rank higher on Google and get organic traffic." },
    { name: "Paid Advertising (Meta Ads & Google Ads)", description: "ROI-focused ad campaigns that deliver results." },
    { name: "WhatsApp Marketing Automation", description: "Automated broadcasts, replies, and lead nurturing." },
    { name: "Brand Strategy", description: "Position your brand for long-term success." },
    { name: "Photo Editing", description: "Professional retouching and enhancement for visuals." }
  ];

  const sendToWhatsApp = (serviceName: string) => {
    window.open(`https://wa.me/918657282577?text=DIGITAL MARKETING ENQUIRY - Selected Service: ${serviceName}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="grain-overlay" />
      <div className="vignette" />
      
      <Link href="/marketing-choice" className="fixed top-8 left-8 text-white/60 text-sm hover:text-gold transition z-50 tracking-wide">← BACK</Link>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-8"><div className="text-gold text-[1px] opacity-50">◇</div></div>
        
        <h1 className="text-3xl md:text-4xl font-light text-white text-center tracking-[0.2em] mb-4">WHAT I CAN DO FOR YOU</h1>
        <p className="text-center text-gray-500 text-xs tracking-wide mb-12">Choose a service to connect with me</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="premium-pill flex-col w-full h-auto py-6 px-5 hover:scale-105 transition-all duration-300">
              <h2 className="text-gold text-base font-light text-center tracking-wide mb-2">{service.name}</h2>
              <p className="text-gray-400 text-[11px] text-center mb-4 leading-relaxed">{service.description}</p>
              <div className="border-t border-gold/20 my-3 w-full"></div>
              <p className="text-gold/50 text-[9px] text-center mb-3">⚡ Charges depend on conversation</p>
              <button onClick={() => sendToWhatsApp(service.name)} className="w-full premium-pill py-2 text-sm">Connect on WhatsApp →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}