'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PlanDetails {
  price: string;
  perMonth: string;
  savings: string | null;
  features: string[];
  color: string;
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
  const [prices, setPrices] = useState<{ currency: string; threeMonth: number; sixMonth: number; twelveMonth: number } | null>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const country = data.country_code;
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
        color: 'from-emerald-500 to-teal-500',
        icon: '💪',
        features: ['✓ Personalized workout plan', '✓ Customized diet plan', '✓ Weekly progress tracking', '✓ 1-on-1 virtual coaching', '✓ WhatsApp support']
      },
      '6 Months': {
        price: `${prices.currency}${prices.sixMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.sixMonth / 6)}/month`,
        savings: prices.currency === '₹' ? 'Save ₹2,000' : `Save ${prices.currency}${prices.threeMonth * 2 - prices.sixMonth}`,
        color: 'from-blue-500 to-indigo-500',
        icon: '🔥',
        features: ['✓ Personalized workout plan', '✓ Customized diet plan', '✓ Weekly progress tracking', '✓ 1-on-1 virtual coaching', '✓ WhatsApp support', '✓ Free diet chart']
      },
      '12 Months': {
        price: `${prices.currency}${prices.twelveMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.twelveMonth / 12)}/month`,
        savings: prices.currency === '₹' ? 'Save ₹6,000' : `Save ${prices.currency}${prices.threeMonth * 4 - prices.twelveMonth}`,
        color: 'from-purple-500 to-pink-500',
        icon: '👑',
        features: ['✓ Personalized workout plan', '✓ Customized diet plan', '✓ Weekly progress tracking', '✓ 1-on-1 virtual coaching', '✓ WhatsApp support', '✓ Free diet chart', '✓ Monthly consultation call']
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
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-gold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center">
      <div className="grain-overlay" />
      <div className="vignette" />

      {/* BACK Button - Fixed top-left, never moves */}
      <Link
        href="/fitness-choice"
        className="fixed top-8 left-8 text-white/60 text-sm hover:text-gold transition z-50 tracking-wide"
      >
        ← BACK
      </Link>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center justify-center">

        {!selectedPlan ? (
          <>
            {/* Header */}
            <div className="text-center w-full mb-10">
              <div className="text-gold text-[1px] opacity-50 mb-3 animate-pulse">◇</div>
              <h1 className="text-2xl md:text-4xl font-light gold-text tracking-[0.2em] mb-2">
                CHOOSE YOUR PLAN
              </h1>
              <p className="text-white/40 text-xs tracking-wide uppercase">
                Longer commitment = bigger savings
              </p>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-5"></div>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {Object.entries(plans).map(([plan, details]) => (
                <div
                  key={plan}
                  onClick={() => handleSelectPlan(plan)}
                  className="group w-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:scale-105 transition-all duration-500 cursor-pointer hover:border-gold/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{details.icon}</span>
                    <h2 className={`text-lg font-medium bg-gradient-to-r ${details.color} bg-clip-text text-transparent`}>
                      {plan}
                    </h2>
                  </div>
                  <p className="text-2xl font-light text-white mb-0.5">{details.price}</p>
                  <p className="text-gray-400 text-[10px] mb-2 uppercase">{details.perMonth}</p>
                  {details.savings && (
                    <span className="inline-block px-2 py-0.5 text-[9px] rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">
                      {details.savings}
                    </span>
                  )}
                  <div className="w-full h-px bg-white/10 my-3"></div>
                  <div className="text-left text-gray-300 text-[10px] space-y-1.5">
                    {details.features.map((feature: string, idx: number) => (
                      <p key={idx} className="flex items-start gap-1.5">
                        <span className="text-green-400 text-[10px]">✓</span> {feature}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>

        ) : !formCompleted ? (
          currentQuestion && (
            <div className="w-full max-w-2xl mx-auto text-center">
              <div className="text-gold text-[1px] opacity-50 mb-6 animate-pulse">◇</div>
              <h2 className="text-lg font-light text-white tracking-wide mb-3">
                {selectedPlan} Plan - {plans[selectedPlan]?.price}
              </h2>
              <p className="text-white/40 text-xs mb-6">Question {step} of {questions.length}</p>
              <h3 className="text-xl font-light text-gold mb-6">{currentQuestion.question}</h3>
              {currentQuestion.type === 'select' && currentQuestion.options ? (
                <div className="space-y-2">
                  {currentQuestion.options.map((opt) => (
                    <button key={opt} onClick={() => handleAnswer(opt)} className="w-full py-2 premium-pill text-sm">
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
                    className="w-full p-3 bg-white/5 border border-gold/30 rounded-xl text-white focus:outline-none focus:border-gold text-sm"
                  />
                  <button onClick={() => handleAnswer(currentValue)} className="mt-3 premium-pill text-sm">
                    Next →
                  </button>
                </div>
              )}
            </div>
          )

        ) : (
          <div className="w-full max-w-2xl mx-auto text-center">
            <div className="text-gold text-[1px] opacity-50 mb-6 animate-pulse">◇</div>
            <h2 className="text-xl font-light text-white mb-3">Thank You</h2>
            <p className="text-gray-300 text-sm mb-6">Choose how you'd like me to contact you:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={sendToWhatsApp} className="px-5 py-2 text-sm rounded-full bg-green-600/20 border border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white transition">
                💬 WhatsApp
              </button>
              <button onClick={sendEmail} className="px-5 py-2 text-sm rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white transition">
                📧 Email
              </button>
              <button onClick={sendInstagram} className="px-5 py-2 text-sm rounded-full bg-pink-600/20 border border-pink-500/50 text-pink-400 hover:bg-pink-600 hover:text-white transition">
                📸 Instagram DM
              </button>
            </div>
          </div>
        )}

        {/* Bottom Divider */}
        <div className="text-center w-full mt-10">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto"></div>
          <div className="text-gold/20 text-[8px] mt-3">◇</div>
        </div>

      </div>
    </div>
  );
}