// app/fitness-form/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FitnessForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    fullName: '',
    age: '',
    phone: '',
    height: '',
    weight: '',
    goal: '',
    dietType: '',
    dailyDiet: '',
    medicalHistory: '',
    injuries: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { key: 'fullName', question: "What's your full name?", type: 'text', placeholder: "Enter your full name" },
    { key: 'age', question: "How old are you?", type: 'number', placeholder: "Enter your age" },
    { key: 'phone', question: "What's your WhatsApp number?", type: 'tel', placeholder: "Enter your phone number" },
    { key: 'height', question: "What's your height?", type: 'text', placeholder: "e.g., 175cm or 5'9\"" },
    { key: 'weight', question: "What's your current weight?", type: 'text', placeholder: "e.g., 75kg or 165lbs" },
    { key: 'goal', question: "What's your main goal?", type: 'select', options: ['Fat Loss', 'Muscle Gain', 'Strength', 'General Fitness'] },
    { key: 'dietType', question: "What's your diet type?", type: 'select', options: ['Veg', 'Non-Veg', 'Eggetarian'] },
    { key: 'dailyDiet', question: "Describe your daily diet", type: 'textarea', placeholder: "What do you typically eat in a day?" },
    { key: 'medicalHistory', question: "Any medical conditions?", type: 'textarea', placeholder: "List any medical conditions or past injuries" },
    { key: 'injuries', question: "Any current injuries?", type: 'textarea', placeholder: "Tell me about any injuries" }
  ];

  const currentQuestion = questions[step];
  const currentValue = answers[currentQuestion?.key as keyof typeof answers] || '';

  const handleAnswer = (value: string) => {
    if (currentQuestion) {
      setAnswers({ ...answers, [currentQuestion.key]: value });
      
      if (step + 1 < questions.length) {
        setStep(step + 1);
      } else {
        // Submit form
        const message = `🏋️ FITNESS COUNSELING FORM 🏋️%0A%0A
📌 Full Name: ${answers.fullName}%0A
📌 Age: ${answers.age}%0A
📌 Phone: ${answers.phone}%0A
📌 Height: ${answers.height}%0A
📌 Weight: ${answers.weight}%0A
📌 Goal: ${answers.goal}%0A
📌 Diet Type: ${answers.dietType}%0A
📌 Daily Diet: ${answers.dailyDiet}%0A
📌 Medical History: ${answers.medicalHistory}%0A
📌 Injuries: ${answers.injuries}%0A%0A
📅 New client enquiry! Please contact.`;
        
        window.open(`https://wa.me/918657282577?text=${message}`, '_blank');
        setSubmitted(true);
      }
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <Link href="/fitness-choice" className="fixed top-8 left-8 text-black text-2xl hover:opacity-50 transition">
          ← BACK
        </Link>
        <div className="text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            I've received your details. I'll reach out on WhatsApp within 24 hours.
          </p>
          <p className="text-gray-500">Stay disciplined. 💪</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Link href="/fitness-choice" className="fixed top-8 left-8 text-black text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="max-w-2xl mx-auto px-6 pt-32">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="bg-gray-200 h-2 rounded-full">
            <div className="bg-black h-2 rounded-full transition-all duration-300" 
                 style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
          </div>
          <p className="text-right text-sm text-gray-500 mt-2">Question {step + 1} of {questions.length}</p>
        </div>

        {/* Question Card */}
        <div className="text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{currentQuestion.question}</h2>
          
          {currentQuestion.type === 'select' ? (
            <div className="space-y-4">
              {currentQuestion.options?.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="w-full py-4 bg-gray-50 hover:bg-black hover:text-white rounded-xl transition-all duration-300 text-lg"
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : currentQuestion.type === 'textarea' ? (
            <div>
              <textarea
                placeholder={currentQuestion.placeholder}
                value={currentValue}
                onChange={(e) => setAnswers({ ...answers, [currentQuestion.key]: e.target.value })}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-lg"
                rows={4}
              />
              <button
                onClick={() => handleAnswer(currentValue)}
                className="mt-4 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition"
              >
                Next →
              </button>
            </div>
          ) : (
            <div>
              <input
                type={currentQuestion.type}
                placeholder={currentQuestion.placeholder}
                value={currentValue}
                onChange={(e) => setAnswers({ ...answers, [currentQuestion.key]: e.target.value })}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-lg"
                autoFocus
              />
              <button
                onClick={() => handleAnswer(currentValue)}
                className="mt-4 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition"
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