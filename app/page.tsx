// app/page.tsx
import Link from 'next/link';
import Navbar from './components/Navbar';


export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-4">TOZI</h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl">
          Fitness Coach & Digital Marketer. <br/>
          Transforming physiques, scaling brands.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <Link href="/fitness" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform">
            Book Fitness Consultation
          </Link>
          <Link href="https://wa.me/918657282577" className="px-8 py-4 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
            WhatsApp Contact
          </Link>
        </div>
      </section>

      <section className="bg-zinc-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">The Transformation Expert</h2>
          <p className="text-xl leading-relaxed text-gray-600">
            With over 8 years of experience in high-performance fitness and data-driven marketing,
            TOZI bridges the gap between physical excellence and digital dominance.
            Discipline in the gym, precision in the market.
          </p>
        </div>
      </section>
    </main>
  );
}
