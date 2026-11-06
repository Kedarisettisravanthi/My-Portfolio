import React from 'react';
import {
  Cpu,
  Code,
  Database,
  Boxes,
  Check,
  Sparkles,
  MessageSquare,
  Compass,
  Users,
  RefreshCw,
  Zap,
  LineChart,
  Clock,
} from 'lucide-react';

export default function Skills() {
  const softSkills = [
    { name: 'Communication', icon: MessageSquare, color: 'text-cyan-400', border: 'hover:border-cyan-400/40' },
    { name: 'Leadership', icon: Compass, color: 'text-purple-400', border: 'hover:border-purple-400/40' },
    { name: 'Teamwork', icon: Users, color: 'text-blue-400', border: 'hover:border-blue-400/40' },
    { name: 'Adaptability', icon: RefreshCw, color: 'text-emerald-400', border: 'hover:border-emerald-400/40' },
    { name: 'Quick Learner', icon: Zap, color: 'text-amber-400', border: 'hover:border-amber-400/40' },
    { name: 'Analytical Thinking', icon: LineChart, color: 'text-cyan-400', border: 'hover:border-cyan-400/40' },
    { name: 'Time Management', icon: Clock, color: 'text-rose-400', border: 'hover:border-rose-400/40' },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
          <Cpu className="w-4 h-4" />
          <span>Competencies & Technologies</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Languages */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Programming Languages</h3>
            <p className="text-slate-400 text-sm mb-6">
              Foundational syntax, logical implementation, and algorithmic programming.
            </p>

            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-space-900/80 border border-white/5 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5 font-semibold text-white">
                    <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                    <span>Python</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">Primary</span>
                </div>
                <div className="h-2 w-full bg-space-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-space-900/80 border border-white/5 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5 font-semibold text-white">
                    <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                    <span>Java</span>
                  </div>
                  <span className="text-xs font-mono text-blue-400">Secondary</span>
                </div>
                <div className="h-2 w-full bg-space-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
            <Check className="w-4 h-4 text-cyan-400" />
            <span>Clean Code & Standard Practices</span>
          </div>
        </div>

        {/* Database */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Database Technologies</h3>
            <p className="text-slate-400 text-sm mb-6">
              Relational schema design, querying, manipulation, and database management.
            </p>

            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-space-900/80 border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">SQL</span>
                  <span className="text-xs font-mono text-blue-400">Queries & DDL/DML</span>
                </div>
                <div className="h-2 w-full bg-space-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-space-900/80 border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">MySQL</span>
                  <span className="text-xs font-mono text-blue-400">RDBMS Integration</span>
                </div>
                <div className="h-2 w-full bg-space-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-space-900/80 border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">DBMS</span>
                  <span className="text-xs font-mono text-blue-400">Architecture & Normalization</span>
                </div>
                <div className="h-2 w-full bg-space-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-400" />
            <span>Relational Schema Modeling</span>
          </div>
        </div>

        {/* Concepts */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
              <Boxes className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Core Concepts</h3>
            <p className="text-slate-400 text-sm mb-6">
              Architectural paradigms and fundamental algorithmic data structures.
            </p>

            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-space-900/80 border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5 font-semibold text-white">
                    <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                    <span>OOP</span>
                  </div>
                  <span className="text-xs font-mono text-purple-400">Encapsulation / Inheritance</span>
                </div>
                <div className="h-2 w-full bg-space-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-space-900/80 border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5 font-semibold text-white">
                    <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                    <span>Data Structures</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">Arrays, Stacks, Trees</span>
                </div>
                <div className="h-2 w-full bg-space-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
            <Check className="w-4 h-4 text-purple-400" />
            <span>Modular & Maintainable Logic</span>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mt-16 glass-card rounded-3xl p-8 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Professional Soft Skills
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Key interpersonal attributes that enhance collaboration and project delivery.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 self-start sm:self-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Team Player
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`px-5 py-2.5 rounded-xl bg-space-900/90 border border-white/5 ${skill.border} text-slate-200 text-sm font-medium flex items-center gap-2 transition-transform hover:-translate-y-1`}
              >
                <Icon className={`w-4 h-4 ${skill.color}`} />
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

