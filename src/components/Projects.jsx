import { motion } from 'framer-motion'

const projects = [
  { name: 'Sol Haus', tag: 'Website + Brand Identity' },
  { name: 'Eunoia Skin', tag: 'Shopify Build + UX' },
  { name: 'Terra Aura', tag: 'Minimal Rebrand' },
  { name: 'Noir Atelier', tag: 'Editorial Web Build' },
  { name: 'Cleo Homes', tag: 'Brand System' },
  { name: 'Oro & Co', tag: 'Luxury E‑Comm' },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 md:py-28 bg-[#F6F3EE]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h3 className="font-serif text-3xl md:text-4xl text-stone-900">Selected Work</h3>
          <a href="#" className="hidden sm:inline-flex items-center rounded-full border border-stone-300 text-stone-800 px-4 py-2 text-sm hover:bg-stone-900 hover:text-stone-50 transition-colors">View All Projects</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.name} href="#" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group block overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-100">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.1),transparent_50%)]" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-stone-900">{p.name}</h4>
                  <span className="text-xs text-stone-500">Case Study</span>
                </div>
                <p className="text-stone-600 text-sm mt-1">{p.tag}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <a href="#" className="inline-flex items-center rounded-full border border-stone-300 text-stone-800 px-5 py-3 text-sm hover:bg-stone-900 hover:text-stone-50 transition-colors">View All Projects</a>
        </div>
      </div>
    </section>
  )
}
