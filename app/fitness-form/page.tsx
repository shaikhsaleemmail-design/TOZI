'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FitnessForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    diet: '',
    experience: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { key: 'name', question: 'What is your full name?', type: 'text', placeholder: 'Enter your full name' },
    { key: 'age', question: 'How old are you?', type: 'number', placeholder: 'Enter your age' },
    { key: 'weight', question: 'Current weight?', type: 'text', placeholder: 'e.g., 75kg' },
    { key: 'height', question: 'Your height?', type: 'text', placeholder: 'e.g., 175cm' },
    { key: 'goal', question: 'Main fitness goal?', type: 'select', options: ['Fat Loss', 'Muscle Gain', 'Strength', 'General Fitness'] },
    { key: 'diet', question: 'Diet type?', type: 'select', options: ['Veg', 'Non-Veg', 'Eggetarian'] },
    { key: 'experience', question: 'Experience level?', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { key: 'phone', question: 'WhatsApp number?', type: 'tel', placeholder: 'Enter your phone number' }
  ];

  const currentQuestion = questions[step];
  const currentValue = answers[currentQuestion?.key as keyof typeof answers] || '';

  const handleAnswer = (value: string) => {
    if (currentQuestion) {
      setAnswers({ ...answers, [currentQuestion.key]: value });
      if (step + 1 < questions.length) {
        setStep(step + 1);
      } else {
        const message = `FITNESS ENQUIRY%0A%0AName: ${answers.name}%0AAge: ${answers.age}%0AWeight: ${answers.weight}%0AHeight: ${answers.height}%0AGoal: ${answers.goal}%0ADiet: ${answers.diet}%0AExperience: ${answers.experience}%0APhone: ${answers.phone}`;
        window.open(`https://wa.me/918657282577?text=${message}`, '_blank');
        setSubmitted(true);
      }
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
          .orbitron { font-family: 'Orbitron', monospace; }
          .space-mono { font-family: 'Space Mono', monospace; }
        `}</style>
        
        <Link href="/fitness-choice" className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">
          ← BACK
        </Link>
        
        <div className="text-center px-6">
          <div className="w-2 h-2 rounded-full bg-[#00ff88] mx-auto mb-4 animate-pulse" />
          <h1 className="orbitron text-3xl md:text-4xl font-bold text-white tracking-wide mb-4">THANK YOU</h1>
          <p className="space-mono text-[13px] text-white/40 leading-relaxed">I'll review your answers and reach out on WhatsApp within 24 hours.</p>
          <p className="space-mono text-[11px] text-[#00ff88] mt-6 opacity-60">STAY DISCIPLINED</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        .orbitron { font-family: 'Orbitron', monospace; }
        .space-mono { font-family: 'Space Mono', monospace; }
        
        .cyber-card {
          border: 1px solid rgba(0,255,136,0.2);
          background: rgba(0,255,136,0.02);
          border-radius: 16px;
        }
        
        .cyber-input {
          background: rgba(0,255,136,0.05);
          border: 1px solid rgba(0,255,136,0.3);
          border-radius: 12px;
          padding: 14px 18px;
          color: white;
          font-family: 'Space Mono', monospace;
          font-size: 14px;
          width: 100%;
        }
        .cyber-input:focus {
          outline: none;
          border-color: #00ff88;
        }
        
        .cyber-btn {
          background: rgba(0,255,136,0.1);
          border: 1px solid #00ff88;
          border-radius: 12px;
          padding: 14px 28px;
          color: #00ff88;
          font-family: 'Orbitron', monospace;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2px;
          cursor: pointer;
          width: 100%;
        }
        .cyber-btn:hover {
          background: #00ff88;
          color: #000;
        }
        
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* BACK Button */}
      <Link
        href="/fitness-choice"
        className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition"
      >
        ← BACK
      </Link>

      {/* Main Content - Perfectly Centered */}
      <div className="w-full max-w-lg mx-auto px-6">
        
        {/* Progress */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="status-dot w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
            <span className="space-mono text-[9px] text-[#00ff88] tracking-[3px] uppercase">
              {step + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-0.5 max-w-[200px] mx-auto">
            <div className="bg-[#00ff88] h-0.5 rounded-full transition-all duration-300" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
          </div>
        </div>

        {/* Question Card */}
        <div className="cyber-card p-6 md:p-7">
          <h2 className="orbitron text-xl md:text-2xl font-bold text-white tracking-wide text-center mb-6">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === 'select' ? (
            <div className="space-y-2.5">
              {currentQuestion.options?.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="cyber-btn text-center"
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <div>
              <input
                type={currentQuestion.type}
                placeholder={currentQuestion.placeholder}
                value={currentValue}
                onChange={(e) => setAnswers({ ...answers, [currentQuestion.key]: e.target.value })}
                className="cyber-input mb-4"
                autoFocus
              />
              <button
                onClick={() => handleAnswer(currentValue)}
                className="cyber-btn"
              >
                NEXT →
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}