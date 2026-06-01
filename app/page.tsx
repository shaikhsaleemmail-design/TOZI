'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

export default function Home() {
  const router = useRouter();
  const [showTOZI, setShowTOZI] = useState(false);
  const [showChoose, setShowChoose] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  // Animation states
  const [showSquat, setShowSquat] = useState(false);
  const [showRobot, setShowRobot] = useState(false);

  // Import Lottie animations
  const squatAnimation = require('../public/squat.json');
  const robotAnimation = require('../public/robot.json');

  useEffect(() => {
    setTimeout(() => setShowTOZI(true), 500);
    setTimeout(() => setShowChoose(true), 1300);
    setTimeout(() => setShowButtons(true), 2100);
  }, []);

  const handleFitnessClick = () => {
    setShowSquat(true);
    // Navigate after animation (2 seconds)
    setTimeout(() => {
      router.push('/fitness-choice');
    }, 2000);
  };

  const handleMarketingClick = () => {
    setShowRobot(true);
    // Navigate after animation (2 seconds)
    setTimeout(() => {
      router.push('/marketing-choice');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {showTOZI && (
          <h1 
            className="text-7xl md:text-9xl font-black text-white tracking-wider animate-fadeIn"
            style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          >
            TOZI
          </h1>
        )}

        {showChoose && (
          <p className="text-white text-xl md:text-2xl mt-8 animate-fadeIn opacity-80 tracking-wide">
            Choose Your Option
          </p>
        )}

        {!showSquat && !showRobot && showButtons && (
          <div className="flex flex-col md:flex-row gap-6 mt-10 animate-fadeIn items-center justify-center">
            <button
              onClick={handleFitnessClick}
              className="px-12 py-4 bg-green-600 text-white rounded-full text-xl font-medium hover:scale-105 transition-all duration-200"
            >
              FITNESS
            </button>

            <button
              onClick={handleMarketingClick}
              className="px-12 py-4 bg-blue-600 text-white rounded-full text-xl font-medium hover:scale-105 transition-all duration-200"
            >
              DIGITAL MARKETING
            </button>
          </div>
        )}

        {/* Lottie Animation - Squat (Fitness) */}
        {showSquat && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            <div className="w-80 h-80">
              <Lottie animationData={squatAnimation} loop={false} />
            </div>
            <p className="text-white text-xl mt-8">Get ready to transform! 💪</p>
          </div>
        )}

        {/* Lottie Animation - Robot (Marketing) */}
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