import React, { useState } from 'react';
import { Send, Mail, PhoneCall, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailto = `mailto:kedarisettisravanthi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`
    )}`;

    setStatus('Opening your default email client...');
    setTimeout(() => {
      window.location.href = mailto;
      setStatus('Thank you! Your email client has been opened.');
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
          <Send className="w-4 h-4" />
          <span>Get in Touch</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-300 text-base sm:text-lg mt-6 max-w-xl mx-auto">
          "Have an opportunity, project idea, or collaboration in mind? I'd love to hear from you. Feel free to get in touch!"
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <a
            href="mailto:kedarisettisravanthi@gmail.com"
            className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex items-center gap-5 block group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono uppercase text-slate-400">Email Address</div>
              <div className="text-base sm:text-lg font-bold text-white truncate group-hover:text-cyan-400 transition-colors">
                kedarisettisravanthi@gmail.com
              </div>
              <div className="text-xs text-slate-400">Click to compose email</div>
            </div>
          </a>

          <a
            href="tel:8977669109"
            className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex items-center gap-5 block group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-slate-400">Phone Number</div>
              <div className="text-base sm:text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                +91 8977669109
              </div>
              <div className="text-xs text-slate-400">Available during business hours</div>
            </div>
          </a>

          <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-slate-400">Location</div>
              <div className="text-base sm:text-lg font-bold text-white">
                Visakhapatnam, Andhra Pradesh, India
              </div>
              <div className="text-xs text-slate-400">Open to local & remote opportunities</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-4 py-3 rounded-xl bg-space-900 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-space-900 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Software Engineer Opportunity / Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-space-900 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Sravanthi, we came across your portfolio and would love to discuss..."
                className="w-full px-4 py-3 rounded-xl bg-space-900 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>

            {status && (
              <p className="text-center text-xs font-mono text-cyan-400">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

