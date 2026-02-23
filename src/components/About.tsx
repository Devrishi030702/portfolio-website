import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
            {/* CUSTOMIZE: Replace with your actual profile image */}
            <img 
              src="https://i.pinimg.com/1200x/e8/f1/3d/e8f13d497ca149f47578fbe946a2f89e.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/10 rounded-full blur-2xl -z-10"></div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {/* CUSTOMIZE: Your bio */}
            <p>
              Hello! My name is Devrishi. I am a bachelor student of International Business and Engineering at THWS.
            </p>
            <p>
              As a creative design enthusiast, I'm always ready to face challenges in new environments. I am a highly motivated individual who prides myself on strong communication and effective time management skills.
            </p>
            <p>
              I share a deep, ongoing interest in illustration, creative design, brand promotion, social media content creation, logo design, and photography. I'm constantly exploring new ways to blend aesthetics with strategic business goals.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-6">
            {/* CUSTOMIZE: Your stats */}
            <div>
              <h3 className="font-bold text-3xl text-gray-900 dark:text-white mb-1">4+</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="font-bold text-3xl text-gray-900 dark:text-white mb-1">15+</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
