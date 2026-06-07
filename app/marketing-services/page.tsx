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

      <Link href="/marketing-choice" className="fixed top-8 left-8 text-white/60 text-sm hover:text-gold transition z-50 tracking-wide">
        ← BACK
      </Link>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center w-full mb-12">
          <div className="text-gold text-[1px] opacity-50 mb-4 animate-pulse">◇</div>
          <h1 className="text-2xl md:text-4xl font-light gold-text tracking-[0.2em] mb-3">
            WHAT I CAN DO FOR YOU
          </h1>
          <p className="text-white/40 text-xs tracking-wide uppercase">
            Choose a service to connect with me
          </p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Services List */}
        <div className="w-full space-y-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group w-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-opacity-100 transition-all duration-500 hover:scale-[1.02]"
              style={{ borderColor: `rgba(212, 175, 55, 0.3)` }}
            >
              {/* Service Header with Icon and Color */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{service.icon}</span>
                <h2 className={`text-xl md:text-2xl font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.name}
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 pl-1">
                {service.description}
              </p>
              
              {/* Decorative Line */}
              <div className={`w-full h-px bg-gradient-to-r from-transparent via-${service.color.split(' ')[1].replace('from-', '')}/50 to-transparent my-3`}></div>
              
              {/* Contact Buttons - Colored */}
              <div className="flex flex-wrap gap-3 justify-start mb-3">
                <button
                  onClick={() => sendToWhatsApp(service.name)}
                  className="px-5 py-2 text-sm rounded-full bg-green-600/20 border border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  💬 WhatsApp
                </button>
                <button
                  onClick={() => sendEmail(service.name)}
                  className="px-5 py-2 text-sm rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  📧 Email
                </button>
                <button
                  onClick={sendInstagram}
                  className="px-5 py-2 text-sm rounded-full bg-pink-600/20 border border-pink-500/50 text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  📸 Instagram DM
                </button>
              </div>
              
              {/* Price Note */}
              <p className="text-amber-400/60 text-[10px] uppercase tracking-wider flex items-center gap-1">
                <span>⚡</span> Charges depend on conversation
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center w-full mt-12">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto"></div>
          <div className="text-gold/20 text-[8px] mt-4">◇</div>
        </div>
      </div>
    </div>
  );
}