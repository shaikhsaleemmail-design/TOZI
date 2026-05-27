// app/fitness-choice/page.tsx
import Link from 'next/link';

export default function FitnessChoice() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 relative">
      {/* Back Button */}
      <Link href="/" className="fixed top-8 left-8 text-black text-2xl hover:opacity-50 transition">
        ← BACK
      </Link>

      {/* Two Cards */}
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        {/* About Me Card */}
        <Link href="/fitness-about" className="flex-1">
          <div className="bg-gray-50 p-12 rounded-2xl text-center hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-200">
            <div className="text-6xl mb-4">📖</div>
            <h2 className="text-3xl font-bold mb-3">ABOUT ME</h2>
            <p className="text-gray-500">My fitness journey, photos & videos</p>
          </div>
        </Link>

        {/* Start Now Card */}
        <Link href="/fitness-form" className="flex-1">
          <div className="bg-gray-50 p-12 rounded-2xl text-center hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-200">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold mb-3">START NOW</h2>
            <p className="text-gray-500">Begin your transformation journey</p>
          </div>
        </Link>
      </div>
    </div>
  );
}