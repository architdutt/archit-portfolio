import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      
      <footer className="py-8 text-center border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950 text-slate-500 text-sm transition-colors duration-300">
        <p>© {new Date().getFullYear()} Archit Dutt Sharma. All rights reserved.</p>
      </footer>
    </main>
  );
}
