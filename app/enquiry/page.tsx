// app/enquiry/page.tsx
'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({ name: '', goal: '', budget: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hello TOZI!%0A%0AName: ${formData.name}%0AGoal: ${formData.goal}%0ABudget: ${formData.budget}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918657282577?text=${whatsappMsg}`, '_blank');
  };

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center">Let's Talk</h1>
        <p className="text-gray-500 text-center mb-12">Tell me about your goals and I'll get back to you.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" placeholder="Your Name" required className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="text" placeholder="Your Goal (e.g., Fat Loss / Brand Growth)" required className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })} />
          <select className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
            <option>Select Budget Range</option>
            <option>$0 - $500</option>
            <option>$500 - $1000</option>
            <option>$1000+</option>
          </select>
          <textarea rows={4} placeholder="Your Message" className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
          <button type="submit" className="w-full py-4 bg-black text-white rounded-xl font-medium hover:scale-[1.02] transition-transform">
            Send via WhatsApp →
          </button>
        </form>
      </section>
    </main>
  );
}