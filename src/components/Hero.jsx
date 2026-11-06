import React, { useState, useEffect } from 'react';
import { Sparkles, FileDown, Mail, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  const phrases = [
    'Python Developer',
    'Software Development Enthusiast',
    'Problem Solver',
    'Computer Science Graduate'
  ];

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      timeout = setTimeout(() => {}, 400);
    } else {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Software Development Roles</span>
          </div>

          <div>
            <p className="text-slate-400 font-mono text-base sm:text-lg mb-2">Hello, I'm</p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
              KEDARISETTI <br />
              <span className="gradient-text">SRAVANTHI</span>
            </h1>
          </div>

          {/* Typing Headline */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 flex items-center min-h-[40px]">
            <span className="text-cyan-400 mr-2 font-mono">&gt;</span>
            <span className="text-slate-200">{text}</span>
            <span className="cursor-blink bg-cyan-400 h-7 w-[3px] ml-1"></span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            I am passionate about building applications, solving complex problems, and continuously learning new technologies to build impactful software.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <Sparkles className="w-4 h-4" />
            </a>

            <a
              href="mailto:kedarisettisravanthi@gmail.com?subject=Resume%20Request%20-%20Kedarisetti%20Sravanthi"
              className="px-7 py-3.5 rounded-xl font-semibold text-slate-200 glass-card hover:bg-white/10 hover:text-white border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 group"
            >
              <FileDown className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4 flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Connect:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400/50 hover:bg-white/10 transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:kedarisettisravanthi@gmail.com"
                aria-label="Direct Email"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-400/50 hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '35s' }}></div>
          <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full border border-purple-500/20 border-dashed animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>

          <div className="relative z-10 w-full max-w-sm sm:max-w-md p-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/30 border border-white/10 backdrop-blur-2xl shadow-2xl">
            <div className="relative overflow-hidden rounded-2xl bg-space-900 border border-white/5">
              <div className="px-4 py-3 bg-space-950/80 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">sravanthi_dev.py</div>
                <div className="w-8"></div>
              </div>

              <div className="relative group overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Kedarisetti Sravanthi"
                  className="w-full h-80 sm:h-96 object-cover object-top filter brightness-95 contrast-105 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent opacity-80"></div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-card border border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-cyan-400">class Developer:</span>
                    <span className="text-emerald-400">● ready</span>
                  </div>
                  <p className="text-slate-400 mt-1 truncate">stack = ["Python", "Java", "SQL", "OOP"]</p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="absolute -top-4 -left-4 p-3 rounded-2xl glass-card border border-cyan-500/40 shadow-xl shadow-cyan-500/20 animate-float-slow flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-yellow-400 flex items-center justify-center font-bold text-space-950 text-sm">
                Py
              </div>
              <div className="pr-1">
                <div className="text-[11px] font-mono text-cyan-400">Primary</div>
                <div className="text-xs font-semibold text-white">Python Core</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 p-3 rounded-2xl glass-card border border-purple-500/40 shadow-xl shadow-purple-500/20 animate-float-delayed flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center font-bold text-white text-sm">
                ☕
              </div>
              <div className="pr-1">
                <div className="text-[11px] font-mono text-purple-400">Secondary</div>
                <div className="text-xs font-semibold text-white">Java & OOP</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-emerald-400 animate-float-slow shadow-lg">
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              <span>MySQL / DBMS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
