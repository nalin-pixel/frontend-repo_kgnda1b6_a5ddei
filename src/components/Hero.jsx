import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden scroll-mt-24">
      <div className="absolute inset-0">
        {/* Purple/Pink themed spline scene (neon rings) */}
        <Spline scene="https://prod.spline.design/2K7vR3c1zDmoq6po/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Available for freelance
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Minimal, sharp, vibrant.
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-xl">
            Interfaces with purposeful motion and a refined purple aesthetic.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-400 transition-colors shadow-lg/50">
              View Work
            </a>
            <a href="#contact" className="px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5">
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950" />
    </section>
  )
}
