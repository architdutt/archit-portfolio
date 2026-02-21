import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20 transition-colors duration-300">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] top-[-150px] left-[-150px] mix-blend-screen animate-pulse duration-[8s]" />
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] bottom-[-300px] right-[-200px] mix-blend-screen" />
      </div>

      <div className="z-10 max-w-4xl mx-auto space-y-8 fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-medium text-blue-700 dark:text-blue-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-lg transition-colors duration-300">
          Archit Dutt Sharma
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-300">
          Lead Consultant & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Full-Stack Developer</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
          I build robust, scalable web applications and enterprise solutions. With a deep passion for modern frontend technologies and solid backend architecture, I turn complex problems into elegant user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <a href="#contact" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 w-full sm:w-auto">
            Get In Touch
          </a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/architdutt" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all backdrop-blur-sm hover:-translate-y-1">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/architdutt" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all backdrop-blur-sm hover:-translate-y-1">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="p-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all backdrop-blur-sm hover:-translate-y-1">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
