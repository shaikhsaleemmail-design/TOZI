'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FitnessAbout() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center">
      <div className="grain-overlay" />
      <div className="vignette" />

      <Link href="/fitness-choice" className="fixed top-8 left-8 text-white/60 text-sm hover:text-gold transition z-50 tracking-wide">
        ← BACK
      </Link>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
        
        {/* Header */}
        <div className="text-center w-full mb-8">
          <div className="text-gold text-[1px] opacity-50 mb-3 animate-pulse">◇</div>
          <h1 className="text-2xl md:text-3xl font-light gold-text tracking-[0.2em]">
            MY FITNESS JOURNEY
          </h1>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-5"></div>
        </div>
        
        {/* Image 1 - Before */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center w-full">
          <img 
            src="/images/before.jpg" 
            alt="Before" 
            className="w-full md:w-1/2 h-64 object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
            onClick={() => openImage('/images/before.jpg')}
          />
          <div className="md:w-1/2">
            <h2 className="text-lg font-light text-gold tracking-wide mb-2">Before I Started</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light">No discipline, no routine, low energy. This was my starting point.</p>
          </div>
        </div>

        {/* Image 2 - First Gain */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center w-full">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-lg font-light text-gold tracking-wide mb-2">My First Muscle Gain</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light">Consistency started paying off. First signs of real transformation.</p>
          </div>
          <img 
            src="/images/after1.jpg" 
            alt="First Gain" 
            className="w-full md:w-1/2 h-64 object-cover rounded-xl cursor-pointer hover:opacity-90 transition order-1 md:order-2"
            onClick={() => openImage('/images/after1.jpg')}
          />
        </div>

        {/* Image 3 - Transformation */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center w-full">
          <img 
            src="/images/after2.jpg" 
            alt="Transformation" 
            className="w-full md:w-1/2 h-64 object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
            onClick={() => openImage('/images/after2.jpg')}
          />
          <div className="md:w-1/2">
            <h2 className="text-lg font-light text-gold tracking-wide mb-2">My Body Transformation</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light">Revealed the muscle underneath. Leaner, stronger, more confident.</p>
          </div>
        </div>

        {/* Image 4 - Continued Progress */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center w-full">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-lg font-light text-gold tracking-wide mb-2">Continued Progress</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light">Peak condition. Vascular, defined, and disciplined.</p>
          </div>
          <img 
            src="/images/after3.jpg" 
            alt="Progress" 
            className="w-full md:w-1/2 h-64 object-cover rounded-xl cursor-pointer hover:opacity-90 transition order-1 md:order-2"
            onClick={() => openImage('/images/after3.jpg')}
          />
        </div>

        {/* Image 5 - Mastered Physique */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center w-full">
          <img 
            src="/images/after4.jpg" 
            alt="Final Form" 
            className="w-full md:w-1/2 h-64 object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
            onClick={() => openImage('/images/after4.jpg')}
          />
          <div className="md:w-1/2">
            <h2 className="text-lg font-light text-gold tracking-wide mb-2">Mastered My Physique</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light">This is what dedication looks like. Years of hard work paying off.</p>
          </div>
        </div>

        {/* Image 6 - Certificate */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center w-full">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-lg font-light text-gold tracking-wide mb-2">Certified from IFSA</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light">Turned my passion into profession. Now I help others transform.</p>
          </div>
          <img 
            src="/images/certificate.jpg" 
            alt="IFSA Certificate" 
            className="w-full md:w-1/2 h-64 object-cover rounded-xl cursor-pointer hover:opacity-90 transition order-1 md:order-2"
            onClick={() => openImage('/images/certificate.jpg')}
          />
        </div>

        {/* Video Section */}
        <div className="text-center w-full my-12">
          <div className="text-gold text-[1px] opacity-50 mb-6">◇</div>
          <h2 className="text-lg font-light text-white tracking-[0.2em] mb-8">WATCH MY JOURNEY</h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            
            <div className="premium-pill flex-col p-5 w-full max-w-md mx-auto">
              <p className="text-gold text-xs font-light tracking-wide mb-3 text-center">YouTube</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/avQ4SkXRsq0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="premium-pill flex-col p-5 w-full max-w-md mx-auto">
              <p className="text-gold text-xs font-light tracking-wide mb-3 text-center">Instagram Reel</p>
              <div className="bg-transparent rounded-lg p-3 text-center">
                <p className="text-white/70 text-xs mb-3">Watch my transformation reel</p>
                <a 
                  href="https://www.instagram.com/reel/DX94Lu-MHp_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 premium-pill text-xs"
                >
                  Watch on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 justify-center items-center mt-6">
          <a href="https://www.instagram.com/saatozi" target="_blank" rel="noopener noreferrer" className="premium-pill text-xs px-4 py-2">
            Instagram
          </a>
          <a href="https://youtube.com/@saatozi" target="_blank" rel="noopener noreferrer" className="premium-pill text-xs px-4 py-2">
            YouTube
          </a>
          <a href="https://x.com/Saatozi" target="_blank" rel="noopener noreferrer" className="premium-pill text-xs px-4 py-2">
            X (Twitter)
          </a>
          <a href="https://wa.me/918657282577" target="_blank" rel="noopener noreferrer" className="premium-pill text-xs px-4 py-2">
            WhatsApp
          </a>
        </div>

        {/* Footer Diamond */}
        <div className="text-center w-full mt-10">
          <div className="text-gold/20 text-[8px]">◇</div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center cursor-pointer"
          onClick={closeImage}
        >
          <button 
            onClick={closeImage}
            className="fixed top-8 left-8 text-white/60 text-sm hover:text-gold transition z-[101] tracking-wide"
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