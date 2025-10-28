import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

interface Wish {
  id: number;
  author: string;
  message: string;
  role: string;
}

const wishes: Wish[] = [
  {
    id: 1,
    author: "Sarah Chen",
    message: "Your leadership has been transformative. Thank you for always pushing us to think bigger and aim higher. You've built not just great products, but a great team.",
    role: "Senior Frontend Developer"
  },
  {
    id: 2,
    author: "Michael Rodriguez",
    message: "Working under your guidance has been the highlight of my career. Your technical vision and human touch made every challenge an opportunity to grow.",
    role: "Backend Engineer"
  },
  {
    id: 3,
    author: "Emily Watson",
    message: "You taught us that great technology comes from great culture. Your legacy will live on in every line of code we write and every decision we make.",
    role: "DevOps Lead"
  },
  {
    id: 4,
    author: "James Park",
    message: "Thank you for believing in us when we didn't believe in ourselves. Your mentorship turned junior developers into confident engineers.",
    role: "Full Stack Developer"
  },
  {
    id: 5,
    author: "Aisha Patel",
    message: "Your ability to balance innovation with pragmatism has been inspiring. You've shown us that leadership is about empowering others to lead.",
    role: "Product Engineer"
  },
  {
    id: 6,
    author: "David Kim",
    message: "From code reviews to career advice, you've always given your best. The impact you've made goes far beyond our codebase—it's in our hearts.",
    role: "Mobile Developer"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % wishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + wishes.length) % wishes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              A Fond Farewell
            </h1>
            <Sparkles className="w-8 h-8 text-green-400 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            To Our Inspiring Tech Development Leader
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Heart className="w-5 h-5 fill-red-400 text-red-400 animate-pulse" />
            <p className="text-sm">From Your Team, With Gratitude</p>
            <Heart className="w-5 h-5 fill-red-400 text-red-400 animate-pulse" />
          </div>
        </div>

        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Wish {currentIndex + 1} of {wishes.length}
          </div>

          <div className="flex-1 flex flex-col justify-center mb-8">
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-8xl text-blue-400/20 font-serif leading-none">"</div>
              <p className="text-xl md:text-2xl text-white leading-relaxed relative z-10 mb-8 text-center px-8">
                {wishes[currentIndex].message}
              </p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-2xl font-semibold text-cyan-300">
                {wishes[currentIndex].author}
              </p>
              <p className="text-sm text-slate-400 uppercase tracking-wider">
                {wishes[currentIndex].role}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Previous wish"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
            </button>

            <div className="flex gap-2">
              {wishes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-12 bg-gradient-to-r from-blue-400 to-cyan-400 h-2.5'
                      : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to wish ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Next wish"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-lg text-slate-300 italic">
            "Leadership is not about being in charge. It's about taking care of those in your charge."
          </p>
          <p className="text-sm text-slate-500">
            Your journey with us may be ending, but your impact will last forever
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
