import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I'm a front-end engineer and product designer crafting interfaces that feel effortless. My approach combines
              systems thinking, tasteful motion, and a love for minimal aesthetics.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                ['JavaScript', 'TypeScript'],
                ['React', 'Next.js'],
                ['Tailwind', 'Framer Motion'],
                ['Figma', 'Spline'],
              ].map((pair, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4 text-slate-200">
                  <div className="font-medium">{pair[0]}</div>
                  <div className="text-slate-400">{pair[1]}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-violet-500/10 border border-white/10"
          >
            <div className="grid grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-video rounded-xl bg-white/5 border border-white/10" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
