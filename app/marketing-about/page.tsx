// app/marketing-about/page.tsx
import Link from 'next/link';

export default function MarketingAbout() {
  return (
    <div className="min-h-screen bg-white">
      <Link href="/marketing-choice" className="fixed top-8 left-8 text-black text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-8">My Marketing Journey</h1>
        
        <div className="bg-gray-200 h-96 rounded-2xl mb-12 flex items-center justify-center">
          <span className="text-gray-500">Your Photo Here</span>
        </div>

        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          With 8+ years in digital marketing, I've helped brands scale from zero to millions in revenue through data-driven strategies.
        </p>

        <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
        <div className="space-y-4 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="font-bold">📈 Instagram Growth</p>
            <p className="text-gray-600">+15k followers in 90 days for a fitness brand</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="font-bold">🚀 Meta Ads ROI</p>
            <p className="text-gray-600">4.5x ROAS in first month for e-commerce</p>
          </div>
        </div>

        <div className="flex gap-4">
          <a href="https://www.instagram.com/saatozii/" target="_blank" className="px-6 py-3 bg-black text-white rounded-full">📸 Instagram</a>
          <a href="https://wa.me/918657282577" target="_blank" className="px-6 py-3 bg-green-600 text-white rounded-full">💬 WhatsApp</a>
        </div>
      </div>
    </div>
  );
}