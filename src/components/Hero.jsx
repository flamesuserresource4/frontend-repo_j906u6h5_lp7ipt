import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Warm golden gradient overlay to harmonize with sunflower theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-400/10 via-orange-400/10 to-slate-950/70" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
          A bright start for little minds
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1, ease: 'easeOut' }}
          className="mt-6 bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl"
        >
          Sunflower & Rainbow Kindergarten
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
          className="mx-auto mt-4 max-w-2xl text-lg text-white/90"
        >
          A joyful place where curiosity blossoms and imaginations paint the sky.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#programs"
            className="group rounded-xl bg-white px-6 py-3 text-slate-900 shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)]"
          >
            Explore Programs
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:brightness-110"
          >
            Book a Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
