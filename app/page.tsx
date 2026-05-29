'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showTOZI, setShowTOZI] = useState(false);
  const [showChoose, setShowChoose] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  // Game state for FITNESS button
  const [fitnessClickCount, setFitnessClickCount] = useState(0);
  const [fitnessPosition, setFitnessPosition] = useState({ x: 0, y: 0 });
  const [fitnessCanClick, setFitnessCanClick] = useState(true);

  // Game state for MARKETING button
  const [marketingClickCount, setMarketingClickCount] = useState(0);
  const [marketingPosition, setMarketingPosition] = useState({ x: 0, y: 0 });
  const [marketingCanClick, setMarketingCanClick] = useState(true);

  // Message to show
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTimeout(() => setShowTOZI(true), 500);
    setTimeout(() => setShowChoose(true), 1300);
    setTimeout(() => setShowButtons(true), 2100);
  }, []);

  const handleFitnessClick = () => {
    if (!fitnessCanClick) return;
    
    const newCount = fitnessClickCount + 1;
    setFitnessClickCount(newCount);
    
    if (newCount < 3) {
      // Move button randomly
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 100;
      setFitnessPosition({ x: randomX, y: randomY });
      setMessage(`🎯 Catch me! ${3 - newCount} more clicks to go!`);
      setTimeout(() => setMessage(''), 1500);
    } else if (newCount === 3) {
      // Last dodge
      const randomX = (Math.random() - 0.5) * 250;
      const randomY = (Math.random() - 0.5) * 120;
      setFitnessPosition({ x: randomX, y: randomY });
      setMessage(`🔥 Last click! One more to go...`);
      setTimeout(() => setMessage(''), 1500);
    } else {
      // 4th click - unlock and navigate
      setFitnessCanClick(false);
      setMessage(`✅ Gotcha! Taking you there...`);
      setTimeout(() => {
        window.location.href = '/fitness-choice';
      }, 500);
    }
  };

  const handleMarketingClick = () => {
    if (!marketingCanClick) return;
    
    const newCount = marketingClickCount + 1;
    setMarketingClickCount(newCount);
    
    if (newCount < 3) {
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 100;
      setMarketingPosition({ x: randomX, y: randomY });
      setMessage(`🎯 Catch me! ${3 - newCount} more clicks to go!`);
      setTimeout(() => setMessage(''), 1500);
    } else if (newCount === 3) {
      const randomX = (Math.random() - 0.5) * 250;
      const randomY = (Math.random() - 0.5) * 120;
      setMarketingPosition({ x: randomX, y: randomY });
      setMessage(`🔥 Last click! One more to go...`);
      setTimeout(() => setMessage(''), 1500);
    } else {
      setMarketingCanClick(false);
      setMessage(`✅ Gotcha! Taking you there...`);
      setTimeout(() => {
        window.location.href = '/marketing-choice';
      }, 500);
    }
  };

  const getFitnessStyle = () => {
    if (fitnessClickCount < 4) {
      return {
        transform: `translate(${fitnessPosition.x}px, ${fitnessPosition.y}px)`,
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer'
      };
    }
    return {};
  };

  const getMarketingStyle = () => {
    if (marketingClickCount < 4) {
      return {
        transform: `translate(${marketingPosition.x}px, ${marketingPosition.y}px)`,
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer'
      };
    }
    return {};
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {showTOZI && (
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-wider animate-fadeIn"
              style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            TOZI
          </h1>
        )}

        {showChoose && (
          <p className="text-white text-xl md:text-2xl mt-8 animate-fadeIn opacity-80 tracking-wide">
            Choose Your Option
          </p>
        )}

        {/* Message popup */}
        {message && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full z-50 animate-fadeIn">
            {message}
          </div>
        )}

        {showButtons && (
          <div className="flex flex-col md:flex-row gap-6 mt-10 animate-fadeIn items-center justify-center">
            {/* FITNESS Button - Dodging */}
            <div style={getFitnessStyle()}>
              <button
                onClick={handleFitnessClick}
                className="px-12 py-4 bg-green-600 text-white rounded-full text-xl font-medium hover:scale-105 transition-all duration-200"
                style={{ minWidth: '200px' }}
              >
                FITNESS {fitnessClickCount < 4 && fitnessClickCount > 0 ? `(${4 - fitnessClickCount})` : ''}
              </button>
            </div>

            {/* MARKETING Button - Dodging */}
            <div style={getMarketingStyle()}>
              <button
                onClick={handleMarketingClick}
                className="px-12 py-4 bg-blue-600 text-white rounded-full text-xl font-medium hover:scale-105 transition-all duration-200"
                style={{ minWidth: '260px' }}
              >
                DIGITAL MARKETING {marketingClickCount < 4 && marketingClickCount > 0 ? `(${4 - marketingClickCount})` : ''}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}