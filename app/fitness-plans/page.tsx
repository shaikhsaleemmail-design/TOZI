'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PlanDetails {
  price: string;
  perMonth: string;
  savings: string | null;
  features: string[];
  icon: string;
  tag: string;
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

interface Prices {
  currency: string;
  threeMonth: number;
  sixMonth: number;
  twelveMonth: number;
}

export default function FitnessPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({
    name: '', age: '', weight: '', height: '', goal: '', diet: '', experience: '', phone: ''
  });
  const [formCompleted, setFormCompleted] = useState<boolean>(false);
  const [prices, setPrices] = useState<Prices | null>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const country: string = data.country_code;
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
      '3 MONTHS': {
        price: `${prices.currency}${prices.threeMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.threeMonth / 3)}/mo`,
        savings: null,
        icon: '💪',
        tag: 'STARTER',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support'],
      },
      '6 MONTHS': {
        price: `${prices.currency}${prices.sixMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.sixMonth / 6)}/mo`,
        savings: `Save ${prices.currency}${prices.threeMonth * 2 - prices.sixMonth}`,
        icon: '🔥',
        tag: 'POPULAR',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support', 'Free diet chart'],
      },
      '12 MONTHS': {
        price: `${prices.currency}${prices.twelveMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.twelveMonth / 12)}/mo`,
        savings: `Save ${prices.currency}${prices.threeMonth * 4 - prices.twelveMonth}`,
        icon: '👑',
        tag: 'ELITE',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support', 'Free diet chart', 'Monthly consultation call'],
      },
    };
  };

  const questions: Question[] = [
    { key: 'name', question: 'What is your full name?', type: 'text', placeholder: 'Enter your full name' },
    { key: 'age', question: 'How old are you?', type: 'number', placeholder: 'Enter your age' },
    { key: 'weight', question: 'Current weight?', type: 'text', placeholder: 'e.g. 75kg' },
    { key: 'height', question: 'Your height?', type: 'text', placeholder: 'e.g. 175cm' },
    { key: 'goal', question: 'Main fitness goal?', type: 'select', options: ['Fat Loss', 'Muscle Gain', 'Strength', 'General Fitness'] },
    { key: 'diet', question: 'Diet preference?', type: 'select', options: ['Veg', 'Non-Veg', 'Eggetarian'] },
    { key: 'experience', question: 'Experience level?', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { key: 'phone', question: 'WhatsApp number?', type: 'tel', placeholder: 'Enter your phone number' },
  ];

  const handleSelectPlan = (plan: string): void => {
    setSelectedPlan(plan);
    setStep(1);
  };

  const handleAnswer = (value: string): void => {
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

  const sendToWhatsApp = (): void => {
    const plans = getPlans();
    const planData = selectedPlan && plans ? plans[selectedPlan] : null;
    const msg = `FITNESS ENQUIRY - ${selectedPlan} (${planData?.price})%0A%0A` +
      Object.entries(answers).map(([k, v]) => `${k}: ${v}`).join('%0A');
    window.open(`https://wa.me/918657282577?text=${msg}`, '_blank');
  };

  const sendEmail = (): void => {
    window.location.href = `mailto:shaikhsaleem.mail@gmail.com?subject=Fitness Enquiry - ${selectedPlan}&body=${Object.entries(answers).map(([k, v]) => `${k}: ${v}`).join('%0A')}`;
  };

  const sendInstagram = (): void => {
    window.open('https://instagram.com/saatozi', '_blank');
  };

  const plans = getPlans();
  const currentQuestion = step > 0 ? questions[step - 1] : null;
  const currentValue = currentQuestion ? answers[currentQuestion.key] : '';

  if (!prices || !plans) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div
          className="status-dot"
          style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', color: '#00ff88', letterSpacing: '3px' }}
        >
          LOADING...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');
        :root { --neon: #00ff88; }

        .orbitron { font-family: 'Orbitron', monospace; }
        .space-mono { font-family: 'Space Mono', monospace; }

        .grid-bg {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(0,255,136,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.07) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none; z-index: 0;
        }
        .scanlines {
          position: fixed; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);
          pointer-events: none; z-index: 1;
        }

        .status-dot { animation: blink 1.2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .fade-up { animation: fadeUp 0.6s ease both; }
        .fade-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.2s ease both; }
        .fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }

        .expand-line {
          animation: expandLine 0.6s 0.3s ease both;
          transform: scaleX(0); transform-origin: center;
        }
        @keyframes expandLine { to { transform: scaleX(1); } }

        .plan-card {
          border: 1px solid rgba(0,255,136,0.2);
          background: rgba(0,255,136,0.02);
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.25s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .plan-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,255,136,0.06) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.25s;
        }
        .plan-card:hover {
          border-color: #00ff88;
          transform: translateY(-6px);
          box-shadow: 0 0 40px rgba(0,255,136,0.2);
        }
        .plan-card:hover::before { opacity: 1; }

        .cyber-btn {
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .cyber-btn:hover {
          background: #00ff88 !important;
          color: #000 !important;
          transform: translateY(-2px);
        }

        .input-field {
          width: 100%;
          padding: 14px 16px;
          background: rgba(0,255,136,0.04);
          border: 1px solid rgba(0,255,136,0.25);
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 1px;
          outline: none;
          transition: border-color 0.2s;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
        }
        .input-field:focus { border-color: #00ff88; }
        .input-field::placeholder { color: rgba(255,255,255,0.2); }

        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: fixed; width: 40px; height: 40px;
          border-color: #00ff88; border-style: solid; opacity: 0.4; z-index: 50;
        }
        .corner-tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }

        .progress-bar {
          height: 2px;
          background: rgba(0,255,136,0.15);
          position: relative;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: #00ff88;
          transition: width 0.4s ease;
          box-shadow: 0 0 8px #00ff88;
        }
      `}</style>

      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="corner-tl" />
      <div className="corner-tr" />
      <div className="corner-bl" />
      <div className="corner-br" />

      <div className="fixed bottom-6 left-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        FITNESS · PLANS_03
      </div>
      <div className="fixed bottom-6 right-6 z-20 space-mono text-[8px] text-[#00ff88] opacity-30 tracking-widest">
        SAATOZI.COM
      </div>

      <Link
        href="/fitness-choice"
        className="fixed top-8 left-8 z-50 space-mono text-[10px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition"
      >
        ← BACK
      </Link>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">

        {/* PLAN SELECTION */}
        {selectedPlan === '' && (
          <>
            <div className="text-center mb-14">
              <div className="fade-up flex items-center justify-center gap-2 mb-4">
                <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
                <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
                  Fitness · Choose Your Plan
                </span>
              </div>
              <h1 className="fade-up-1 orbitron text-[clamp(28px,6vw,52px)] font-black text-white tracking-[0.15em] leading-tight mb-4">
                SELECT YOUR<br />PROGRAM
              </h1>
              <p className="fade-up-2 space-mono text-[10px] text-white/30 tracking-[2px] uppercase mb-6">
                Longer commitment = bigger results
              </p>
              <div className="expand-line w-48 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {Object.entries(plans).map(([planName, details], i) => (
                <div
                  key={planName}
                  className="plan-card p-6"
                  onClick={() => handleSelectPlan(planName)}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="space-mono text-[9px] text-[#00ff88] tracking-[3px]">{details.tag}</span>
                    <span className="text-2xl">{details.icon}</span>
                  </div>

                  <h2 className="orbitron text-lg font-black text-white tracking-wide mb-1">{planName}</h2>
                  <p className="orbitron text-3xl font-black text-[#00ff88] mb-1">{details.price}</p>
                  <p className="space-mono text-[9px] text-white/30 tracking-[2px] uppercase mb-3">{details.perMonth}</p>

                  {details.savings && (
                    <div className="inline-block px-3 py-1 mb-4 space-mono text-[8px] tracking-[2px] text-[#00ff88] border border-[#00ff88] bg-[rgba(0,255,136,0.08)]"
                      style={{ clipPath: 'polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)' }}>
                      {details.savings}
                    </div>
                  )}

                  <div className="w-full h-px bg-[rgba(0,255,136,0.15)] my-4" />

                  <div className="space-y-2">
                    {details.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#00ff88] text-[10px] mt-0.5">▸</span>
                        <span className="space-mono text-[9px] text-white/50 tracking-wide leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 w-full py-3 text-center space-mono text-[9px] text-[#00ff88] tracking-[3px] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.04)]"
                    style={{ clipPath: 'polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)' }}>
                    SELECT →
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* FORM QUESTIONS */}
        {selectedPlan !== '' && !formCompleted && currentQuestion && (
          <div className="w-full max-w-lg mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
              <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
                {selectedPlan} · Question {step} of {questions.length}
              </span>
            </div>

            <div className="progress-bar w-full mb-10 rounded-none">
              <div
                className="progress-fill"
                style={{ width: `${((step - 1) / questions.length) * 100}%` }}
              />
            </div>

            <h2 className="orbitron text-[clamp(18px,4vw,28px)] font-black text-white tracking-wide mb-10">
              {currentQuestion.question}
            </h2>

            {currentQuestion.type === 'select' && currentQuestion.options ? (
              <div className="space-y-3">
                {currentQuestion.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="cyber-btn w-full py-4 space-mono text-[10px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.04)] tracking-[3px] uppercase"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type={currentQuestion.type}
                  placeholder={currentQuestion.placeholder}
                  value={currentValue}
                  onChange={(e) => setAnswers({ ...answers, [currentQuestion.key]: e.target.value })}
                  className="input-field"
                />
                <button
                  onClick={() => handleAnswer(currentValue)}
                  className="cyber-btn w-full py-4 space-mono text-[10px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.04)] tracking-[3px] uppercase"
                >
                  NEXT →
                </button>
              </div>
            )}
          </div>
        )}

        {/* COMPLETED - CONTACT OPTIONS */}
        {formCompleted && (
          <div className="w-full max-w-lg mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="status-dot w-2 h-2 rounded-full bg-[#00ff88]" />
              <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
                Mission Complete
              </span>
            </div>

            <h2 className="orbitron text-[clamp(24px,5vw,40px)] font-black text-white tracking-wide mb-4">
              YOU&apos;RE IN
            </h2>
            <p className="space-mono text-[10px] text-white/40 tracking-[2px] mb-10 uppercase">
              Choose how to connect with TOZI
            </p>

            <div className="space-y-3">
              <button
                onClick={sendToWhatsApp}
                className="cyber-btn w-full py-4 space-mono text-[10px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.04)] tracking-[3px] uppercase"
              >
                💬 WHATSAPP
              </button>
              <button
                onClick={sendEmail}
                className="cyber-btn w-full py-4 space-mono text-[10px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.04)] tracking-[3px] uppercase"
              >
                📧 EMAIL
              </button>
              <button
                onClick={sendInstagram}
                className="cyber-btn w-full py-4 space-mono text-[10px] text-[#00ff88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.04)] tracking-[3px] uppercase"
              >
                📸 INSTAGRAM DM
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}