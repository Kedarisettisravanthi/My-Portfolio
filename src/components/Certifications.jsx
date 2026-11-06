import React from 'react';
import { ShieldCheck, BadgeCheck, Cloud, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      icon: BadgeCheck,
      iconBox: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
      category: 'COMMUNICATION ASSESSMENT',
      title: 'Pearson MEPRO – English Communication Skills',
      issuer: 'Pearson',
      desc: 'Demonstrates proficiency in professional workplace English communication, verbal presentation, and technical reading comprehension.',
      btnBorder: 'hover:border-cyan-400/40',
      linkNotice: 'Pearson MEPRO credential verification placeholder.',
    },
    {
      icon: Cloud,
      iconBox: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
      category: 'CLOUD FUNDAMENTALS',
      title: 'AWS Course Certificate',
      issuer: 'AWS (Amazon Web Services)',
      desc: 'Comprehensive course completion covering cloud infrastructure basics, compute services, storage concepts, and cloud architecture principles.',
      btnBorder: 'hover:border-purple-400/40',
      linkNotice: 'AWS Course Certificate verification placeholder.',
    },
  ];

  return (
    <section id="certifications" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Credentials</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Professional <span className="gradient-text">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certs.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${c.iconBox}`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                  {c.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1 mb-2">{c.title}</h3>
                <p className="text-sm font-semibold text-slate-300 mb-4">
                  Issuing Organization: {c.issuer}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{c.desc}</p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <button
                  onClick={() => alert(c.linkNotice)}
                  className={`w-full py-3 rounded-xl glass-card hover:bg-white/10 text-white font-medium text-sm border border-white/10 ${c.btnBorder} transition-all flex items-center justify-center gap-2`}
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

