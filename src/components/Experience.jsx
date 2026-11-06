import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Python Programming Intern',
      company: 'SVGS',
      color: 'border-cyan-400',
      dotColor: 'bg-cyan-400',
      textColor: 'text-cyan-400',
      tagColor: 'bg-cyan-500/10 text-cyan-300',
      description:
        'Learned Python programming, Object-Oriented Programming (OOP), debugging, and problem-solving techniques through structured hands-on modules.',
      tags: ['Python', 'OOP', 'Debugging'],
      position: 'left',
    },
    {
      title: 'Python Programming Intern',
      company: 'Datapro',
      color: 'border-purple-400',
      dotColor: 'bg-purple-400',
      textColor: 'text-purple-400',
      tagColor: 'bg-purple-500/10 text-purple-300',
      description:
        'Developed Python applications and gained practical software development experience, writing modular code and testing functional modules.',
      tags: ['Application Development', 'Software Engineering'],
      position: 'right',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
          <Briefcase className="w-4 h-4" />
          <span>Practical Exposure</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Internship <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative flex flex-col sm:flex-row items-start sm:items-center group"
            >
              {/* Dot */}
              <div
                className={`absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-space-950 border-2 ${exp.color} flex items-center justify-center z-10 shadow-lg`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${exp.dotColor}`}></div>
              </div>

              {exp.position === 'left' ? (
                <>
                  <div className="w-full sm:w-1/2 sm:pr-12 pl-12 sm:pl-0 sm:text-right">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 sm:text-left">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${exp.tagColor} font-mono text-xs mb-2`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Internship</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">{exp.title}</h3>
                      <div className={`text-sm font-semibold ${exp.textColor} mb-3`}>
                        {exp.company}
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-900 text-slate-300 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="hidden sm:block sm:w-1/2"></div>
                  <div className="w-full sm:w-1/2 sm:pl-12 pl-12 sm:text-left">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 text-left">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${exp.tagColor} font-mono text-xs mb-2`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Internship</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">{exp.title}</h3>
                      <div className={`text-sm font-semibold ${exp.textColor} mb-3`}>
                        {exp.company}
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-900 text-slate-300 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

