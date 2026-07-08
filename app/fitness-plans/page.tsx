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

  const bg = { minHeight: '100vh', background: '#f7f7f8', fontFamily: "'Poppins', sans-serif" };
  const backLink = { position: 'fixed' as const, top: '32px', left: '32px', zIndex: 50, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#999', textDecoration: 'none' };
  const cardStyle = { border: '1px solid rgba(0,0,0,0.06)', background: '#ffffff', borderRadius: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' };

  if (!prices || !plans) {
    return (
      <div style={{ ...bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#FF6B4A', fontFamily: 'monospace' }}>Loading...</div>
      </div>
    );
  }

  if (!selectedPlan) {
    return (
      <div style={bg}>
        <Link href="/fitness-choice" style={backLink}>← Back</Link>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
          <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h1 style={{ fontSize: 'clamp(32px,6vw,52px)', fontWeight: 900, color: '#111', letterSpacing: '-1px' }}>Choose your plan</h1>
              <p style={{ fontSize: '13px', color: '#888', marginTop: '8px' }}>Longer commitment, bigger savings</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {Object.entries(plans).map(([plan, details]) => (
                <div
                  key={plan}
                  onClick={() => handleSelectPlan(plan)}
                  style={{ ...cardStyle, padding: '24px', cursor: 'pointer', transition: 'all 0.25s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,107,74,0.18)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{details.icon}</span>
                    <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#FF6B4A' }}>{plan}</h2>
                  </div>
                  <p style={{ fontSize: '28px', fontWeight: 800, color: '#111', marginBottom: '2px' }}>{details.price}</p>
                  <p style={{ fontSize: '12px', color: '#999', marginBottom: '12px' }}>{details.per}</p>
                  {details.savings && (
                    <span style={{ display: 'inline-block', padding: '4px 10px', fontSize: '11px', borderRadius: '20px', background: '#FFEDE7', color: '#D8531E', marginBottom: '12px' }}>{details.savings}</span>
                  )}
                  <div style={{ width: '100%', height: '1px', background: '#eee', margin: '12px 0' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {details.features.map((feature, idx) => (
                      <p key={idx} style={{ fontSize: '12px', color: '#666', display: 'flex', gap: '6px' }}>
                        <span style={{ color: '#FF6B4A' }}>✓</span> {feature}
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

  if (selectedPlan && !formCompleted) {
    const currentQ = questions[step - 1];
    const currentValue = answers[currentQ?.key as keyof typeof answers] || '';

    return (
      <div style={{ ...bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link href="/fitness-choice" style={backLink}>← Back</Link>
        <div style={{ width: '100%', maxWidth: '440px', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', color: '#FF6B4A', letterSpacing: '2px' }}>{step} / {questions.length}</span>
            <div style={{ width: '100%', maxWidth: '180px', margin: '10px auto 0', background: '#eee', borderRadius: '10px', height: '4px' }}>
              <div style={{ background: '#FF6B4A', height: '4px', borderRadius: '10px', width: `${(step / questions.length) * 100}%`, transition: 'width 0.3s ease' }} />
            </div>
          </div>

          <div style={{ ...cardStyle, padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '24px' }}>{currentQ.question}</h2>

            {currentQ.type === 'select' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentQ.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    style={{ padding: '14px', background: '#FFEDE7', border: '1px solid #FF6B4A', borderRadius: '12px', color: '#D8531E', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
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
                  style={{ width: '100%', padding: '14px', background: '#f7f7f8', border: '1px solid #ddd', borderRadius: '12px', fontSize: '14px', marginBottom: '16px', outline: 'none' }}
                  autoFocus
                />
                <button
                  onClick={() => handleAnswer(currentValue)}
                  style={{ width: '100%', padding: '14px', background: '#FF6B4A', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Link href="/fitness-choice" style={backLink}>← Back</Link>
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <h1 style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 800, color: '#111', marginBottom: '16px' }}>Thank you</h1>
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '28px' }}>Choose how you'd like me to contact you:</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={sendToWhatsApp} style={{ padding: '14px 24px', background: '#FFEDE7', border: '1px solid #FF6B4A', borderRadius: '12px', color: '#D8531E', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>💬 WhatsApp</button>
          <button onClick={sendEmail} style={{ padding: '14px 24px', background: '#FFEDE7', border: '1px solid #FF6B4A', borderRadius: '12px', color: '#D8531E', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>📧 Email</button>
          <button onClick={sendInstagram} style={{ padding: '14px 24px', background: '#FFEDE7', border: '1px solid #FF6B4A', borderRadius: '12px', color: '#D8531E', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>📸 Instagram</button>
        </div>
      </div>
    </div>
  );
}