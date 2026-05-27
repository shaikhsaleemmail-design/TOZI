import Link from 'next/link';

export default function FitnessChoice() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative">
      <Link href="/" className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition">
        ← BACK
      </Link>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        <Link href="/fitness-about" className="flex-1">
          <div className="text-center hover:scale-105 transition">
            <h2 className="text-4xl md:text-5xl font-bold text-white">ABOUT ME</h2>
          </div>
        </Link>

        <Link href="/fitness-form" className="flex-1">
          <div className="text-center hover:scale-105 transition">
            <h2 className="text-4xl md:text-5xl font-bold text-white">START NOW</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}