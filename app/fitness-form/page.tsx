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
        <Link href="/fitness-choice" className="fixed top-8 left-8 text-white/40 hover:text-[#00ff88] text-sm tracking-wider transition z-50">
          ← BACK
        </Link>
        <div className="text-center">
          <div className="w-2 h-2 rounded-full bg-[#00ff88] mx-auto mb-4 animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-4" style={{ fontFamily: "'Orbitron', monospace" }}>THANK YOU</h1>
          <p className="text-sm text-white/40 leading-relaxed" style={{ fontFamily: "'Space Mono', monospace" }}>I'll review your answers and reach out on WhatsApp within 24 hours.</p>
          <p className="text-xs text-[#00ff88] mt-6 opacity-60">STAY DISCIPLINED</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      
      {/* BACK Button */}
      <Link
        href="/fitness-choice"
        className="fixed top-8 left-8 text-white/40 hover:text-[#00ff88] text-sm tracking-wider transition z-50"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        ← BACK
      </Link>

      {/* Main Content - Perfect Center */}
      <div className="w-full max-w-md mx-auto px-6">
        
        {/* Progress */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-[10px] text-[#00ff88] tracking-[3px] uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
              {step + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-0.5 max-w-[180px] mx-auto">
            <div className="bg-[#00ff88] h-0.5 rounded-full transition-all duration-300" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
          </div>
        </div>

        {/* Question Card */}
        <div className="border border-[#00ff88]/20 bg-[#00ff88]/5 rounded-2xl p-6 md:p-7">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide text-center mb-6" style={{ fontFamily: "'Orbitron', monospace" }}>
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === 'select' ? (
            <div className="space-y-2.5">
              {currentQuestion.options?.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="w-full py-3 px-4 bg-[#00ff88]/10 border border-[#00ff88] rounded-xl text-[#00ff88] text-sm font-bold tracking-wider hover:bg-[#00ff88] hover:text-black transition-all duration-200"
                  style={{ fontFamily: "'Orbitron', monospace" }}
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
                className="w-full p-4 bg-[#00ff88]/5 border border-[#00ff88]/30 rounded-xl text-white text-sm outline-none focus:border-[#00ff88] transition-all duration-200 mb-4"
                style={{ fontFamily: "'Space Mono', monospace" }}
                autoFocus
              />
              <button
                onClick={() => handleAnswer(currentValue)}
                className="w-full py-3 px-4 bg-[#00ff88]/10 border border-[#00ff88] rounded-xl text-[#00ff88] text-sm font-bold tracking-wider hover:bg-[#00ff88] hover:text-black transition-all duration-200"
                style={{ fontFamily: "'Orbitron', monospace" }}
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