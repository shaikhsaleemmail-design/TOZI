'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

export default function Home() {
  const router = useRouter();
  const [showTOZI, setShowTOZI] = useState(false);
  const [showChoose, setShowChoose] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  
  const [showFitnessAnim, setShowFitnessAnim] = useState(false);
  const [showMarketingAnim, setShowMarketingAnim] = useState(false);
  
  const [squatAnim, setSquatAnim] = useState(null);
  const [robotAnim, setRobotAnim] = useState(null);

  useEffect(() => {
    setTimeout(() => setShowTOZI(true), 500);
    setTimeout(() => setShowChoose(true), 1300);
    
    // Load your JSON files
    fetch('/squat.json')
      .then(res => res.json())
      .then(data => setSquatAnim(data))
      .catch(err => console.log('squat.json not found'));
      
    fetch('/robot.json')
      .then(res => res.json())
      .then(data => setRobotAnim(data))
      .catch(err => console.log('robot.json not found'));
  }, []);

  const handleFitness = () => {
    setShowButtons(false);
    setShowFitnessAnim(true);
    setTimeout(() => router.push('/fitness-choice'), 3000);
  };

  const handleMarketing = () => {
    setShowButtons(false);
    setShowMarketingAnim(true);
    setTimeout(() => router.push('/marketing-choice'), 3000);
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

        {showButtons && (
          <div className="flex flex-col md:flex-row gap-6 mt-10 animate-fadeIn">
            <button onClick={handleFitness} className="px-12 py-4 bg-green-600 text-white rounded-full text-xl font-medium">
              FITNESS
            </button>
            <button onClick={handleMarketing} className="px-12 py-4 bg-blue-600 text-white rounded-full text-xl font-medium">
              DIGITAL MARKETING
            </button>
          </div>
        )}

        {showFitnessAnim && squatAnim && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            <div className="w-80 h-80">
              <Lottie animationData={squatAnim} loop={false} />
            </div>
            <p className="text-green-500 text-xl mt-8">💪 GETTING YOU STRONGER...</p>
          </div>
        )}

        {showMarketingAnim && robotAnim && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            <div className="w-80 h-80">
              <Lottie animationData={robotAnim} loop={false} />
            </div>
            <p className="text-blue-500 text-xl mt-8">🤖 SCALING YOUR BRAND...</p>
          </div>
        )}
      </div>
    </div>
  );
}