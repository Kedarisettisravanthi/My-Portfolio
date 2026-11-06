import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollPercent((totalScroll / windowHeight) * 100);
      }
      setShowBackToTop(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-space-950 text-slate-100 font-sans relative selection:bg-cyan-500 selection:text-white overflow-x-hidden antialiased">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-50 transition-all duration-100"
        style={{ width: `${scrollPercent}%` }}
      ></div>

      {/* Ambient Lighting Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] animate-pulse-glow"></div>
        <div
          className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-[140px] animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-[28rem] h-[28rem] bg-blue-600/15 rounded-full blur-[130px] animate-pulse-glow"
          style={{ animationDelay: '4s' }}
        ></div>
        <div className="absolute inset-0 bg-grid opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-2xl glass-card border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-500/20 hover:scale-110 z-40 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}

