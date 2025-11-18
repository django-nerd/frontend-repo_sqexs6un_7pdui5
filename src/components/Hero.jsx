import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-end">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/55 to-white pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-3xl">
          <p className="text-stone-600 tracking-[0.2em] uppercase text-xs mb-6">Nyra Studio</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-stone-900">Design That Feels Expensive.</h1>
          <p className="mt-6 text-stone-600 text-lg md:text-xl max-w-2xl">Premium websites, branding, and digital experiences built with precision, personality, and effortless luxury.</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-stone-900 text-stone-50 px-6 py-3 text-sm hover:bg-stone-800 transition-colors">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-stone-300 text-stone-800 px-6 py-3 text-sm hover:bg-stone-900 hover:text-stone-50 transition-colors">Work With Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
