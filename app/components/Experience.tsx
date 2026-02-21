import React from 'react';
import { Award, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Lead Consultant & Full-Stack Developer',
    company: 'Quinnox',
    period: '2017 – Present',
    projects: [
      {
        name: 'My Shawbrook (Banking)',
        description: 'Led the development of a modern, scalable web application leveraging Next.js and ReactJS. Implemented robust CI/CD pipelines using Azure DevOps to ensure rapid deployments, reducing release cycles by [X]% and accelerating time-to-market.',
        highlights: ['Next.js/ReactJS', 'Azure CI/CD', 'Banking Domain']
      },
      {
        name: 'Unum CLI 3.0 (Insurance)',
        description: 'Architected critical features for an insurance platform using .NET Core, reducing platform load times by [X]% and earning a Spot Award for delivery excellence.',
        highlights: ['.NET Core', 'C#', 'Insurance Domain'],
        award: 'Spot Award'
      },
      {
        name: 'Midtronics',
        description: 'Developed and maintained a comprehensive battery management solution utilizing .NET MVC and JavaScript, ensuring high accuracy in data processing and driving an [X]% increase in operational efficiency.',
        highlights: ['.NET MVC', 'JavaScript', 'Battery Management']
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300" id="experience">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Professional Experience</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 -translate-x-1/2 transition-colors duration-300"></div>
              
              {/* Header Profile - Mobile */}
              <div className="md:hidden mb-8 relative">
                <div className="absolute left-[-2rem] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-50 dark:border-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10 transition-colors duration-300"></div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight transition-colors duration-300">{exp.role}</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-2 font-medium transition-colors duration-300">{exp.company}</h4>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm font-medium transition-colors duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>
              </div>

              {/* Header Profile - Desktop */}
              <div className="hidden md:flex justify-between items-center mb-12 relative">
                <div className="w-[45%] text-right pr-8">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight transition-colors duration-300">{exp.role}</h3>
                  <h4 className="text-2xl text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">{exp.company}</h4>
                </div>
                <div className="absolute left-[50%] top-4 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-50 dark:border-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.8)] -translate-x-1/2 z-10 transition-colors duration-300"></div>
                <div className="w-[45%] pl-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md text-slate-600 dark:text-slate-300 font-medium shadow-sm transition-colors duration-300">
                    <Calendar className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />
                    {exp.period}
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {exp.projects.map((project, pIndex) => (
                  <div 
                    key={pIndex} 
                    className={`p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400 dark:hover:border-blue-500/30 group ${pIndex === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h5 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">{project.name}</h5>
                      {project.award && (
                        <span className="inline-flex shrink-0 items-center px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-semibold text-amber-500 dark:text-yellow-300 animate-pulse">
                          <Award className="w-3.5 h-3.5 mr-1" />
                          {project.award}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
