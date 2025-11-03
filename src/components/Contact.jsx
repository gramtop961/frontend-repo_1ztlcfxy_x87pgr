import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name || 'Someone'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:prathamesh@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-[#0b0f1a] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s Connect</h2>
          <p className="mt-3 text-slate-400">Have an opportunity or idea? I’d love to chat.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#0e1422] px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#0e1422] px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-[#0e1422] px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                  placeholder="Tell me about the project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2.5 font-medium text-white shadow-lg shadow-indigo-500/20 hover:opacity-95"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Find me online</h3>
              <p className="mt-2 text-sm text-slate-400">
                I share projects, tips, and open-source work regularly.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://github.com/prathamesh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-200 hover:border-indigo-400/40"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prathamesh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-200 hover:border-indigo-400/40"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
                <a
                  href="mailto:prathamesh@example.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-200 hover:border-indigo-400/40"
                >
                  <Mail className="h-5 w-5" /> Email
                </a>
              </div>
            </div>
            <p className="mt-10 text-center text-xs text-slate-500">© Prathamesh 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
