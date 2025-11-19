import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl/50 bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-500 shadow-lg shadow-sky-500/30" />
            <span className="text-slate-100 font-semibold tracking-tight group-hover:text-white transition-colors">Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="px-3 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20">
              <span className="inline-flex items-center gap-2"><Mail size={16} /> Hire Me</span>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10 text-slate-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 bg-white/5 text-slate-200">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
