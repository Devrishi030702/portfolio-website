import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Transformed our event presence with high-energy visuals that perfectly captured the rhythm of our club.",
    author: "The Music Club",
    role: "Manipal University Jaipur",
    image: "https://picsum.photos/seed/music/200/200"
  },
  {
    quote: "Sleek, technical, and forward-thinking—the promotional designs truly brought our robotic innovations to life.",
    author: "IEI Mechatronics Student Chapter",
    role: "Manipal University Jaipur",
    image: "https://picsum.photos/seed/mech/200/200"
  },
  {
    quote: "A masterclass in UI/UX; the startup portfolio design provided the professional edge we needed to stand out.",
    author: "Aditya Patel",
    role: "MET, THWS",
    image: "https://picsum.photos/seed/startup/200/200"
  },
  {
    quote: "Expertly captured our local roots with a modern logo that has become a recognizable symbol of quality in Punjab.",
    author: "Anshu Asija",
    role: "Bhagson's Desi Baazar, Punjab",
    image: "https://picsum.photos/seed/anshu/200/200"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16 relative">
        <span className="text-rose-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Endorsements</span>
        <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-6 text-gray-900 dark:text-white">
          Client <span className="text-rose-600 drop-shadow-[0_0_12px_rgba(225,29,72,0.4)]">Stories</span>
        </h2>

      </div>

      <div className="relative w-full max-w-5xl mx-auto mb-16 h-[500px] flex items-center justify-center">
        <div className="absolute w-[80%] h-[380px] bg-gray-100 dark:bg-[#0F0F0F]/40 border border-gray-200 dark:border-white/5 rounded-[2rem] -translate-y-8 scale-90 blur-[1px] -z-10"></div>
        <div className="absolute w-[85%] h-[400px] bg-gray-50 dark:bg-[#0F0F0F]/60 border border-gray-200 dark:border-white/5 rounded-[2rem] -translate-y-4 scale-95 blur-[0.5px] -z-10"></div>
        
        <div className="relative w-full max-w-2xl z-20">
          <div className="absolute -inset-1 bg-rose-600/20 rounded-[2.5rem] blur-2xl pointer-events-none"></div>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/80 dark:bg-[#0F0F0F]/60 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden group hover:border-rose-600/40 transition-all duration-700"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/5 rounded-full blur-[60px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-full bg-rose-600/50 blur-sm opacity-50"></div>
                    <img 
                      alt={currentTestimonial.author} 
                      className="relative w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-white/20 grayscale hover:grayscale-0 transition-all duration-500" 
                      src={currentTestimonial.image}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 flex items-center justify-center">
                    <Quote className="text-rose-600 w-5 h-5 drop-shadow-[0_0_4px_rgba(225,29,72,0.6)]" />
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl font-display font-medium leading-relaxed mb-10 text-gray-800 dark:text-gray-100 italic">
                  “{currentTestimonial.quote}”
                </blockquote>
                
                <div className="flex items-end justify-between border-t border-gray-200 dark:border-white/5 pt-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">{currentTestimonial.author}</h3>
                    <p className="text-[11px] text-rose-600 font-bold uppercase tracking-widest mt-1">{currentTestimonial.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-rose-600 w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:-px-12 pointer-events-none">
          <button 
            onClick={prevTestimonial}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 dark:bg-[#0F0F0F]/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-rose-600 hover:border-rose-600/50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 dark:bg-[#0F0F0F]/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-rose-600 hover:border-rose-600/50 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
