'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PlanDetails {
  price: string;
  perMonth: string;
  savings: string | null;
  features: string[];
  icon: string;
}

interface Answers {
  name: string;
  age: string;
  weight: string;
  height: string;
  goal: string;
  diet: string;
  experience: string;
  phone: string;
}

interface Question {
  key: keyof Answers;
  question: string;
  type: string;
  placeholder?: string;
  options?: string[];
}

export default function FitnessPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    name: '', age: '', weight: '', height: '', goal: '', diet: '', experience: '', phone: ''
  });
  const [formCompleted, setFormCompleted] = useState(false);
  const [userCountry, setUserCountry] = useState('IN');
  const [prices, setPrices] = useState<{ currency: string; threeMonth: number; sixMonth: number; twelveMonth: number } | null>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const country = data.country_code;
        setUserCountry(country);
        if (country === 'IN') {
          setPrices({ currency: '₹', threeMonth: 6000, sixMonth: 10000, twelveMonth: 18000 });
        } else if (country === 'US' || country === 'CA' || country === 'AE') {
          setPrices({ currency: '$', threeMonth: 99, sixMonth: 169, twelveMonth: 299 });
        } else if (country === 'GB') {
          setPrices({ currency: '£', threeMonth: 85, sixMonth: 145, twelveMonth: 255 });
        } else if (country === 'DE' || country === 'FR' || country === 'IT' || country === 'ES') {
          setPrices({ currency: '€', threeMonth: 95, sixMonth: 160, twelveMonth: 280 });
        } else {
          setPrices({ currency: '$', threeMonth: 89, sixMonth: 149, twelveMonth: 259 });
        }
      })
      .catch(() => setPrices({ currency: '₹', threeMonth: 6000, sixMonth: 10000, twelveMonth: 18000 }));
  }, []);

  const getPlans = (): Record<string, PlanDetails> | null => {
    if (!prices) return null;
    return {
      '3 Months': {
        price: `${prices.currency}${prices.threeMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.threeMonth / 3)}/month`,
        savings: null,
        icon: '💪',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support']
      },
      '6 Months': {
        price: `${prices.currency}${prices.sixMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.sixMonth / 6)}/month`,
        savings: prices.currency === '₹' ? 'Save ₹2,000' : `Save ${prices.currency}${prices.threeMonth * 2 - prices.sixMonth}`,
        icon: '🔥',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support', 'Free diet chart']
      },
      '12 Months': {
        price: `${prices.currency}${prices.twelveMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.twelveMonth / 12)}/month`,
        savings: prices.currency === '₹' ? 'Save ₹6,000' : `Save ${prices.currency}${prices.threeMonth * 4 - prices.twelveMonth}`,
        icon: '👑',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support', 'Free diet chart', 'Monthly consultation call']
      }
    };
  };

  const plans = getPlans();

  const questions: Question[] = [
    { key: 'name', question: 'What is your full name?', type: 'text', placeholder: 'Enter your full name' },
    { key: 'age', question: 'How old are you?', type: 'number', placeholder: 'Enter your age' },
    { key: 'weight', question: 'Current weight?', type: 'text', placeholder: 'e.g., 75kg' },
    { key: 'height', question: 'Your height?', type: 'text', placeholder: 'e.g., 175cm' },
    { key: 'goal', question: 'Main fitness goal?', type: 'select', options: ['Fat Loss', 'Muscle Gain', 'Strength', 'General Fitness'] },
    { key: 'diet', question: 'Diet type?', type: 'select', options: ['Veg', 'Non-Veg', 'Eggetarian'] },
    { key: 'experience', question: 'Experience level?', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { key: 'phone', question: 'WhatsApp number?', type: 'tel', placeholder: 'Enter your phone number' }
  ];

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setStep(1);
  };

  const handleAnswer = (value: string) => {
    const currentQuestion = step > 0 ? questions[step - 1] : null;
    if (currentQuestion) {
      setAnswers({ ...answers, [currentQuestion.key]: value });
    }
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setFormCompleted(true);
    }
  };

  const sendToWhatsApp = () => {
    const planData = selectedPlan && plans ? plans[selectedPlan] : null;
    const msg = `FITNESS ENQUIRY - ${selectedPlan} (${planData?.price})%0A%0A` +
      Object.entries(answers).map(([k, v]) => `${k}: ${v}`).join('%0A');
    window.open(`https://wa.me/918657282577?text=${msg}`, '_blank');
  };

  const sendEmail = () => {
    window.location.href = `mailto:shaikhsaleem.mail@gmail.com?subject=Fitness Enquiry - ${selectedPlan}&body=${Object.entries(answers).map(([k, v]) => `${k}: ${v}`).join('%0A')}`;
  };

  const sendInstagram = () => {
    window.open('https://instagram.com/saatozi', '_blank');
  };

  const currentQuestion = step > 0 ? questions[step - 1] : null;
  const currentValue = currentQuestion ? answers[currentQuestion.key] : '';

  if (!prices || !plans) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#00ff88] font-mono">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        .orbitron { font-family: 'Orbitron', monospace; }
        .space-mono { font-family: 'Space Mono', monospace; }
        
        .cyber-card {
          border: 1px solid rgba(0,255,136,0.2);
          background: rgba(0,255,136,0.02);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .cyber-card:hover {
          border-color: #00ff88;
          transform: translateY(-4px);
          box-shadow: 0 0 30px rgba(0,255,136,0.2);
        }
        
        .cyber-btn {
          background: rgba(0,255,136,0.1);
          border: 1px solid #00ff88;
          border-radius: 8px;
          padding: 12px 24px;
          color: #00ff88;
          font-family: 'Orbitron', monospace;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cyber-btn:hover {
          background: #00ff88;
          color: #000;
          transform: translateY(-2px);
        }
        
        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* BACK Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link href="/fitness-choice" className="inline-block space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">
          ← BACK
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {!selectedPlan ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
                <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
                  Select your commitment
                </span>
              </div>
              <h1 className="orbitron text-4xl md:text-6xl font-black text-white tracking-[0.1em] mb-3">
                CHOOSE YOUR PLAN
              </h1>
              <p className="space-mono text-[12px] text-white/40 tracking-wide">
                Longer commitment = bigger savings
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto mt-6" />
            </div>

            {/* Plans Grid - Full Width */}
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(plans).map(([plan, details]) => (
                <div 
                  key={plan} 
                  onClick={() => handleSelectPlan(plan)} 
                  className="cyber-card p-6 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{details.icon}</span>
                    <h2 className="orbitron text-xl font-bold text-[#00ff88] tracking-wide">
                      {plan}
                    </h2>
                  </div>
                  <p className="orbitron text-3xl font-bold text-white mb-1">{details.price}</p>
                  <p className="space-mono text-[11px] text-white/40 mb-3">{details.perMonth}</p>
                  {details.savings && (
                    <span className="inline-block px-3 py-1 text-[10px] rounded-full bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30 mb-4">
                      {details.savings}
                    </span>
                  )}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent my-4" />
                  <div className="space-y-2">
                    {details.features.map((feature: string, idx: number) => (
                      <p key={idx} className="space-mono text-[11px] text-white/50 flex items-start gap-2">
                        <span className="text-[#00ff88]">✓</span> {feature}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : !formCompleted ? (
          currentQuestion && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
                  <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
                    Question {step} of {questions.length}
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1 max-w-xs mx-auto">
                  <div className="bg-[#00ff88] h-1 rounded-full transition-all duration-300" style={{ width: `${((step) / questions.length) * 100}%` }} />
                </div>
              </div>
              <div className="cyber-card p-8">
                <h2 className="orbitron text-2xl md:text-3xl font-bold text-white tracking-wide text-center mb-8">
                  {currentQuestion.question}
                </h2>
                {currentQuestion.type === 'select' && currentQuestion.options ? (
                  <div className="space-y-3">
                    {currentQuestion.options.map((opt) => (
                      <button key={opt} onClick={() => handleAnswer(opt)} className="cyber-btn w-full">
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
                      className="w-full px-5 py-4 bg-white/5 border border-[#00ff88]/30 rounded-lg text-white space-mono text-[14px] focus:outline-none focus:border-[#00ff88] mb-4" 
                    />
                    <button onClick={() => handleAnswer(currentValue)} className="cyber-btn w-full">
                      NEXT →
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88] mx-auto mb-4" />
              <h2 className="orbitron text-3xl md:text-4xl font-bold text-white tracking-wide mb-4">THANK YOU</h2>
              <p className="space-mono text-[13px] text-white/40 leading-relaxed mb-8">Choose how you'd like me to contact you:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={sendToWhatsApp} className="cyber-btn">💬 WHATSAPP</button>
                <button onClick={sendEmail} className="cyber-btn">📧 EMAIL</button>
                <button onClick={sendInstagram} className="cyber-btn">📸 INSTAGRAM</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}