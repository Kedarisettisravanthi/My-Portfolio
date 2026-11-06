import React from 'react';
import { Terminal, CheckCircle2, Cpu, MapPin, Code2, Coffee, Layers } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: MapPin,
      iconColor: 'text-blue-400',
      bgLight: 'bg-blue-500/15 border-blue-500/30',
      tag: 'LOCATION',
      title: 'Visakhapatnam, India',
      subtitle: 'Andhra Pradesh',
    },
    {
      icon: Code2,
      iconColor: 'text-cyan-400',
      bgLight: 'bg-cyan-500/15 border-cyan-500/30',
      tag: 'PRIMARY LANGUAGE',
      title: 'Python',
      subtitle: 'Backend, OOP & Scripting',
    },
    {
      icon: Coffee,
      iconColor: 'text-purple-400',
      bgLight: 'bg-purple-500/15 border-purple-500/30',
      tag: 'OTHER LANGUAGE',
      title: 'Java',
      subtitle: 'Core Concepts & Data Structures',
    },
    {
      icon: Layers,
      iconColor: 'text-emerald-400',
      bgLight: 'bg-emerald-500/15 border-emerald-500/30',
      tag: 'SPECIALIZATION',
      title: 'Software Development',
      subtitle: 'End-to-End Application Building',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
          <Terminal className="w-4 h-4" />
          <span>Background & Vision</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Narrative */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
          <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
              <span className="w-8 h-[1px] bg-cyan-400"></span>
              <span>Professional Introduction</span>
            </div>

            <p>
              I am a motivated <strong className="text-white font-medium">Computer Science graduate</strong> with a strong interest in software development and programming. I have knowledge of <span className="text-cyan-300">Python</span>, <span className="text-purple-300">Java</span>, <span className="text-blue-300">SQL</span>, <span className="text-blue-300">MySQL</span>, <span className="text-emerald-300">Object-Oriented Programming (OOP)</span>, and <span className="text-amber-300">Data Structures</span>.
            </p>

            <p>
              I enjoy developing applications, exploring new technologies, and improving my problem-solving abilities. Through my academic projects and internship experiences, I have gained practical exposure to programming and software development.
            </p>

            <p className="text-slate-400 text-sm">
              With a disciplined foundation in Computer Science and an eager mindset to engineer scalable solutions, I am eager to contribute effectively to software engineering teams and solve meaningful real-world challenges.
            </p>
          </div>

          <div className="pt-8 mt-6 border-t border-white/5 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Full-Stack Passion</div>
                <div className="text-xs text-slate-400">Backend + Database + UI</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Problem Solver</div>
                <div className="text-xs text-slate-400">Data Structures & Logic</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex items-center gap-5"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${card.bgLight} ${card.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    {card.tag}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {card.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{card.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

