'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FitnessChoice() {
  const [showChoose, setShowChoose] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowChoose(true), 500);
    setTimeout(() => setShowButtons(true), 1300);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 overflow-hidden">
      
      {/* Grain Texture */}
      <div className="grain-overlay" />
      <div className="vignette" />

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        
        <Link href="/" className="fixed top-8 left-8 text-white/60 text-sm hover:text-gold transition z-50 tracking-wide">
          ← BACK
        </Link>

        <div className="mb-12">
          <div className="text-gold text-[1px] opacity-50">◇</div>
        </div>

        {showChoose && (
          <p className="text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase animate-fadeInUp mb-12">
            Choose Your Option
          </p>
        )}

        {showButtons && (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/fitness-about">
              <button className="premium-pill w-64 h-24 flex flex-col items-center justify-center">
                <span className="text-gold text-lg font-light tracking-[0.2em]">ABOUT</span>
                <span className="text-gray-400 text-[10px] mt-1">My journey & story</span>
              </button>
            </Link>
            <Link href="/fitness-plans">
              <button className="premium-pill w-64 h-24 flex flex-col items-center justify-center">
                <span className="text-gold text-lg font-light tracking-[0.2em]">START NOW</span>
                <span className="text-gray-400 text-[10px] mt-1">Begin transformation</span>
              </button>
            </Link>
          </div>
        )}

        <div className="mt-16">
          <div className="text-gold/20 text-[8px]">◇</div>
        </div>
      </div>
    </div>
  );
}