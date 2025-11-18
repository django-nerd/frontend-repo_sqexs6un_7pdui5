import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web Design',
    desc: 'Custom-built sites that feel premium, polished, and uniquely tailored.'
  },
  {
    title: 'Branding',
    desc: 'Visual identities that elevate your presence across every touchpoint.'
  },
  {
    title: 'UX/UI Design',
    desc: 'Smart, intuitive, human-first interfaces that keep users engaged.'
  },
  {
    title: 'Content Support',
    desc: 'From visuals to microcopy — we help you show up consistently and beautifully.'
  }
]

export default function Services() {
  return (
    <section className="relative w-full py-24 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h3 className="font-serif text-3xl md:text-4xl text-stone-900">What We Do</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group rounded-3xl border border-stone-200 bg-[#FAF8F5] hover:bg-white p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all">
              <div className="flex items-start justify-between">
                <h4 className="font-serif text-xl text-stone-900">{s.title}</h4>
                <div className="h-8 w-8 rounded-full bg-stone-900/90 text-stone-50 flex items-center justify-center text-[11px]">0{i+1}</div>
              </div>
              <p className="mt-4 text-stone-700 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
