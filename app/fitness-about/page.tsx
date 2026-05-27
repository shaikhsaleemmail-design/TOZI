import Link from 'next/link';

export default function FitnessAbout() {
  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <Link href="/fitness-choice" className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center text-white mb-8">My Fitness Journey</h1>
        
        {/* Hero Image - Your best after photo */}
        <div className="mb-12">
          <img 
            src="/images/after-best.jpg" 
            alt="TOZI Transformation" 
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>

        {/* The Struggle Section with Before Photo */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <img 
              src="/images/before.jpg" 
              alt="Before Transformation" 
              className="w-full h-80 object-cover rounded-xl"
            />
            <p className="text-center text-gray-400 mt-2">Before: My normal life</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">The Struggle</h2>
            <p className="text-gray-300 leading-relaxed">
              I wasn't always fit. Like many of you, I lived a normal life - no discipline, 
              no routine, no results. I felt tired, unmotivated, and stuck. But I knew 
              something had to change.
            </p>
          </div>
        </div>

        {/* Certification Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-2xl font-bold text-white mb-4">Becoming a Professional</h2>
            <p className="text-gray-300 leading-relaxed">
              I became a certified Personal Trainer to help others achieve what I achieved. 
              This certificate represents my commitment to professional coaching.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/images/certificate.jpg" 
              alt="Certificate" 
              className="w-full h-80 object-cover rounded-xl"
            />
            <p className="text-center text-gray-400 mt-2">Certified Personal Trainer</p>
          </div>
        </div>

        {/* Transformation Gallery - 4 After Photos */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">2 Years of Transformation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <img src="/images/after1.jpg" alt="After 1" className="h-64 w-full object-cover rounded-xl" />
          <img src="/images/after2.jpg" alt="After 2" className="h-64 w-full object-cover rounded-xl" />
          <img src="/images/after3.jpg" alt="After 3" className="h-64 w-full object-cover rounded-xl" />
          <img src="/images/after4.jpg" alt="After 4" className="h-64 w-full object-cover rounded-xl" />
        </div>

        {/* Result Section */}
        <div className="text-center mb-12 p-8 bg-gray-900 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">The Result</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Today, I'm proof that transformation is possible. If I can do it, so can you.
          </p>
          <Link href="/fitness-form">
            <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:scale-105 transition">
              Start Your Journey →
            </button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a href="https://www.instagram.com/saatozii/" target="_blank" className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
            Instagram
          </a>
          <a href="https://wa.me/918657282577" target="_blank" className="px-6 py-3 bg-green-600 text-white rounded-full hover:scale-105 transition">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}