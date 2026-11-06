import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-blue-500/20">
            <div className="w-full h-full bg-space-950 rounded-[10px] flex items-center justify-center">
              <span className="font-display font-bold text-lg text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-purple-400">
                KS
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              KEDARISETTI SRAVANTHI
            </span>
            <span className="text-xs text-slate-400 font-mono tracking-wider">
              PYTHON DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-md shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg bg-space-850 text-slate-300 hover:text-white border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-card border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

