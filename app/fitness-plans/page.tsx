'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FitnessPlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formCompleted, setFormCompleted] = useState(false);

  const plans = {
    '3 Months': { price: '₹5,000', duration: '3 months' },
    '6 Months': { price: '₹12,000', duration: '6 months' },
    '12 Months': { price: '₹18,000', duration: '12 months' }
  };

  const questions = [
    { key: 'name', question: 'What is your full name?', type: 'text', placeholder: 'Enter your full name' },
    { key: 'age', question: 'How old are you?', type: 'number', placeholder: 'Enter your age' },
    { key: 'weight', question: 'What is your current weight?', type: 'text', placeholder: 'e.g., 75kg' },
    { key: 'height', question: 'What is your height?', type: 'text', placeholder: 'e.g., 175cm' },
    { key: 'goal', question: 'What is your main fitness goal?', type: 'select', options: ['Fat Loss', 'Muscle Gain', 'Strength', 'General Fitness'] },
    { key: 'diet', question: 'What is your diet type?', type: 'select', options: ['Veg', 'Non-Veg', 'Eggetarian'] },
    { key: 'experience', question: 'How would you rate your fitness experience?', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { key: 'phone', question: 'What is your WhatsApp number?', type: 'tel', placeholder: 'Enter your phone number' }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setStep(1);
  };

  const handleAnswer = (value) => {
    const currentQuestion = questions[step - 1];
    setAnswers({ ...answers, [currentQuestion.key]: value });

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setFormCompleted(true);
    }
  };

  const sendToWhatsApp = () => {
    const message = `FITNESS ENQUIRY - ${selectedPlan} PLAN%0A%0A` +
      Object.entries(answers).map(([key, val]) => `${key}: ${val}`).join('%0A');
    window.open(`https://wa.me/918657282577?text=${message}`, '_blank');
  };

  const currentQuestion = questions[step - 1];
  const currentValue = answers[currentQuestion?.key] || '';

  return (
    <div className="min-h-screen bg-black">
      <Link href="/fitness-choice" className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {!selectedPlan ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Choose Your Plan</h1>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(plans).map(([plan, details]) => (
                <div key={plan} className="bg-gray-900 rounded-2xl p-8 text-center hover:scale-105 transition cursor-pointer border border-gray-700"
                  onClick={() => handleSelectPlan(plan)}>
                  <h2 className="text-2xl font-bold text-white mb-3">{plan}</h2>
                  <p className="text-3xl font-bold text-green-500 mb-4">{details.price}</p>
                  <p className="text-gray-400">{details.duration} program</p>
                  <div className="mt-6 text-left text-gray-300 text-sm space-y-2">
                    <p>✓ Personalized workout plan</p>
                    <p>✓ Customized diet plan</p>
                    <p>✓ Weekly progress tracking</p>
                    <p>✓ 1-on-1 virtual coaching</p>
                    <p>✓ WhatsApp support</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : !formCompleted ? (
          <>
            <h2 className="text-3xl font-bold text-white text-center mb-8">{selectedPlan} Plan - {plans[selectedPlan].price}</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-400 mb-8 text-lg">Question {step} of {questions.length}</p>
              <h3 className="text-2xl font-bold text-white mb-6">{currentQuestion.question}</h3>
              {currentQuestion.type === 'select' ? (
                <div className="space-y-3">
                  {currentQuestion.options.map(opt => (
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
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-8">I'll review your answers and get back to you.</p>
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