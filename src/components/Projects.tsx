import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

// CUSTOMIZE: Add your actual projects here
const projects = [
  {
    title: 'Brand Logo Designing',
    description: 'Establishing market presence with a professionally engineered logo showcasing upmost clarity and functional longevity',
    image: 'https://i.pinimg.com/736x/32/6a/cb/326acbdc70bc1291cceecbf9e2efd221.jpg',
    tags: ['illustrator', 'Pixelmator'],
    demo: '#'
  },
  {
    title: 'Brand Promotional Content',
    description: 'specialize in crafting high-impact promotional content that bridges the gap between brands and their audiences.',
    image: 'https://i.pinimg.com/736x/0f/35/89/0f358971b9205c8045bd142fa15723a5.jpg',
    tags: ['Photoshop', 'illustrator', 'Pixelmator', 'express'],
    demo: '#'
  },
  {
    title: 'Portfolio Designing  ',
    description: 'curated collection of high-energy, thumb-stopping media. I specialize in trend-aware content that speaks the language of today’s digital consumer',
    image: 'https://picsum.photos/seed/proj3/600/400',
    tags: ['Photoshop', 'illustrator', 'Pixelmator', 'express'],
    demo: '#'
  },
  {
    title: 'Photography',
    description: 'Complete visual overhaul for a tech startup, including logo design, typography, and social media guidelines.',
    image: 'https://i.pinimg.com/736x/66/6e/8d/666e8df439e28f0e44a9603ae19f4312.jpg',
    tags: ['Photoshop', 'Pixelmator'],
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Recent Works
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.demo} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors" aria-label="Live Demo">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-md">
                    {tag}
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
