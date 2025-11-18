import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516627145497-ae3c4595fae4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1627662166931-4f876026244f?q=80&w=1200&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-extrabold text-white md:text-4xl"
        >
          Moments of Joy
        </motion.h2>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 md:columns-3">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="mb-4 overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <img src={src} alt="Kindergarten" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
