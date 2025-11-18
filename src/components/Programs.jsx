import { motion } from 'framer-motion';
import { Star, Palette, BookOpen, Music, Rainbow, Sun } from 'lucide-react';

const programs = [
  {
    title: 'Sunflower Seeds (Ages 3-4)',
    desc: 'Play-based learning to grow curiosity and confidence.',
    icon: Sun,
    color: 'from-amber-300 via-yellow-300 to-orange-300',
  },
  {
    title: 'Rainbow Explorers (Ages 4-5)',
    desc: 'Creative projects that mix art, music, and early literacy.',
    icon: Rainbow,
    color: 'from-pink-300 via-rose-300 to-orange-300',
  },
  {
    title: 'Bright Minds Club',
    desc: 'STEM story-time and hands-on experiments for little thinkers.',
    icon: BookOpen,
    color: 'from-sky-300 via-cyan-300 to-teal-300',
  },
  {
    title: 'Art & Music Garden',
    desc: 'Paint, craft, sing, and move — self-expression in full bloom.',
    icon: Music,
    color: 'from-purple-300 via-fuchsia-300 to-pink-300',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(96,165,250,0.08),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-extrabold text-white md:text-4xl"
        >
          Programs that Bloom
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${p.color} text-slate-900 shadow`}>
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
