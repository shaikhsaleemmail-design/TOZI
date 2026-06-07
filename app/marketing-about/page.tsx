import Link from 'next/link';

export default function MarketingAbout() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="grain-overlay" />
      <div className="vignette" />
      
      <Link href="/marketing-choice" className="fixed top-8 left-8 text-white/60 text-sm hover:text-gold transition z-50 tracking-wide">← BACK</Link>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12"><div className="text-gold text-[1px] opacity-50">◇</div></div>
        
        <h1 className="text-3xl md:text-4xl font-light text-white text-center tracking-[0.2em] mb-8">MY DIGITAL MARKETING JOURNEY</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed text-base font-light">
          <p>I started my journey in digital marketing with nothing but curiosity and a strong desire to learn. Without any formal training, I taught myself everything from scratch using YouTube, social media, and hands-on experimentation.</p>
          <p>I didn't just watch tutorials—I applied every concept in real time, testing strategies, making mistakes, and improving daily. Over time, I developed a deep understanding of website creation, automation systems, paid advertising, video editing, and photo editing.</p>
          <p>Today, I combine all these skills with the power of AI to create efficient, high-performing digital solutions. My approach is simple: <span className="text-gold">learn, test, adapt, and execute</span>—and that's what sets my work apart.</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-16">
          <a href="https://www.instagram.com/saatozi" target="_blank" className="premium-pill">Instagram</a>
          <a href="https://youtube.com/@saatozi" target="_blank" className="premium-pill">YouTube</a>
          <a href="https://x.com/Saatozi" target="_blank" className="premium-pill">X (Twitter)</a>
          <a href="https://wa.me/918657282577" target="_blank" className="premium-pill">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}