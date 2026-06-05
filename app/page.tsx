'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

export default function Home() {
  const router = useRouter();
  
  // Animation states
  const [showTozi, setShowTozi] = useState(true);
  const [toziSmall, setToziSmall] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const [showSquat, setShowSquat] = useState(false);
  const [showRobot, setShowRobot] = useState(false);
  
  const [fitnessIndex, setFitnessIndex] = useState(0);
  const [marketingIndex, setMarketingIndex] = useState(0);
  
  // Fixed positions - will be set on client only
  const [starPositions, setStarPositions] = useState<Array<{left: number, top: number, size: number, delay: number, duration: number}>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{top: number, left: number, delay: number, duration: number}>>([]);
  const [fallingStars, setFallingStars] = useState<Array<{left: number, top: number, delay: number, duration: number, size: number}>>([]);

  const squatAnimation = require('../public/squat.json');
  const robotAnimation = require('../public/robot.json');

  const fitnessLines = [
    "💪 Diet & Nutrition",
    "🏋️ Custom Workout Plans",
    "📊 Progress Tracking",
    "🎯 Goal Achievement"
  ];

  const marketingLines = [
    "📱 Social Media Growth",
    "🎨 Content Creation",
    "📈 Paid Ads Strategy",
    "🚀 Brand Building"
  ];

  // Generate all random positions ONLY on client side after mount
  useEffect(() => {
    setIsClient(true);
    
    // Generate regular stars
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 2 + Math.random() * 5
      });
    }
    setStarPositions(stars);
    
    // Generate shooting stars
    const shooting = [];
    for (let i = 0; i < 10; i++) {
      shooting.push({
        top: 5 + Math.random() * 70,
        left: 10 + Math.random() * 80,
        delay: Math.random() * 20,
        duration: 2.5 + Math.random() * 4
      });
    }
    setShootingStars(shooting);
    
    // Generate falling stars
    const falling = [];
    for (let i = 0; i < 40; i++) {
      falling.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 4 + Math.random() * 7,
        size: 6 + Math.random() * 10
      });
    }
    setFallingStars(falling);
    
    // Animation sequence
    setTimeout(() => setToziSmall(true), 2500);
    setTimeout(() => setShowStars(true), 3500);
    setTimeout(() => setShowContent(true), 3800);
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const fitnessInterval = setInterval(() => {
      setFitnessIndex((prev) => (prev + 1) % fitnessLines.length);
    }, 2000);
    const marketingInterval = setInterval(() => {
      setMarketingIndex((prev) => (prev + 1) % marketingLines.length);
    }, 2000);
    return () => {
      clearInterval(fitnessInterval);
      clearInterval(marketingInterval);
    };
  }, [showContent]);

  const handleFitnessClick = () => {
    setShowSquat(true);
    setTimeout(() => {
      router.push('/fitness-choice');
    }, 2000);
  };

  const handleMarketingClick = () => {
    setShowRobot(true);
    setTimeout(() => {
      router.push('/marketing-choice');
    }, 2000);
  };

  const handleJoinCommunity = () => {
    window.open('https://ig.me/j/AbYr1PJBkE4lwAY7/', '_blank');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-6 overflow-hidden">
      
      {/* Deep Dark Night Sky Background */}
      <div className="fixed inset-0 z-0" style={{ background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)' }}>
        
        {/* Twinkling Stars - Only render on client to avoid hydration error */}
        {isClient && (
          <>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {starPositions.map((star, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: 0,
                    animation: `twinkle ${star.duration}s ease-in-out infinite`,
                    animationDelay: `${star.delay}s`,
                    boxShadow: `0 0 ${star.size * 3}px rgba(255,255,255,0.8)`
                  }}
                />
              ))}
            </div>
            
            {/* Shooting Stars */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {shootingStars.map((star, i) => (
                <div
                  key={`shoot-${i}`}
                  className="absolute"
                  style={{
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                    animation: `shoot ${star.duration}s linear infinite`,
                    animationDelay: `${star.delay}s`
                  }}
                >
                  <div className="relative w-0 h-0">
                    <div className="absolute w-24 h-0.5 bg-gradient-to-r from-white via-white/80 to-transparent transform -translate-x-full rounded-full" />
                    <div className="absolute w-1.5 h-1.5 bg-white rounded-full -translate-x-28 -translate-y-0.5 shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Falling Stars */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {fallingStars.map((star, i) => (
                <div
                  key={`fall-${i}`}
                  className="absolute text-blue-100"
                  style={{
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    animation: `starFall ${star.duration}s linear infinite, starGlow ${2 + (i % 4)}s ease-in-out infinite`,
                    fontSize: `${star.size}px`,
                    animationDelay: `${star.delay}s`,
                    opacity: 0.6
                  }}
                >
                  ✦
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        
        {/* TOZI Logo - Appears IMMEDIATELY */}
        <div className={`transition-all duration-1000 ${
          toziSmall ? 'transform scale-75 -translate-y-24' : 'transform scale-150 translate-y-0'
        }`}>
          <h1 
            className={`font-black tracking-wider text-center ${
              toziSmall 
                ? 'text-5xl md:text-6xl color-changing-slow animate-fadeIn font-bold' 
                : 'text-8xl md:text-9xl animate-zoomIn color-changing-fast font-black'
            }`}
            style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          >
            TOZI
          </h1>
        </div>

        {/* All Other Content - Appears after stars */}
        {showContent && (
          <div className="animate-fadeInUp">
            <p className="text-gray-200 text-sm md:text-base mt-2 drop-shadow-md font-semibold">
              Welcome to my site. I'm <span className="text-white font-bold">TOZI</span>
            </p>

            <p className="text-white text-sm md:text-base mt-2 opacity-90 tracking-wide mb-6 drop-shadow-md font-semibold">
              Choose Your Option
            </p>

            <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
              
              <button
                onClick={handleFitnessClick}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:scale-105 transition-all duration-200 w-56 h-24 flex flex-col items-center justify-center overflow-hidden shadow-xl font-bold"
              >
                <span className="text-lg font-bold mb-1">FITNESS</span>
                <div className="relative w-full h-6 overflow-hidden">
                  <div 
                    key={fitnessIndex}
                    className="absolute w-full text-[10px] opacity-90 animate-slideLeft font-semibold"
                  >
                    {fitnessLines[fitnessIndex]}
                  </div>
                </div>
              </button>

              <button
                onClick={handleMarketingClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-200 w-56 h-24 flex flex-col items-center justify-center overflow-hidden shadow-xl font-bold"
              >
                <span className="text-lg font-bold mb-1">DIGITAL MARKETING</span>
                <div className="relative w-full h-6 overflow-hidden">
                  <div 
                    key={marketingIndex}
                    className="absolute w-full text-[10px] opacity-90 animate-slideLeft font-semibold"
                  >
                    {marketingLines[marketingIndex]}
                  </div>
                </div>
              </button>

            </div>

            <div className="mt-8">
              <button
                onClick={handleJoinCommunity}
                className="px-5 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto shadow-xl font-semibold"
              >
                <span>💬</span>
                <span>Join the Community</span>
                <span>→</span>
              </button>
              <p className="text-gray-200 text-[10px] mt-2 drop-shadow-md font-medium">
                Connect with TOZI's global community on Instagram
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Lottie Animations */}
      {showSquat && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          <div className="w-80 h-80">
            <Lottie animationData={squatAnimation} loop={false} />
          </div>
          <p className="text-white text-xl mt-8 font-bold">Get ready to transform! 💪</p>
        </div>
      )}

      {showRobot && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          <div className="w-80 h-80">
            <Lottie animationData={robotAnimation} loop={false} />
          </div>
          <p className="text-white text-xl mt-8 font-bold">Let's scale your brand! 🚀</p>
        </div>
      )}
    </div>
  );
}