import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative pb-24 pt-10">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_0%_100%,rgba(251,191,36,0.1),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          <div className="rounded-[22px] bg-gradient-to-br from-amber-400/10 via-yellow-400/5 to-slate-900/60 p-8 sm:p-12">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl"
            >
              Ready to see our world in bloom?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-3 max-w-2xl text-white/90"
            >
              Schedule a tour to meet our caring teachers, explore our bright classrooms, and discover how we nurture every child’s unique spark.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="mailto:hello@sunflowerrainbow.school"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
              >
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_rgba(251,191,36,0.35)]"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
