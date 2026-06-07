'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PlanDetails {
  price: string;
  perMonth: string;
  savings: string | null;
  features: string[];
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
        features: ['✓ Personalized workout plan', '✓ Customized diet plan', '✓ Weekly progress tracking', '✓ 1-on-1 virtual coaching', '✓ WhatsApp support']
      },
      '6 Months': {
        price: `${prices.currency}${prices.sixMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.sixMonth / 6)}/month`,
        savings: prices.currency === '₹' ? 'Save ₹2,000' : `Save ${prices.currency}${prices.threeMonth * 2 - prices.sixMonth}`,
        features: ['✓ Personalized workout plan', '✓ Customized diet plan', '✓ Weekly progress tracking', '✓ 1-on-1 virtual coaching', '✓ WhatsApp support', '✓ Free diet chart']
      },
      '12 Months': {
        price: `${prices.currency}${prices.twelveMonth}`,
        perMonth: `${prices.currency}${Math.round(prices.twelveMonth / 12)}/month`,
        savings: prices.currency === '₹' ? 'Save ₹6,000' : `Save ${prices.currency}${prices.threeMonth * 4 - prices.twelveMonth}`,
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
    <div className="min-h-screen bg-[#050505]">
      <div className="grain-overlay" />
      <div className="vignette" />
      
      <Link href="/fitness-choice" className="fixed top-8 left-8 text-white/60 text-sm hover:text-gold transition z-50 tracking-wide">
        ← BACK
      </Link>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {!selectedPlan ? (
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-4">
              <div className="text-gold text-[1px] opacity-50">◇</div>
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-white text-center tracking-[0.2em] mb-2">CHOOSE YOUR PLAN</h1>
            <p className="text-center text-gray-500 text-xs tracking-wide mb-12">Longer commitment = bigger savings</p>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(plans).map(([plan, details]) => (
                <div 
                  key={plan} 
                  onClick={() => handleSelectPlan(plan)} 
                  className="premium-pill flex flex-col items-center w-full max-w-sm mx-auto py-6 px-4 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <h2 className="text-xl font-light text-gold text-center tracking-wide mb-2 uppercase">{plan}</h2>
                  <p className="text-2xl font-light text-white text-center">{details.price}</p>
                  <p className="text-gray-400 text-xs text-center mb-3 uppercase">{details.perMonth}</p>
                  {details.savings && <p className="text-gold/70 text-[10px] text-center mb-3 uppercase">{details.savings}</p>}
                  <div className="border-t border-gold/20 my-3 w-full"></div>
                  <div className="text-left text-gray-300 text-[11px] space-y-1 w-full">
                    {details.features.map((feature: string, idx: number) => (
                      <p key={idx} className="uppercase">{feature}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : !formCompleted ? (
          currentQuestion && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-gold text-[1px] opacity-50 mb-8">◇</div>
              <h2 className="text-xl font-light text-white tracking-wide mb-4 uppercase">{selectedPlan} Plan - {plans[selectedPlan]?.price}</h2>
              <p className="text-gray-500 text-sm mb-8">Question {step} of {questions.length}</p>
              <h3 className="text-2xl font-light text-gold mb-8">{currentQuestion.question}</h3>
              {currentQuestion.type === 'select' && currentQuestion.options ? (
                <div className="space-y-3">
                  {currentQuestion.options.map((opt) => (
                    <button key={opt} onClick={() => handleAnswer(opt)} className="w-full py-3 premium-pill">
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
                    className="w-full p-4 bg-transparent border border-gold/30 rounded-xl text-white focus:outline-none focus:border-gold" 
                  />
                  <button onClick={() => handleAnswer(currentValue)} className="mt-4 premium-pill">
                    Next →
                  </button>
                </div>
              )}
            </div>
          )
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-gold text-[1px] opacity-50 mb-8">◇</div>
            <h2 className="text-2xl font-light text-white mb-4 uppercase">Thank You</h2>
            <p className="text-gray-300 mb-8">Choose how you'd like me to contact you:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={sendToWhatsApp} className="premium-pill">💬 WhatsApp</button>
              <button onClick={sendEmail} className="premium-pill">📧 Email</button>
              <button onClick={sendInstagram} className="premium-pill">📸 Instagram DM</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}