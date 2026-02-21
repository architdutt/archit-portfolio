import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20 transition-colors duration-300">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] top-[-150px] left-[-150px] mix-blend-screen animate-pulse duration-[8s]" />
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] bottom-[-300px] right-[-200px] mix-blend-screen" />
      </div>

      <div className="z-10 max-w-4xl mx-auto space-y-8 fade-in-up flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-2 border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-xl mb-4 group transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse duration-[4s]" />
          <Image
            src="/profile.jpeg"
            alt="Archit Dutt Sharma"
            fill
            className="rounded-full object-cover z-10 p-1"
            priority
          />
        </div>

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
          I build robust, scalable web applications and enterprise solutions. My engineering philosophy centers on clean backend architecture using .NET Core and performant frontend experiences via Next.js. I have a deep drive for building resilient microservices and turning complex problems into elegant user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center">
            Download Resume
          </a>
          <a href="mailto:architdutt@gmail.com" className="px-8 py-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all backdrop-blur-sm hover:-translate-y-1 w-full sm:w-auto text-center">
            Get In Touch
          </a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/architdutt" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all backdrop-blur-sm hover:-translate-y-1">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/architdutt" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all backdrop-blur-sm hover:-translate-y-1">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:architdutt@gmail.com" className="p-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all backdrop-blur-sm hover:-translate-y-1">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
