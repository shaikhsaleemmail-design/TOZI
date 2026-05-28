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
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative">
      <Link href="/" className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="text-center">
        {showChoose && (
          <p className="text-white text-xl md:text-2xl animate-fadeIn opacity-80 tracking-wide">
            Choose Your Option
          </p>
        )}

        {showButtons && (
          <div className="flex flex-col md:flex-row gap-6 mt-10 animate-fadeIn">
            <Link href="/fitness-about">
              <button className="px-12 py-4 bg-white text-black rounded-full text-xl font-medium hover:scale-105 transition">
                ABOUT
              </button>
            </Link>
            <Link href="/fitness-plans">
              <button className="px-12 py-4 bg-white text-black rounded-full text-xl font-medium hover:scale-105 transition">
                START NOW
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}