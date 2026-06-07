'use client';
import Link from 'next/link';

interface Service {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export default function MarketingServices() {
  const services: Service[] = [
    { name: "Website Creation", description: "Custom, fast, and mobile-friendly websites tailored to your brand.", icon: "🌐", color: "from-blue-500 to-cyan-400" },
    { name: "Content Strategy", description: "Data-driven content plans that attract, engage, and convert.", icon: "📊", color: "from-purple-500 to-pink-500" },
    { name: "Content Creation", description: "High-quality posts, reels, and graphics for social media.", icon: "✍️", color: "from-yellow-500 to-orange-500" },
    { name: "Video Editing", description: "Professional editing for reels, YouTube, and ads.", icon: "🎬", color: "from-red-500 to-rose-500" },
    { name: "Social Media Marketing", description: "Grow your audience and build a loyal community.", icon: "📱", color: "from-indigo-500 to-purple-500" },
    { name: "Script Writing", description: "Engaging scripts for reels, ads, and YouTube videos.", icon: "📝", color: "from-emerald-500 to-teal-500" },
    { name: "Search Engine Optimisation (SEO)", description: "Rank higher on Google and get organic traffic.", icon: "🔍", color: "from-sky-500 to-blue-500" },
    { name: "Paid Advertising (Meta Ads & Google Ads)", description: "ROI-focused ad campaigns that deliver results.", icon: "💰", color: "from-amber-500 to-yellow-500" },
    { name: "WhatsApp Marketing Automation", description: "Automated broadcasts, replies, and lead nurturing.", icon: "💬", color: "from-green-500 to-emerald-500" },
    { name: "Brand Strategy", description: "Position your brand for long-term success.", icon: "🎯", color: "from-violet-500 to-purple-500" },
    { name: "Photo Editing", description: "Professional retouching and enhancement for visuals.", icon: "📸", color: "from-cyan-500 to-blue-500" }
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
    <div className="min-h-screen bg-[#050505] flex flex-col items-center">
      <div className="grain-overlay" />
      <div className="vignette" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-6 flex flex-col items-center">
        
        {/* BACK Button - Top Left */}
        <div className="w-full">
          <Link href="/marketing-choice" className="inline-block text-white/60 text-sm hover:text-gold transition tracking-wide">
            ← BACK
          </Link>
        </div>

        {/* Content - Moved DOWN with pt-20 (padding top) */}
        <div className="w-full pt-20">
          
          {/* Header */}
          <div className="text-center w-full mb-10">
            <div className="text-gold text-[1px] opacity-50 mb-3 animate-pulse">◇</div>
            <h1 className="text-2xl md:text-3xl font-light gold-text tracking-[0.2em]">
              WHAT I CAN DO FOR YOU
            </h1>
            <p className="text-white/40 text-xs tracking-wide uppercase mt-2">
              Choose a service to connect with me
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-5"></div>
          </div>

          {/* Services List */}
          <div className="w-full space-y-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{service.icon}</span>
                  <h2 className={`text-base font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.name}
                  </h2>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <button
                    onClick={() => sendToWhatsApp(service.name)}
                    className="px-3 py-1 text-[10px] rounded-full bg-green-600/20 border border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white transition"
                  >
                    💬 WhatsApp
                  </button>
                  <button
                    onClick={() => sendEmail(service.name)}
                    className="px-3 py-1 text-[10px] rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white transition"
                  >
                    📧 Email
                  </button>
                  <button
                    onClick={sendInstagram}
                    className="px-3 py-1 text-[10px] rounded-full bg-pink-600/20 border border-pink-500/50 text-pink-400 hover:bg-pink-600 hover:text-white transition"
                  >
                    📸 Instagram DM
                  </button>
                </div>
                <p className="text-amber-400/50 text-[8px] uppercase tracking-wider">
                  ⚡ Charges depend on conversation
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center w-full mt-10">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto"></div>
            <div className="text-gold/20 text-[8px] mt-3">◇</div>
          </div>
        </div>
      </div>
    </div>
  );
}