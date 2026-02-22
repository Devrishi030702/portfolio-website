import { motion } from 'motion/react';
import { PenTool, Image as ImageIcon, Video, Palette } from 'lucide-react';

// CUSTOMIZE: Update your skill categories and individual skills here
const skillCategories = [
  {
    title: 'Vector & Layout',
    icon: <PenTool className="w-6 h-6" />,
    skills: ['Adobe Illustrator', 'Canva']
  },
  {
    title: 'Photo Editing',
    icon: <ImageIcon className="w-6 h-6" />,
    skills: ['Adobe Photoshop', 'Pixelmator Pro']
  },
  {
    title: 'Video Production',
    icon: <Video className="w-6 h-6" />,
    skills: ['Adobe Premiere Pro', 'Final Cut Pro']
  },
  {
    title: 'Quick Creation',
    icon: <Palette className="w-6 h-6" />,
    skills: ['Adobe Express', 'Canva']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-200 dark:border-white/5 pb-10">
        <div>
          <span className="text-rose-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-rose-600 shadow-[0_0_15px_-3px_rgba(225,29,72,0.4)]"></span>
            Technical Stack
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-semibold text-gray-900 dark:text-white">Expertise & Toolkit</h3>
        </div>
        <p className="text-gray-500 max-w-xs text-sm mt-6 md:mt-0 text-left leading-relaxed font-light">
          A highly specialized collection of digital art focused on showcasing and aesthetics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-2xl bg-gray-50 dark:bg-[#0F0F0F] border border-gray-200 dark:border-white/5 hover:border-rose-600/40 transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/5 flex items-center justify-center mb-8 group-hover:bg-rose-600 transition-colors duration-500">
                <div className="text-rose-600 group-hover:text-white transition-colors">
                  {category.icon}
                </div>
              </div>
              <h4 className="text-sm font-bold mb-6 text-gray-900 dark:text-white uppercase tracking-widest">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded bg-white dark:bg-[#050505] text-gray-500 border border-gray-200 dark:border-white/5 group-hover:border-rose-600/30 group-hover:text-rose-600 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
