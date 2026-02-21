import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 px-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300" id="education">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] bottom-0 left-[-100px] transition-colors duration-300" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Education</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors duration-300">
            My academic foundation that paved the way for a career in software engineering.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 group flex items-start gap-6">
            <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight transition-colors duration-300">Sambhram Institute of Technology</h3>
              <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-medium transition-colors duration-300">B.E in Computer Science and Engineering (CSE)</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                Developed a strong foundation in computer science principles, algorithms, and software engineering methodologies. Participated in technical symposiums and academic projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
