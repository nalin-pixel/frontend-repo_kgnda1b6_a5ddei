import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-white text-2xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 text-slate-300">Tell me about your project, timeline, and goals.</p>
            <form className="mt-6 grid gap-4">
              <input placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
              <input placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
              <textarea placeholder="Project details" rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
              <button type="button" className="justify-self-start px-4 py-2 rounded-lg bg-fuchsia-500 text-white hover:bg-fuchsia-400 transition-colors">Send</button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-pink-500/10 p-8"
          >
            <div className="grid gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-slate-400 text-sm">Email</div>
                <a href="mailto:you@example.com" className="text-white">you@example.com</a>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-slate-400 text-sm">Location</div>
                <div className="text-white">Remote • Open to worldwide</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
