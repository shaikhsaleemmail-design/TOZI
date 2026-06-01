'use client';
import Link from 'next/link';
import { useState } from 'react';

interface Service {
  name: string;
  description: string;
}

export default function MarketingServices() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
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
    <div className="min-h-screen bg-black">
      <Link href="/marketing-choice" className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          What I Can Do for You
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Choose a service to learn more and connect with me
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:scale-105 transition">
              <h2 className="text-xl font-bold text-white mb-3">{service.name}</h2>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="bg-yellow-600/20 border border-yellow-600 rounded-lg p-3 mb-4">
                <p className="text-yellow-400 text-xs font-semibold text-center">
                  ⚡ Charges/price will depend on conversation
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => sendToWhatsApp(service.name)}
                  className="w-full py-2 bg-green-600 text-white rounded-full hover:scale-105 transition font-medium text-sm"
                >
                  💬 Connect on WhatsApp
                </button>
                <button
                  onClick={() => sendEmail(service.name)}
                  className="w-full py-2 bg-blue-600 text-white rounded-full hover:scale-105 transition font-medium text-sm"
                >
                  📧 Send Email
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Instagram DM button */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={sendInstagram}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
          >
            📸 DM on Instagram
          </button>
        </div>
      </div>
    </div>
  );
}