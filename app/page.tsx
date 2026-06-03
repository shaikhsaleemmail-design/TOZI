'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

export default function Home() {
  const router = useRouter();
  const [showTOZI, setShowTOZI] = useState(false);
  const [showChoose, setShowChoose] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showSquat, setShowSquat] = useState(false);
  const [showRobot, setShowRobot] = useState(false);

  const squatAnimation = require('../public/squat.json');
  const robotAnimation = require('../public/robot.json');

  useEffect(() => {
    setTimeout(() => setShowTOZI(true), 500);
    setTimeout(() => setShowChoose(true), 1300);
    setTimeout(() => setShowButtons(true), 2100);
  }, []);

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

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      
      {/* Black Hole Background */}
      <div className="black-hole-bg">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
      </div>

      {/* Content - Smaller and Compact */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        
        {/* TOZI Logo - Smaller */}
        {showTOZI && (
          <h1 
            className="text-5xl md:text-7xl font-black tracking-wider animate-fadeIn color-changing mb-2"
            style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          >
            TOZI
          </h1>
        )}

        {/* Tagline - Smaller */}
        {showChoose && (
          <p className="text-white text-base md:text-lg mt-2 animate-fadeIn opacity-80 tracking-wide mb-6">
            Choose Your Option
          </p>
        )}

        {/* Buttons Section */}
        {!showSquat && !showRobot && showButtons && (
          <div className="flex flex-col md:flex-row gap-4 animate-fadeIn items-center justify-center">
            
            {/* FITNESS Button - Compact */}
            <button
              onClick={handleFitnessClick}
              className="px-5 py-3 bg-green-600 text-white rounded-xl hover:scale-105 transition-all duration-200 w-64"
            >
              <span className="text-xl font-bold block">FITNESS</span>
              <div className="text-[11px] opacity-90 mt-1 space-y-0.5">
                <div>💪 Diet & Nutrition</div>
                <div>🏋️ Custom Workout Plans</div>
                <div>📊 Progress Tracking</div>
                <div>🎯 Goal Achievement</div>
              </div>
            </button>

            {/* DIGITAL MARKETING Button - Compact */}
            <button
              onClick={handleMarketingClick}
              className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition-all duration-200 w-64"
            >
              <span className="text-xl font-bold block">DIGITAL MARKETING</span>
              <div className="text-[11px] opacity-90 mt-1 space-y-0.5">
                <div>📱 Social Media Growth</div>
                <div>🎨 Content Creation</div>
                <div>📈 Paid Ads Strategy</div>
                <div>🚀 Brand Building</div>
              </div>
            </button>

          </div>
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