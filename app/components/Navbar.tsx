// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          TOZI
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <Link href="/fitness" className="hover:text-black transition-colors">Fitness</Link>
          <Link href="/marketing" className="hover:text-black transition-colors">Marketing</Link>
        </div>
        <Link href="/enquiry" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all">
          Enquire
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
