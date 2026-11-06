import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      icon: GraduationCap,
      level: 'Undergraduate Degree',
      title: 'B.Sc. Computer Science',
      score: 'CGPA: 8.76',
      desc: 'Rigorous coursework focusing on programming methodologies, algorithms, DBMS, and computing fundamentals.',
      badgeColor: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300',
      iconBox: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
      glow: 'bg-cyan-500/10',
    },
    {
      icon: BookOpen,
      level: 'Higher Secondary Education',
      title: 'Intermediate MPC',
      score: 'Percentage: 81.3%',
      desc: 'Specialized in Mathematics, Physics, and Chemistry, providing strong analytical and quantitative foundations.',
      badgeColor: 'bg-blue-950/80 border-blue-500/40 text-blue-300',
      iconBox: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
      glow: 'bg-blue-500/10',
    },
    {
      icon: Award,
      level: 'Secondary School',
      title: 'SSC',
      score: 'CGPA: 9.2',
      desc: 'Core academic curriculum building strong disciplined foundational skills in mathematics and general sciences.',
      badgeColor: 'bg-purple-950/80 border-purple-500/40 text-purple-300',
      iconBox: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
      glow: 'bg-purple-500/10',
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Background</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Education <span className="gradient-text">Milestones</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educations.map((edu, idx) => {
          const Icon = edu.icon;
          return (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div
                className={`absolute -top-12 -right-12 w-28 h-28 ${edu.glow} rounded-full blur-xl pointer-events-none`}
              ></div>

              <div>
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${edu.iconBox}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  {edu.level}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1 mb-4">
                  {edu.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{edu.desc}</p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                  Performance:
                </span>
                <div
                  className={`px-4 py-1.5 rounded-full border font-bold text-sm ${edu.badgeColor}`}
                >
                  {edu.score}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

