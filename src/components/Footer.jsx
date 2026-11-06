import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="glass-nav border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-xl text-white">
              KEDARISETTI <span className="gradient-text">SRAVANTHI</span>
            </div>
            <p className="text-slate-400 text-sm italic mt-1 font-mono">
              "Building my skills, one project at a time."
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400/50 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:kedarisettisravanthi@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-400/50 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>© 2026 Kedarisetti Sravanthi. All Rights Reserved.</div>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <span className="text-cyan-400">Python Passion & React + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
