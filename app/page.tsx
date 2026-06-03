'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

export default function Home() {
  const router = useRouter();
  const [showTOZI, setShowTOZI] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showChoose, setShowChoose] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showSquat, setShowSquat] = useState(false);
  const [showRobot, setShowRobot] = useState(false);
  
  const [fitnessIndex, setFitnessIndex] = useState(0);
  const [marketingIndex, setMarketingIndex] = useState(0);

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

  useEffect(() => {
    setTimeout(() => setShowTOZI(true), 500);
    setTimeout(() => setShowIntro(true), 1200);
    setTimeout(() => setShowChoose(true), 1900);
    setTimeout(() => setShowButtons(true), 2600);
  }, []);

  useEffect(() => {
    if (!showButtons) return;
    const interval = setInterval(() => {
      setFitnessIndex((prev) => (prev + 1) % fitnessLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [showButtons]);

  useEffect(() => {
    if (!showButtons) return;
    const interval = setInterval(() => {
      setMarketingIndex((prev) => (prev + 1) % marketingLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [showButtons]);

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
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-6 overflow-hidden">
      
      <div className="black-hole-bg">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        
        {/* TOZI Logo */}
        {showTOZI && (
          <h1 
            className="text-4xl md:text-6xl font-black tracking-wider animate-fadeIn color-changing mb-1"
            style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          >
            TOZI
          </h1>
        )}

        {/* Introduction Line */}
        {showIntro && (
          <p className="text-gray-300 text-sm md:text-base animate-fadeIn mb-1">
            Welcome to my site. I'm <span className="text-white font-semibold">TOZI</span>
          </p>
        )}

        {/* Tagline */}
        {showChoose && (
          <p className="text-white text-sm md:text-base mt-1 animate-fadeIn opacity-80 tracking-wide mb-5">
            Choose Your Option
          </p>
        )}

        {!showSquat && !showRobot && showButtons && (
          <>
            {/* Main Buttons */}
            <div className="flex flex-col md:flex-row gap-3 animate-fadeIn items-center justify-center">
              
              <button
                onClick={handleFitnessClick}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:scale-105 transition-all duration-200 w-56 h-24 flex flex-col items-center justify-center overflow-hidden"
              >
                <span className="text-lg font-bold mb-1">FITNESS</span>
                <div className="relative w-full h-6 overflow-hidden">
                  <div 
                    key={fitnessIndex}
                    className="absolute w-full text-[10px] opacity-90 animate-slideLeft"
                  >
                    {fitnessLines[fitnessIndex]}
                  </div>
                </div>
              </button>

              <button
                onClick={handleMarketingClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-200 w-56 h-24 flex flex-col items-center justify-center overflow-hidden"
              >
                <span className="text-lg font-bold mb-1">DIGITAL MARKETING</span>
                <div className="relative w-full h-6 overflow-hidden">
                  <div 
                    key={marketingIndex}
                    className="absolute w-full text-[10px] opacity-90 animate-slideLeft"
                  >
                    {marketingLines[marketingIndex]}
                  </div>
                </div>
              </button>

            </div>

            {/* Join Community Button - NEW */}
            <div className="mt-8 animate-fadeIn">
              <button
                onClick={handleJoinCommunity}
                className="px-5 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                <span>💬</span>
                <span>Join the Community</span>
                <span>→</span>
              </button>
              <p className="text-gray-500 text-[10px] mt-2">
                Connect with TOZI's global community on Instagram
              </p>
            </div>
          </>
        )}

        {showSquat && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            <div className="w-80 h-80">
              <Lottie animationData={squatAnimation} loop={false} />
            </div>
            <p className="text-white text-xl mt-8">Get ready to transform! 💪</p>
          </div>
        )}

        {showRobot && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            <div className="w-80 h-80">
              <Lottie animationData={robotAnimation} loop={false} />
            </div>
            <p className="text-white text-xl mt-8">Let's scale your brand! 🚀</p>
          </div>
        )}
      </div>
    </div>
  );
}