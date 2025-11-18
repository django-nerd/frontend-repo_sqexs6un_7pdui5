import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F6F3EE]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-100" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900">A Studio Built for Brands That Want More.</h2>
            <p className="mt-6 text-stone-700 leading-relaxed">At Nyra Studio, we design with intention.<br/>Every brand has a story — we turn yours into an experience that feels elevated, modern, and undeniably you.<br/>We specialise in clean design, compelling visuals, and websites that convert without ever looking try-hard. High-end doesn't need to be complicated — it just needs to feel right.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                'Bespoke Web Design',
                'Branding & Identity',
                'Strategy & Positioning',
                'Conversion-Ready UX/UI',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-stone-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <span className="h-2 w-2 rounded-full bg-stone-900" />
                  <span className="text-stone-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
