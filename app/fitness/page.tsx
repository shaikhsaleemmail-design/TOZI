// app/fitness/page.tsx
import Link from 'next/link';
import Navbar from '../components/Navbar';

const services = [
  { name: 'Fat Loss Programs', price: '$199/mo', desc: 'Science-backed nutrition & training' },
  { name: 'Muscle Gain Programs', price: '$249/mo', desc: 'Hypertrophy-focused protocols' },
  { name: 'Personal Training', price: '$499/mo', desc: '1-on-1 coaching & form analysis' },
];

const testimonials = [
  { name: 'Alex M.', result: 'Lost 15kg in 12 weeks', text: 'TOZI transformed my approach to fitness.' },
  { name: 'Sarah K.', result: 'Gained 8kg muscle', text: 'Most disciplined coach Ive worked with.' },
];

export default function FitnessPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Fitness Coaching</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Science-backed programs designed for real, lasting results.</p>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-3xl font-bold text-black mb-3">{service.price}</p>
                <p className="text-gray-500 mb-6">{service.desc}</p>
                <Link href="https://wa.me/918657282577" className="block text-center py-3 bg-black text-white rounded-full">
                  Start Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Client Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 border-l-4 border-black bg-gray-50">
                <p className="text-gray-600 italic mb-3">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link href="https://wa.me/918657282577" className="px-8 py-4 bg-white text-black rounded-full font-medium">WhatsApp Now</Link>
          <Link href="/enquiry" className="px-8 py-4 border border-white rounded-full font-medium">Enquiry Form</Link>
        </div>
      </section>
    </main>
  );
}