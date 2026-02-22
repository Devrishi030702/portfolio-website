import { motion } from 'motion/react';
import { ArrowDown, Code, Sparkles, Snowflake } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-start pt-40 pb-20 px-4 md:px-8 w-full max-w-7xl mx-auto relative z-10">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-rose-900/20 blur-[120px] rounded-full opacity-40 mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/10 blur-[100px] rounded-full opacity-30 mix-blend-screen"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg">
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-light tracking-wide">
            {/* CUSTOMIZE: Your Name and Location */}
            Hi! I'm Devrishi <span className="mx-2 text-gray-400 dark:text-gray-600">|</span> Based in Germany
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center max-w-5xl mx-auto mb-8 relative"
      >
        <div className="absolute -inset-10 bg-rose-600/20 blur-[80px] rounded-full opacity-20 pointer-events-none"></div>
        <h1 className="relative text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
          {/* CUSTOMIZE: Your Title */}
          Graphic Design Enthusiast
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 dark:from-gray-200 dark:via-gray-400 dark:to-gray-500 font-semibold">& Creative Designs</span>
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mb-20"
      >
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          {/* CUSTOMIZE: Your short introduction */}
          I craft immersive visual narratives that dissolve the boundary between digital pixels and physical touch.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative w-full max-w-md mx-auto group perspective-1000"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 bottom-24 z-30"
        >
          <div className="bg-white/10 dark:bg-[#141417]/40 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-xl p-4 rounded-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <Sparkles className="text-rose-500 w-10 h-10 drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-12 top-12 z-30"
        >
          <div className="bg-white/10 dark:bg-[#141417]/40 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-xl p-4 rounded-full">
            <Code className="text-blue-500 w-8 h-8 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          </div>
        </motion.div>

        <div className="relative rounded-t-[3.5rem] p-3 pb-0 bg-white/10 dark:bg-[#141417]/40 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-2xl bg-gradient-to-b from-gray-100/50 dark:from-white/10 to-transparent">
          <div className="relative rounded-t-[3rem] overflow-hidden h-[450px] md:h-[550px] w-full bg-gray-100 dark:bg-[#121214]">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-600/10 via-transparent to-gray-50 dark:to-[#0A0A0B] opacity-60 z-10"></div>
            {/* CUSTOMIZE: Your Hero Image */}
            <img 
              alt="Portrait" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 z-20" 
              src="https://i.pinimg.com/736x/17/dc/bc/17dcbc3d928421346812e1a0bf4aad5e.jpg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-gray-50 dark:to-[#0A0A0B] opacity-40 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50 via-gray-50/80 dark:from-[#0A0A0B] dark:via-[#0A0A0B]/80 to-transparent z-30 pointer-events-none"></div>
            
            <div className="absolute bottom-12 right-0 transform rotate-[-5deg] z-40 translate-x-4">
              <div className="bg-green-500/10 backdrop-blur-md px-5 py-2.5 rounded-xl border border-green-500/30 flex items-center gap-3 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400">Available For Hire</span>
              </div>
            </div>
            
            <div className="absolute bottom-12 left-8 z-40">
              <div className="w-14 h-14 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white shadow-lg hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all cursor-pointer group-hover:scale-110">
                <Snowflake className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/40 to-transparent z-40"></div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-900 dark:text-white">Scroll</span>
        <ArrowDown className="w-5 h-5 text-gray-900 dark:text-white animate-bounce" />
      </div>
    </section>
  );
}
