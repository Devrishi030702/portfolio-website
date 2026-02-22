import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight text-gray-900 dark:text-white drop-shadow-sm">Let's work together</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Drop me a message or reach out directly <br className="hidden md:block"/> — I’ll get back within a day.
        </p>
      </div>
      
      <div className="w-full max-w-lg mx-auto space-y-5 relative z-10">
        {/* CUSTOMIZE: Connect this form to a backend service like Formspree or EmailJS */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-5">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <input 
                className="relative w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all shadow-inner backdrop-blur-sm" 
                placeholder="Full Name" 
                type="text"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <input 
                className="relative w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all shadow-inner backdrop-blur-sm" 
                placeholder="Enter your email" 
                type="email"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <textarea 
                className="relative w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none shadow-inner backdrop-blur-sm" 
                placeholder="Write a message here..." 
                rows={5}
              ></textarea>
            </div>
            <button className="w-full bg-gray-900 dark:bg-gradient-to-r dark:from-gray-100 dark:to-white text-white dark:text-black font-semibold rounded-xl py-4 mt-2 hover:opacity-90 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all shadow-lg active:scale-[0.99] transform duration-150 border border-transparent dark:border-gray-200">
              Submit
            </button>
            <p className="text-center text-gray-500 dark:text-gray-600 text-sm mt-4">
              Your info stays private.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
