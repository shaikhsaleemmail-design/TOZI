import Link from 'next/link';

export default function MarketingAbout() {
  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <Link href="/marketing-choice" className="fixed top-8 left-8 text-white text-2xl hover:opacity-50 transition z-50">
        ← BACK
      </Link>

      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          My Digital Marketing Journey
        </h1>

        {/* Blog Content */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            I started my journey in digital marketing with nothing but curiosity and a strong desire to learn. 
            Without any formal training, I taught myself everything from scratch using YouTube, social media, 
            and hands-on experimentation.
          </p>

          <p>
            I didn't just watch tutorials—I applied every concept in real time, testing strategies, making mistakes, 
            and improving daily. Over time, I developed a deep understanding of website creation, automation systems, 
            paid advertising, video editing, and photo editing.
          </p>

          <p>
            Today, I combine all these skills with the power of AI to create efficient, high-performing digital solutions. 
            My approach is simple: <span className="text-white font-semibold">learn, test, adapt, and execute</span>—and 
            that's what sets my work apart.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 justify-center mt-16 pt-8 border-t border-gray-800">
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
    </div>
  );
}