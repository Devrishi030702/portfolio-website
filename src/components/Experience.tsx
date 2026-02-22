import { motion } from 'motion/react';

// CUSTOMIZE: Add your work experience and education history here
const experiences = [
  {
    type: 'work',
    title: 'Graphic Designing Team Lead (Social Media & Promotions)',
    organization: 'The Music Club, Manipal University Jaipur',
    date: 'June 2022 - May 2023',
    description: 'Led the graphic design team focusing on social media and promotional content.'
  },
  {
    type: 'work',
    title: 'Graphic Designing Team Lead (Promotions)',
    organization: 'IEI Mechatronic Student Chapter, Manipal University Jaipur',
    date: 'May 2021 - June 2021',
    description: 'Directed promotional graphic design initiatives for the student chapter.'
  },
  {
    type: 'work',
    title: 'Freelance Graphic Designing',
    organization: 'Self-Employed',
    date: 'July 2020 - May 2023',
    description: 'Specialized in social media promotions, logo designs, and creative designs for various clients.'
  },
  {
    type: 'education',
    title: 'Bachelors, International Business and Engineering',
    organization: 'Technische Hochschule Würzburg-Schweinfurt',
    date: '2025 - on going',
    description: 'Pursuing a degree combining international business strategies with engineering principles.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 w-full max-w-3xl px-6 pt-40 pb-20 flex flex-col items-center mx-auto">
      <div className="text-center mb-20 space-y-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full border border-rose-600/30 bg-rose-600/10 text-rose-600 text-xs font-bold tracking-widest uppercase mb-2"
        >
          Career Path
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-lg"
        >
          My Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto leading-relaxed font-light"
        >
          A chronological journey through my professional evolution and milestones.
        </motion.p>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-transparent via-rose-600 to-rose-600 opacity-50"></div>
      </div>

      <div className="relative w-full pl-6 md:pl-0">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-rose-600 to-transparent shadow-[0_0_8px_rgba(255,0,51,0.6)] z-0"></div>
        
        <div className="space-y-12">
          {experiences.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full pl-12 md:pl-24 transition-all duration-500"
            >
              <div className="absolute left-[11px] md:left-[27px] top-8 w-3 h-3 rounded-full bg-gray-50 dark:bg-[#050505] border-2 border-rose-600 shadow-[0_0_10px_#ff0033] z-10 group-hover:bg-rose-600 group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="bg-white/50 dark:bg-white/[0.02] backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-rose-600/40 hover:bg-rose-50/50 dark:hover:bg-rose-600/5 hover:shadow-[0_0_25px_rgba(225,29,72,0.15)]">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-rose-600 transition-colors duration-300 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-rose-600 font-medium text-sm mt-1 uppercase tracking-wide opacity-90">
                      {item.organization}
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-xs font-mono whitespace-nowrap w-fit">
                    {item.date}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-200 dark:border-white/5 pt-4 mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
