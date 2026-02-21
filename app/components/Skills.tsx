import React from 'react';
import { LayoutTemplate, Database, Cloud, Bot } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <LayoutTemplate className="w-6 h-6 text-blue-400" />,
    skills: ['Next.js', 'ReactJS', 'AngularJS', 'JavaScript', 'HTML/CSS/SCSS'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    title: 'Backend & DB',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: ['.NET Core', 'C#', 'REST API', 'Microservices', 'SQL Server'],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 text-emerald-400" />,
    skills: ['Azure (CI/CD, DevOps)', 'Git', 'Firebase'],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30'
  },
  {
    title: 'AI & Prompt Engineering',
    icon: <Bot className="w-6 h-6 text-amber-400" />,
    skills: [
      'GitHub Copilot: accelerating full-stack development speed',
      'Google Antigravity: configuring and tuning agentic tools for automated workflows',
      'Agentic AI Training: developing AI agents to handle complex multi-step reasoning',
      'Prompt Engineering: building custom prompt pipelines for specialized tasks'
    ],
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30'
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300" id="skills">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] top-40 right-[-100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Technical Stack</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors duration-300">
            A comprehensive toolkit that enables me to build end-to-end solutions, from intuitive user interfaces to scalable, resilient backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className={`p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-transparent dark:${category.borderColor} backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-${category.color.split('-')[1]}/10 group`}
            >
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${category.color} border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 tracking-tight transition-colors duration-300">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start text-slate-600 dark:text-slate-300 group/item transition-colors duration-300">
                    <span className="w-2 h-2 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600 mr-3 mt-2.5 group-hover/item:bg-blue-500 dark:group-hover/item:bg-blue-400 transition-colors"></span>
                    <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors text-lg leading-snug">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
