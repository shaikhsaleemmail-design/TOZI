// app/fitness-about/page.tsx
import Link from 'next/link';

export default function FitnessAbout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <Link href="/fitness-choice" className="fixed top-8 left-8 text-black text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-8">My Fitness Journey</h1>
        
        {/* Hero Image Placeholder */}
        <div className="bg-gray-200 h-96 rounded-2xl mb-12 flex items-center justify-center">
          <span className="text-gray-500">Your Photo Here</span>
        </div>

        {/* Story Text */}
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          With over 8 years of experience in high-performance fitness, I've transformed 
          hundreds of clients through discipline, science-backed training, and unwavering consistency.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          From my own transformation journey to helping others achieve their dream physique, 
          fitness isn't just my profession - it's my lifestyle. Every client gets personalized 
          programs based on their unique goals, body type, and lifestyle.
        </p>

        {/* Photo Grid */}
        <h2 className="text-3xl font-bold mb-6">Transformation Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Photo 1</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Photo 2</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Photo 3</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Photo 4</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Photo 5</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Photo 6</span>
          </div>
        </div>

        {/* Video Links */}
        <h2 className="text-3xl font-bold mb-6">Watch My Journey</h2>
        <div className="flex gap-4 mb-12">
          <a href="https://www.instagram.com/saatozii/" target="_blank" className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
            📸 Instagram
          </a>
          <a href="https://www.youtube.com/@saatozi" target="_blank" className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
            ▶️ YouTube
          </a>
          <a href="https://wa.me/918657282577" target="_blank" className="px-6 py-3 bg-green-600 text-white rounded-full hover:scale-105 transition">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}