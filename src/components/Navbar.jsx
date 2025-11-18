import { Menu, Sun, Rainbow } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-tr from-amber-400 via-yellow-400 to-orange-500 shadow-inner">
              <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_40%)]" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight text-white">
                Sunflower & Rainbow
              </p>
              <p className="text-xs font-medium text-white/70">Kindergarten</p>
            </div>
          </div>

          <nav className="hidden gap-8 md:flex">
            {[
              ["Programs", "#programs"],
              ["Gallery", "#gallery"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href], i) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_20px_rgba(251,191,36,0.35)] md:inline-block"
            >
              Book a Visit
            </motion.a>
            <button className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
