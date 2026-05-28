'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FitnessAbout() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button (page back) */}
      <Link href="/fitness-choice" className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Image 1 - Before (text right) */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center">
          <img 
            src="/images/before.jpg" 
            alt="Before" 
            className="w-full md:w-1/2 h-80 object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
            onClick={() => openImage('/images/before.jpg')}
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-white mb-3">Before I Started</h2>
            <p className="text-gray-300 leading-relaxed">No discipline, no routine, low energy. This was my starting point.</p>
          </div>
        </div>

        {/* Image 2 - First Gain (text left) */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl font-bold text-white mb-3">My First Muscle Gain</h2>
            <p className="text-gray-300 leading-relaxed">Consistency started paying off. First signs of real transformation.</p>
          </div>
          <img 
            src="/images/after1.jpg" 
            alt="First Gain" 
            className="w-full md:w-1/2 h-80 object-cover rounded-xl cursor-pointer hover:opacity-90 transition order-1 md:order-2"
            onClick={() => openImage('/images/after1.jpg')}
          />
        </div>

        {/* Image 3 - Transformation (text right) - fixed text */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center">
          <img 
            src="/images/after2.jpg" 
            alt="Transformation" 
            className="w-full md:w-1/2 h-80 object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
            onClick={() => openImage('/images/after2.jpg')}
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-white mb-3">My Body Transformation</h2>
            <p className="text-gray-300 leading-relaxed">Revealed the muscle underneath. Leaner, stronger, more confident.</p>
          </div>
        </div>

        {/* Image 4 - Transformation (text left) - fixed text */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl font-bold text-white mb-3">Continued Progress</h2>
            <p className="text-gray-300 leading-relaxed">Peak condition. Vascular, defined, and disciplined.</p>
          </div>
          <img 
            src="/images/after3.jpg" 
            alt="Progress" 
            className="w-full md:w-1/2 h-80 object-cover rounded-xl cursor-pointer hover:opacity-90 transition order-1 md:order-2"
            onClick={() => openImage('/images/after3.jpg')}
          />
        </div>

        {/* Image 5 - Transformation (text right) - fixed text */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center">
          <img 
            src="/images/after4.jpg" 
            alt="Final Form" 
            className="w-full md:w-1/2 h-80 object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
            onClick={() => openImage('/images/after4.jpg')}
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-white mb-3">Mastered My Physique</h2>
            <p className="text-gray-300 leading-relaxed">This is what dedication looks like. Years of hard work paying off.</p>
          </div>
        </div>

        {/* Image 6 - Certificate (text left) - fixed IFSA */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl font-bold text-white mb-3">Certified from IFSA</h2>
            <p className="text-gray-300 leading-relaxed">Turned my passion into profession. Now I help others transform.</p>
          </div>
          <img 
            src="/images/certificate.jpg" 
            alt="IFSA Certificate" 
            className="w-full md:w-1/2 h-80 object-cover rounded-xl cursor-pointer hover:opacity-90 transition order-1 md:order-2"
            onClick={() => openImage('/images/certificate.jpg')}
          />
        </div>

        {/* Video Section */}
        <div className="text-center my-20">
          <h2 className="text-3xl font-bold text-white mb-8">Click on the video to play</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <p className="text-gray-300 mb-4">YouTube Video Title</p>
              <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">YouTube embed will appear here</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 text-center">
              <p className="text-gray-300 mb-4">Instagram Reel Title</p>
              <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Instagram embed will appear here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <a href="https://www.instagram.com/saatozi" target="_blank" className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
            Instagram
          </a>
          <a href="https://youtube.com/@saatozi" target="_blank" className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
            YouTube
          </a>
          <a href="https://x.com/Saatozi" target="_blank" className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
            X (Twitter)
          </a>
          <a href="https://wa.me/918657282577" target="_blank" className="px-6 py-3 bg-green-600 text-white rounded-full hover:scale-105 transition">
            WhatsApp
          </a>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-[100] flex items-center justify-center cursor-pointer"
          onClick={closeImage}
        >
          <button 
            onClick={closeImage}
            className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition z-[101]"
          >
            ← BACK
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}