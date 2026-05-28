'use client';
import { useState } from 'react';
import Link from 'next/link';

interface PlanDetails {
  price: string;
  duration: string;
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
    name: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    diet: '',
    experience: '',
    phone: ''
  });
  const [formCompleted, setFormCompleted] = useState(false);

  const plans: Record<string, PlanDetails> = {
    '3 Months': { 
      price: '₹6,000', 
      duration: '3 months',
      perMonth: '₹2,000/month',
      savings: null,
      features: [
        '✓ Personalized workout plan',
        '✓ Customized diet plan',
        '✓ Weekly progress tracking',
        '✓ 1-on-1 virtual coaching',
        '✓ WhatsApp support'
      ]
    },
    '6 Months': { 
      price: '₹10,000', 
      duration: '6 months',
      perMonth: '₹1,667/month',
      savings: 'Save ₹2,000',
      features: [
        '✓ Personalized workout plan',
        '✓ Customized diet plan',
        '✓ Weekly progress tracking',
        '✓ 1-on-1 virtual coaching',
        '✓ WhatsApp support',
        '✓ Free diet chart'
      ]
    },
    '12 Months': { 
      price: '₹18,000', 
      duration: '12 months',
      perMonth: '₹1,500/month',
      savings: 'Save ₹6,000',
      features: [
        '✓ Personalized workout plan',
        '✓ Customized diet plan',
        '✓ Weekly progress tracking',
        '✓ 1-on-1 virtual coaching',
        '✓ WhatsApp support',
        '✓ Free diet chart',
        '✓ Monthly consultation call'
      ]
    }
  };

  const questions: Question[] = [
    { key: 'name', question: 'What is your full name?', type: 'text', placeholder: 'Enter your full name' },
    { key: 'age', question: 'How old are you?', type: 'number', placeholder: 'Enter your age' },
    { key: 'weight', question: 'What is your current weight?', type: 'text', placeholder: 'e.g., 75kg' },
    { key: 'height', question: 'What is your height?', type: 'text', placeholder: 'e.g., 175cm' },
    { key: 'goal', question: 'What is your main fitness goal?', type: 'select', options: ['Fat Loss', 'Muscle Gain', 'Strength', 'General Fitness'] },
    { key: 'diet', question: 'What is your diet type?', type: 'select', options: ['Veg', 'Non-Veg', 'Eggetarian'] },
    { key: 'experience', question: 'How would you rate your fitness experience?', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { key: 'phone', question: 'What is your WhatsApp number?', type: 'tel', placeholder: 'Enter your phone number' }
  ];

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setStep(1);
  };

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[step - 1];
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
    const selectedPlanData = selectedPlan ? plans[selectedPlan] : null;
    const message = `FITNESS ENQUIRY - ${selectedPlan} PLAN (${selectedPlanData?.price})%0A%0A` +
      `Name: ${answers.name}%0A` +
      `Age: ${answers.age}%0A` +
      `Weight: ${answers.weight}%0A` +
      `Height: ${answers.height}%0A` +
      `Goal: ${answers.goal}%0A` +
      `Diet: ${answers.diet}%0A` +
      `Experience: ${answers.experience}%0A` +
      `Phone: ${answers.phone}`;
    window.open(`https://wa.me/918657282577?text=${message}`, '_blank');
  };

  const currentQuestion = step > 0 ? questions[step - 1] : null;
  const currentValue = currentQuestion ? answers[currentQuestion.key] : '';

  return (
    <div className="min-h-screen bg-black">
      <Link href="/fitness-choice" className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {!selectedPlan ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Choose Your Plan</h1>
            <p className="text-center text-gray-400 mb-12">Longer commitment = bigger savings</p>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(plans).map(([plan, details]) => (
                <div key={plan} 
                  className="bg-gray-900 rounded-2xl p-6 hover:scale-105 transition cursor-pointer border border-gray-700"
                  onClick={() => handleSelectPlan(plan)}>
                  <h2 className="text-2xl font-bold text-white mb-2">{plan}</h2>
                  <p className="text-3xl font-bold text-green-500 mb-1">{details.price}</p>
                  <p className="text-gray-400 text-sm mb-2">{details.perMonth}</p>
                  {details.savings && (
                    <p className="text-yellow-500 text-sm font-semibold mb-4">{details.savings}</p>
                  )}
                  <div className="border-t border-gray-700 my-4"></div>
                  <div className="text-left text-gray-300 text-sm space-y-2">
                    {details.features.map((feature, i) => (
                      <p key={i}>{feature}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : !formCompleted ? (
          currentQuestion && (
            <>
              <h2 className="text-3xl font-bold text-white text-center mb-8">{selectedPlan} Plan - {plans[selectedPlan]?.price}</h2>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-gray-400 mb-8 text-lg">Question {step} of {questions.length}</p>
                <h3 className="text-2xl font-bold text-white mb-6">{currentQuestion.question}</h3>
                {currentQuestion.type === 'select' && currentQuestion.options ? (
                  <div className="space-y-3">
                    {currentQuestion.options.map((opt) => (
                      <button key={opt} onClick={() => handleAnswer(opt)}
                        className="w-full py-3 bg-gray-800 text-white rounded-xl hover:bg-white hover:text-black transition">
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    <input type={currentQuestion.type} placeholder={currentQuestion.placeholder} value={currentValue}
                      onChange={(e) => setAnswers({ ...answers, [currentQuestion.key]: e.target.value })}
                      className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-white" />
                    <button onClick={() => handleAnswer(currentValue)}
                      className="mt-4 px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
                      Next →
                    </button>
                  </div>
                )}
              </div>
            </>
          )
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-8">I'll review your answers and get back to you on WhatsApp within 24 hours.</p>
            <button onClick={sendToWhatsApp}
              className="px-8 py-4 bg-green-600 text-white rounded-full text-xl font-medium hover:scale-105 transition">
              Continue on WhatsApp →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}