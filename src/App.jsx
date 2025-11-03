import React from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f1a] text-slate-100">
      {/* Simple top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f1a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
            <span className="text-sm font-medium text-white">Prathamesh • MERN Developer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#tech" className="hover:text-white">Tech</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
