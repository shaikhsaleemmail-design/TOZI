// app/marketing/page.tsx
import Link from 'next/link';
import Navbar from '../components/Navbar';

const services = [
  { name: 'Social Media Management', price: '$599/mo', desc: 'Content strategy & community growth' },
  { name: 'Meta/Instagram Ads', price: '$799/mo + ad spend', desc: 'ROI-driven campaigns' },
  { name: 'Branding & Strategy', price: '$999 one-time', desc: 'Complete brand identity & positioning' },
];

export default function MarketingPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Digital Marketing</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Scale your brand with data-driven marketing strategies.</p>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-3xl font-bold text-black mb-3">{service.price}</p>
                <p className="text-gray-500 mb-6">{service.desc}</p>
                <Link href="https://wa.me/yournumber" className="block text-center py-3 bg-black text-white rounded-full">
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <a href="https://www.instagram.com/saatozii/" target="_blank" rel="noopener noreferrer" className="block p-4 border rounded-lg hover:bg-gray-50">
            📈 Instagram Growth: +15k followers in 90 days
          </a>
          <a href="https://www.youtube.com/@saatozi" target="_blank" rel="noopener noreferrer" className="block p-4 border rounded-lg hover:bg-gray-50">
            🚀 Ad ROAS: 4.5x in first month
          </a>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <Link href="https://wa.me/918657282577" className="px-8 py-4 bg-black text-white rounded-full">WhatsApp</Link>
          <Link href="/enquiry" className="px-8 py-4 border border-gray-300 rounded-full">Enquiry Form</Link>
        </div>
      </section>
    </main>
  );
}