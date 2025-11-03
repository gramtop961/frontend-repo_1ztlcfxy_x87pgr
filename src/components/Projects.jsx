import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const majorProjects = [
  {
    title: 'DevBoard – Project Management Dashboard',
    desc: 'A Kanban-style productivity app with real-time drag-and-drop, team collaboration, and analytics.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1692699203597-b5a4464f3f9c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXZCb2FyZCUyMCVFMiU4MCU5MyUyMFByb2plY3QlMjBNYW5hZ2VtZW50fGVufDB8MHx8fDE3NjIxNDI1Nzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    demo: 'https://example.com/devboard',
    repo: 'https://github.com/prathamesh/devboard',
  },
  {
    title: 'ShopSwift – E‑commerce Platform',
    desc: 'Full‑stack store with product search, cart, checkout, and admin tools. Payment integration ready.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'REST'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
    demo: 'https://example.com/shopswift',
    repo: 'https://github.com/prathamesh/shopswift',
  },
  {
    title: 'Insightly – Analytics Dashboard',
    desc: 'Interactive charts and APIs for tracking KPIs, with role-based access and audit logs.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    demo: 'https://example.com/insightly',
    repo: 'https://github.com/prathamesh/insightly',
  },
];

const minorProjects = [
  {
    title: 'API Guard',
    desc: 'Rate limiter middleware for Express APIs.',
    repo: 'https://github.com/prathamesh/api-guard',
  },
  {
    title: 'Form Wizard',
    desc: 'Multi‑step form components with validation.',
    repo: 'https://github.com/prathamesh/form-wizard',
  },
  {
    title: 'HookKit',
    desc: 'Reusable React hooks for data fetching.',
    repo: 'https://github.com/prathamesh/hookkit',
  },
  {
    title: 'Tailwind Blocks',
    desc: 'Prebuilt UI blocks for rapid prototyping.',
    repo: 'https://github.com/prathamesh/tw-blocks',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0b0f1a] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Projects</h2>
          <p className="mt-3 text-slate-400">Selected work showcasing product thinking and technical depth.</p>
        </div>

        <h3 className="mb-6 text-xl font-semibold text-slate-200">Major Projects</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {majorProjects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-indigo-400/40"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-indigo-500/90 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-500"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-indigo-400/40"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <h3 className="mt-14 mb-6 text-xl font-semibold text-slate-200">Minor Projects</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {minorProjects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-start justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:border-indigo-400/40"
            >
              <div>
                <h4 className="font-medium text-white">{p.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
              </div>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title} on GitHub`}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 hover:border-indigo-400/40"
              >
                <Github className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
