'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PlanDetails {
  price: string;
  per: string;
  savings?: string;
  icon: string;
  features: string[];
}

export default function FitnessPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    name: '', age: '', weight: '', height: '', goal: '', diet: '', experience: '', phone: ''
  });
  const [formCompleted, setFormCompleted] = useState(false);
  const [prices, setPrices] = useState<any>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const country = data.country_code;
        if (country === 'IN') setPrices({ currency: '₹', three: 6000, six: 10000, twelve: 18000 });
        else if (country === 'US' || country === 'CA') setPrices({ currency: '$', three: 99, six: 169, twelve: 299 });
        else if (country === 'GB') setPrices({ currency: '£', three: 85, six: 145, twelve: 255 });
        else setPrices({ currency: '$', three: 89, six: 149, twelve: 259 });
      })
      .catch(() => setPrices({ currency: '₹', three: 6000, six: 10000, twelve: 18000 }));
  }, []);

  const getPlans = (): Record<string, PlanDetails> | null => {
    if (!prices) return null;
    return {
      '3 Months': {
        price: `${prices.currency}${prices.three}`,
        per: `${prices.currency}${Math.round(prices.three / 3)}/month`,
        icon: '💪',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support']
      },
      '6 Months': {
        price: `${prices.currency}${prices.six}`,
        per: `${prices.currency}${Math.round(prices.six / 6)}/month`,
        savings: prices.currency === '₹' ? 'Save ₹2,000' : `Save ${prices.currency}${prices.three * 2 - prices.six}`,
        icon: '🔥',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support', 'Free diet chart']
      },
      '12 Months': {
        price: `${prices.currency}${prices.twelve}`,
        per: `${prices.currency}${Math.round(prices.twelve / 12)}/month`,
        savings: prices.currency === '₹' ? 'Save ₹6,000' : `Save ${prices.currency}${prices.three * 4 - prices.twelve}`,
        icon: '👑',
        features: ['Personalized workout plan', 'Customized diet plan', 'Weekly progress tracking', '1-on-1 virtual coaching', 'WhatsApp support', 'Free diet chart', 'Monthly consultation call']
      }
    };
  };

  const plans = getPlans();

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

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setStep(1);
  };

  const handleAnswer = (value: string) => {
    const currentQ = questions[step - 1];
    if (currentQ) {
      setAnswers({ ...answers, [currentQ.key]: value });
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

  if (!prices || !plans) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#00ff88] font-mono">Loading...</div>
      </div>
    );
  }

  // Plan Selection Screen
  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-black">
        <Link href="/fitness-choice" className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">
          ← BACK
        </Link>
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="orbitron text-4xl md:text-6xl font-black text-white tracking-[0.15em]" style={{ fontFamily: "'Orbitron', monospace" }}>
                CHOOSE YOUR PLAN
              </h1>
              <p className="space-mono text-[11px] text-white/40 mt-2" style={{ fontFamily: "'Space Mono', monospace" }}>
                Longer commitment = bigger savings
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto mt-5" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(plans).map(([plan, details]) => (
                <div
                  key={plan}
                  onClick={() => handleSelectPlan(plan)}
                  className="border border-[#00ff88]/20 bg-[#00ff88]/5 rounded-2xl p-6 cursor-pointer hover:border-[#00ff88] hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{details.icon}</span>
                    <h2 className="orbitron text-xl font-bold text-[#00ff88]">{plan}</h2>
                  </div>
                  <p className="orbitron text-3xl font-bold text-white mb-1">{details.price}</p>
                  <p className="space-mono text-[10px] text-white/40 mb-3">{details.per}</p>
                  {details.savings && (
                    <span className="inline-block px-2 py-1 text-[9px] rounded-full bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30 mb-3">
                      {details.savings}
                    </span>
                  )}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent my-3" />
                  <div className="space-y-1.5">
                    {details.features.map((feature, idx) => (
                      <p key={idx} className="space-mono text-[10px] text-white/40 flex items-start gap-1.5">
                        <span className="text-[#00ff88]">✓</span> {feature}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Form Questions Screen
  if (selectedPlan && !formCompleted) {
    const currentQ = questions[step - 1];
    const currentValue = answers[currentQ?.key as keyof typeof answers] || '';

    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Link href="/fitness-choice" className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">
          ← BACK
        </Link>
        <div className="w-full max-w-md mx-auto px-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="space-mono text-[10px] text-[#00ff88] tracking-[3px] uppercase">
                {step} / {questions.length}
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-0.5 max-w-[180px] mx-auto">
              <div className="bg-[#00ff88] h-0.5 rounded-full transition-all duration-300" style={{ width: `${((step) / questions.length) * 100}%` }} />
            </div>
          </div>

          <div className="border border-[#00ff88]/20 bg-[#00ff88]/5 rounded-2xl p-6">
            <h2 className="orbitron text-xl md:text-2xl font-bold text-white tracking-wide text-center mb-6">
              {currentQ.question}
            </h2>

            {currentQ.type === 'select' ? (
              <div className="space-y-2.5">
                {currentQ.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="w-full py-3 bg-[#00ff88]/10 border border-[#00ff88] rounded-xl text-[#00ff88] text-sm font-bold tracking-wider hover:bg-[#00ff88] hover:text-black transition-all"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <input
                  type={currentQ.type}
                  placeholder={currentQ.placeholder}
                  value={currentValue}
                  onChange={(e) => setAnswers({ ...answers, [currentQ.key]: e.target.value })}
                  className="w-full p-4 bg-[#00ff88]/5 border border-[#00ff88]/30 rounded-xl text-white text-sm outline-none focus:border-[#00ff88] mb-4"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                  autoFocus
                />
                <button
                  onClick={() => handleAnswer(currentValue)}
                  className="w-full py-3 bg-[#00ff88]/10 border border-[#00ff88] rounded-xl text-[#00ff88] text-sm font-bold tracking-wider hover:bg-[#00ff88] hover:text-black transition-all"
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

  // Thank You Screen
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Link href="/fitness-choice" className="fixed top-8 left-8 z-50 space-mono text-[11px] text-white/40 hover:text-[#00ff88] tracking-[3px] uppercase transition">
        ← BACK
      </Link>
      <div className="text-center px-6">
        <div className="w-2 h-2 rounded-full bg-[#00ff88] mx-auto mb-4 animate-pulse" />
        <h1 className="orbitron text-3xl md:text-4xl font-bold text-white tracking-wide mb-4" style={{ fontFamily: "'Orbitron', monospace" }}>
          THANK YOU
        </h1>
        <p className="space-mono text-[13px] text-white/40 leading-relaxed mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>
          Choose how you'd like me to contact you:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={sendToWhatsApp} className="px-6 py-3 bg-[#00ff88]/10 border border-[#00ff88] rounded-xl text-[#00ff88] text-sm font-bold hover:bg-[#00ff88] hover:text-black transition-all">
            💬 WHATSAPP
          </button>
          <button onClick={sendEmail} className="px-6 py-3 bg-[#00ff88]/10 border border-[#00ff88] rounded-xl text-[#00ff88] text-sm font-bold hover:bg-[#00ff88] hover:text-black transition-all">
            📧 EMAIL
          </button>
          <button onClick={sendInstagram} className="px-6 py-3 bg-[#00ff88]/10 border border-[#00ff88] rounded-xl text-[#00ff88] text-sm font-bold hover:bg-[#00ff88] hover:text-black transition-all">
            📸 INSTAGRAM
          </button>
        </div>
      </div>
    </div>
  );
}