'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 1000);
    setTimeout(() => setShowButtons(true), 1500);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {showText && (
          <>
            <img 
              src="/images/logo.JPEG" 
              alt="TOZI Logo" 
              className="h-20 mx-auto mb-8 animate-fadeIn"
            />
            <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide animate-fadeIn">
              CHOOSE YOUR PATH
            </h1>
          </>
        )}
        
        {showButtons && (
          <div className="flex flex-col md:flex-row gap-6 mt-12 animate-fadeIn">
            <Link href="/fitness-choice">
              <button className="px-12 py-4 bg-white text-black rounded-full text-xl font-medium hover:scale-105 transition-transform duration-300">
                🏋️ FITNESS
              </button>
            </Link>
            <Link href="/marketing-choice">
              <button className="px-12 py-4 bg-white text-black rounded-full text-xl font-medium hover:scale-105 transition-transform duration-300">
                📈 DIGITAL MARKETING
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}