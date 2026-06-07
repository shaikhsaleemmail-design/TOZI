'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  
  // Sliding text indices
  const [fitnessIndex, setFitnessIndex] = useState(0);
  const [marketingIndex, setMarketingIndex] = useState(0);

  const fitnessLines = [
    "✦ Diet & Nutrition",
    "✦ Custom Workout Plans",
    "✦ Progress Tracking",
    "✦ Goal Achievement"
  ];

  const marketingLines = [
    "✦ Social Media Growth",
    "✦ Content Creation",
    "✦ Paid Ads Strategy",
    "✦ Brand Building"
  ];

  useEffect(() => {
    setTimeout(() => setShowGlow(true), 200);
    setTimeout(() => setShowContent(true), 300);
  }, []);

  // Auto-slide for FITNESS button
  useEffect(() => {
    if (!showContent) return;
    const interval = setInterval(() => {
      setFitnessIndex((prev) => (prev + 1) % fitnessLines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [showContent]);

  // Auto-slide for MARKETING button
  useEffect(() => {
    if (!showContent) return;
    const interval = setInterval(() => {
      setMarketingIndex((prev) => (prev + 1) % marketingLines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [showContent]);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleJoinCommunity = () => {
    window.open('https://ig.me/j/AbYr1PJBkE4lwAY7/', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 overflow-hidden">
      
      {/* Grain Texture */}
      <div className="grain-overlay" />
      
      {/* Vignette Effect */}
      <div className="vignette" />
      
      {/* Gold Glow Behind TOZI */}
      {showGlow && (
        <div className="gold-glow animate-fadeIn" />
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        
        {/* Diamond Separator */}
        <div className="mb-8 animate-fadeInUp delay-100">
          <div className="text-gold text-[1px] opacity-50">◇</div>
        </div>

        {/* TOZI - Premium Logo */}
        <h1 
          className="text-7xl md:text-[100px] font-light tracking-[0.2em] animate-fadeInUp delay-200 gold-text mb-4"
          style={{ fontFamily: "'Playfair Display', var(--font-playfair), serif" }}
        >
          TOZI
        </h1>

        {/* Welcome Line - Restored */}
        <div className="animate-fadeInUp delay-300 mb-2">
          <p className="text-white/70 text-sm md:text-base tracking-wide">
            Welcome to my site. I'm <span className="text-white font-medium">TOZI</span>
          </p>
        </div>

        {/* Choose Your Option - Restored */}
        <div className="animate-fadeInUp delay-400 mb-12">
          <p className="text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase">
            Choose Your Option
          </p>
        </div>

        {/* Diamond Separator */}
        <div className="mb-8 animate-fadeInUp delay-500">
          <div className="text-gold/30 text-[8px]">◇</div>
        </div>

        {/* Clickable Buttons Section */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
          
          {/* FITNESS Button - Premium Pill with Sliding Text */}
          <button
            onClick={() => handleNavigate('/fitness-choice')}
            className="group w-72 h-28 premium-pill flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
          >
            <span className="text-gold text-base md:text-lg font-light tracking-[0.2em] mb-2">FITNESS</span>
            <div className="relative w-full h-6 overflow-hidden">
              <div 
                key={fitnessIndex}
                className="absolute w-full text-gray-300 text-[11px] font-light tracking-wide animate-slideLeftPremium"
              >
                {fitnessLines[fitnessIndex]}
              </div>
            </div>
          </button>

          {/* DIGITAL MARKETING Button - Premium Pill with Sliding Text */}
          <button
            onClick={() => handleNavigate('/marketing-choice')}
            className="group w-72 h-28 premium-pill flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
          >
            <span className="text-gold text-base md:text-lg font-light tracking-[0.2em] mb-2">DIGITAL MARKETING</span>
            <div className="relative w-full h-6 overflow-hidden">
              <div 
                key={marketingIndex}
                className="absolute w-full text-gray-300 text-[11px] font-light tracking-wide animate-slideLeftPremium"
              >
                {marketingLines[marketingIndex]}
              </div>
            </div>
          </button>

        </div>

        {/* Diamond Separator */}
        <div className="mb-8 animate-fadeInUp delay-600">
          <div className="text-gold/20 text-[8px]">◇</div>
        </div>

        {/* Join Community Button */}
        <div className="animate-fadeInUp delay-700">
          <button
            onClick={handleJoinCommunity}
            className="premium-pill"
          >
            <span>✦</span>
            <span>JOIN THE CIRCLE</span>
            <span>✦</span>
          </button>
          <p className="text-[#666666] text-[9px] md:text-[10px] tracking-[0.15em] uppercase mt-4">
            Connect with TOZI's global circle on Instagram
          </p>
        </div>

      </div>
    </div>
  );
}