import React from 'react';
import { FolderGit2, Target } from 'lucide-react';

const projects = [
  {
    name: 'Personal Portfolio',
    description: 'A modern, responsive portfolio built with Next.js, Tailwind v4, and Firebase. Features a custom dark mode implementation, glassmorphism UI, and automated CI/CD deployments.',
    tech: ['Next.js', 'TailwindCSS', 'Firebase'],
    link: 'https://github.com/architdutt/archit-portfolio'
  },
  {
    name: 'Namaste Pointing Poker',
    description: 'An intuitive tool designed for collaborative teams to estimate tasks remotely using the Planning Poker technique. Features a user-friendly interface with unlimited sessions, no sign-up requirement, and a fully responsive design.',
    tech: ['Web', 'Firebase', 'Responsive Design'],
    link: 'https://namaste-pointing-poker.web.app/'
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Personal Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors duration-300">
            Showcasing open-source contributions and independent development work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400 dark:hover:border-blue-500/30 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Target className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
