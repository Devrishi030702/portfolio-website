import { ArrowUp, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold tracking-tighter mb-2 block">Devrishi<span className="text-indigo-600 dark:text-indigo-400">.</span></a>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* CUSTOMIZE: Your social media links */}
          <a href="https://www.linkedin.com/in/devrishi-saha-333003137/" className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            website experience designed by SaintsOfLastResort
          </p>
        </div>
      </div>
    </footer>
  );
}
