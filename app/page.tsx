'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [showTOZI, setShowTOZI] = useState(false);
  const [showChoose, setShowChoose] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  const [fitnessAnimating, setFitnessAnimating] = useState(false);
  const [marketingAnimating, setMarketingAnimating] = useState(false);
  const [fitnessIcon, setFitnessIcon] = useState('💪');
  const [marketingIcon, setMarketingIcon] = useState('📈');

  useEffect(() => {
    setTimeout(() => setShowTOZI(true), 500);
    setTimeout(() => setShowChoose(true), 1300);
    setTimeout(() => setShowButtons(true), 2100);
  }, []);

  const handleFitnessClick = () => {
    if (fitnessAnimating) return;
    
    setFitnessAnimating(true);
    
    setTimeout(() => setFitnessIcon('🏋️'), 200);
    setTimeout(() => setFitnessIcon('🏋️‍♂️'), 400);
    setTimeout(() => setFitnessIcon('🦵'), 600);
    setTimeout(() => setFitnessIcon('🏋️‍♂️'), 800);
    setTimeout(() => setFitnessIcon('💪'), 1000);
    
    setTimeout(() => {
      router.push('/fitness-choice');
    }, 1200);
  };

  const handleMarketingClick = () => {
    if (marketingAnimating) return;
    
    setMarketingAnimating(true);
    
    setTimeout(() => setMarketingIcon('🤖'), 200);
    setTimeout(() => setMarketingIcon('👁️'), 400);
    setTimeout(() => setMarketingIcon('😉'), 600);
    setTimeout(() => setMarketingIcon('🤖'), 800);
    setTimeout(() => setMarketingIcon('📈'), 1000);
    
    setTimeout(() => {
      router.push('/marketing-choice');
    }, 1200);
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

        {showButtons && (
          <div className="flex flex-col md:flex-row gap-6 mt-10 animate-fadeIn items-center justify-center">
            <button
              onClick={handleFitnessClick}
              disabled={fitnessAnimating}
              className="px-12 py-4 bg-green-600 text-white rounded-full text-xl font-medium hover:scale-105 transition-all duration-200 flex items-center gap-3"
            >
              <span className="text-2xl transition-all duration-200">{fitnessIcon}</span>
              <span>FITNESS</span>
            </button>

            <button
              onClick={handleMarketingClick}
              disabled={marketingAnimating}
              className="px-12 py-4 bg-blue-600 text-white rounded-full text-xl font-medium hover:scale-105 transition-all duration-200 flex items-center gap-3"
            >
              <span className="text-2xl transition-all duration-200">{marketingIcon}</span>
              <span>DIGITAL MARKETING</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}