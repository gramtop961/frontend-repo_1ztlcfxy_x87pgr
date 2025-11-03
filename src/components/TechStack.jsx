import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  'MongoDB',
  'Express.js',
  'React.js',
  'Node.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Git',
  'GitHub',
  'REST APIs',
  'Tailwind CSS',
];

const TechStack = () => {
  return (
    <section id="tech" className="relative bg-[#0b0f1a] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Tech Stack</h2>
          <p className="mt-3 text-slate-400">Tools and technologies I use to build fast, scalable applications.</p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {techs.map((t) => (
            <motion.li
              key={t}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="group rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-slate-200 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-white/10">
                <span className="inline-block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                  {t}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default TechStack;
