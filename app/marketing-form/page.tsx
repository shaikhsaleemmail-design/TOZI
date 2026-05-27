// app/marketing-form/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function MarketingForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    industry: '',
    followers: '',
    goal: '',
    budget: '',
    platform: '',
    website: '',
    requirements: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { key: 'fullName', question: "What's your full name?", type: 'text', placeholder: "Enter your name" },
    { key: 'businessName', question: "What's your business/brand name?", type: 'text', placeholder: "Enter business name" },
    { key: 'phone', question: "What's your WhatsApp number?", type: 'tel', placeholder: "Enter phone number" },
    { key: 'industry', question: "What industry are you in?", type: 'text', placeholder: "e.g., Fitness, Fashion, Tech" },
    { key: 'followers', question: "Current social media followers?", type: 'text', placeholder: "e.g., 5,000 on Instagram" },
    { key: 'goal', question: "What's your main marketing goal?", type: 'select', options: ['Brand Awareness', 'Lead Generation', 'Sales', 'All'] },
    { key: 'budget', question: "Monthly ad budget?", type: 'select', options: ['$0-$500', '$500-$2000', '$2000-$5000', '$5000+'] },
    { key: 'platform', question: "Which platforms do you use?", type: 'select', options: ['Instagram', 'Facebook', 'Google', 'YouTube', 'LinkedIn'] },
    { key: 'website', question: "Do you have a website? (Optional)", type: 'text', placeholder: "Enter your website URL" },
    { key: 'requirements', question: "Any specific requirements?", type: 'textarea', placeholder: "Tell me about your needs" }
  ];

  const currentQuestion = questions[step];
  const currentValue = answers[currentQuestion?.key as keyof typeof answers] || '';

  const handleAnswer = (value: string) => {
    if (currentQuestion) {
      setAnswers({ ...answers, [currentQuestion.key]: value });
      
      if (step + 1 < questions.length) {
        setStep(step + 1);
      } else {
        const message = `📈 MARKETING ENQUIRY 📈%0A%0A
📌 Name: ${answers.fullName}%0A
📌 Business: ${answers.businessName}%0A
📌 Phone: ${answers.phone}%0A
📌 Industry: ${answers.industry}%0A
📌 Followers: ${answers.followers}%0A
📌 Goal: ${answers.goal}%0A
📌 Budget: ${answers.budget}%0A
📌 Platform: ${answers.platform}%0A
📌 Website: ${answers.website}%0A
📌 Requirements: ${answers.requirements}%0A%0A
📅 New client enquiry! Please contact.`;
        
        window.open(`https://wa.me/918657282577?text=${message}`, '_blank');
        setSubmitted(true);
      }
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <Link href="/marketing-choice" className="fixed top-8 left-8 text-black text-2xl hover:opacity-50 transition">
          ← BACK
        </Link>
        <div className="text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">I'll analyze your brand and reach out on WhatsApp within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Link href="/marketing-choice" className="fixed top-8 left-8 text-black text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="max-w-2xl mx-auto px-6 pt-32">
        <div className="mb-12">
          <div className="bg-gray-200 h-2 rounded-full">
            <div className="bg-black h-2 rounded-full transition-all duration-300" 
                 style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
          </div>
          <p className="text-right text-sm text-gray-500 mt-2">Question {step + 1} of {questions.length}</p>
        </div>

        <div className="text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{currentQuestion.question}</h2>
          
          {currentQuestion.type === 'select' ? (
            <div className="space-y-4">
              {currentQuestion.options?.map((opt) => (
                <button key={opt} onClick={() => handleAnswer(opt)} className="w-full py-4 bg-gray-50 hover:bg-black hover:text-white rounded-xl transition-all duration-300 text-lg">
                  {opt}
                </button>
              ))}
            </div>
          ) : currentQuestion.type === 'textarea' ? (
            <div>
              <textarea placeholder={currentQuestion.placeholder} value={currentValue} onChange={(e) => setAnswers({ ...answers, [currentQuestion.key]: e.target.value })}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-lg" rows={4} />
              <button onClick={() => handleAnswer(currentValue)} className="mt-4 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition">Next →</button>
            </div>
          ) : (
            <div>
              <input type={currentQuestion.type} placeholder={currentQuestion.placeholder} value={currentValue} onChange={(e) => setAnswers({ ...answers, [currentQuestion.key]: e.target.value })}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-lg" autoFocus />
              <button onClick={() => handleAnswer(currentValue)} className="mt-4 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition">Next →</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}