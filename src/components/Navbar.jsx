import { useState } from 'react'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact Us', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between rounded-full bg-white/70 backdrop-blur-md border border-stone-200/70 px-5 py-3 shadow-[0_2px_30px_rgba(0,0,0,0.05)]">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center text-xs tracking-widest">N</div>
            <span className="font-serif text-[17px] text-stone-900">Nyra Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-stone-600">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm hover:text-stone-900 transition-colors">{link.label}</a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-stone-900 text-stone-50 px-4 py-2 text-sm hover:bg-stone-800 transition-colors">Work With Us</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-stone-300 text-stone-700">
            <Menu size={18} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden mt-2 rounded-2xl bg-white/80 backdrop-blur-md border border-stone-200/70 p-4 shadow-xl">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-stone-700 text-sm py-2 px-2 rounded-md hover:bg-stone-100">{link.label}</a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-stone-900 text-stone-50 px-4 py-3 text-sm hover:bg-stone-800">Work With Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
