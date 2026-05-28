'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showTOZI, setShowTOZI] = useState(false);
  const [showChoose, setShowChoose] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTOZI(true), 500);
    setTimeout(() => setShowChoose(true), 1300);
    setTimeout(() => setShowButtons(true), 2100);
  }, []);

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

        {showButtons && (
          <div className="flex flex-col md:flex-row gap-6 mt-10 animate-fadeIn">
            <Link href="/fitness-choice">
              <button className="px-12 py-4 bg-green-600 text-white rounded-full text-xl font-medium hover:scale-105 transition">
                FITNESS
              </button>
            </Link>
            <Link href="/marketing-choice">
              <button className="px-12 py-4 bg-blue-600 text-white rounded-full text-xl font-medium hover:scale-105 transition">
                DIGITAL MARKETING
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}