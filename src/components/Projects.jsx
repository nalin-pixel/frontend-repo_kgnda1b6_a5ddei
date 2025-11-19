import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const items = [
  {
    title: 'Product Dashboard',
    desc: 'A measured analytics interface with accessible motion and crisp typography.',
    link: '#',
  },
  {
    title: 'Interaction System',
    desc: 'Reusable micro-interactions for teams that value clarity over flash.',
    link: '#',
  },
  {
    title: '3D UI Studies',
    desc: 'Subtle 3D depth integrated into pragmatic UI patterns.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Work</h2>
          <a href="#" className="text-slate-300 hover:text-white">All projects</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="aspect-video bg-gradient-to-br from-fuchsia-500/15 via-violet-500/15 to-pink-500/15" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{item.title}</div>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                  <ExternalLink className="text-slate-400 group-hover:text-white transition-colors" size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
