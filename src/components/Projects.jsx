import React from 'react';
import { FolderGit2, CheckCircle, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function Projects() {
  const features = [
    'Student Authentication & Secure Access',
    'Dynamic Product Listing & Categorization',
    'Product Image Upload & Media Management',
    'Responsive User Interface across devices',
    'Relational Database Integration with MySQL',
  ];

  const technologies = [
    { name: 'Python', color: 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300' },
    { name: 'MySQL', color: 'bg-blue-950/60 border-blue-500/30 text-blue-300' },
    { name: 'Django', color: 'bg-purple-950/60 border-purple-500/30 text-purple-300' },
    { name: 'HTML5', color: 'bg-slate-800 border-slate-700 text-slate-300' },
    { name: 'CSS3', color: 'bg-slate-800 border-slate-700 text-slate-300' },
    { name: 'JavaScript', color: 'bg-slate-800 border-slate-700 text-slate-300' },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
          <FolderGit2 className="w-4 h-4" />
          <span>Portfolio Showcase</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Featured <span className="gradient-text">Project</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Main Project Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-cyan-500/40 shadow-2xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/10 bg-space-900">
            <img
              src="/campusswap.jpg"
              alt="CampusSwap Student Marketplace"
              className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent"></div>

            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full glass-card border border-cyan-400/30 text-cyan-300 font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Full-Stack Application</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>Database: MySQL Server</span>
              <span className="text-cyan-400">Django Backend Engine</span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2">
                Student Marketplace Platform
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                CampusSwap – Student Marketplace
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Developed a student marketplace application using Python and MySQL, allowing students to connect and exchange products through a user-friendly platform.
              </p>

              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Key Features Implemented:
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((t) => (
                  <span
                    key={t.name}
                    className={`px-3 py-1 rounded-lg border font-mono text-xs ${t.color}`}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
              <button
                onClick={() =>
                  alert('CampusSwap live demonstration link will be configured once deployed.')
                }
                className="px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-blue-500/20 text-sm flex items-center gap-2"
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  alert(
                    'CampusSwap repository URL placeholder. Link can be updated with your active GitHub repository.'
                  )
                }
                className="px-5 py-2.5 rounded-xl font-semibold text-slate-300 glass-card hover:bg-white/10 hover:text-white border border-white/10 text-sm flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
