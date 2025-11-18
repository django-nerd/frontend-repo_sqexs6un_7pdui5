import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  {
    text: 'Nyra Studio transformed our brand into something that finally reflects our quality. Clean, modern, and everything just feels intentional.',
    author: 'Client Name'
  },
  {
    text: 'Professional, fast, and truly premium. Our website converts better than ever.',
    author: 'Client Name'
  },
  {
    text: 'A seamless process with a beautiful outcome — elevated, thoughtful, and on-brand.',
    author: 'Client Name'
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((p) => (p + 1) % quotes.length)
  const prev = () => setIndex((p) => (p - 1 + quotes.length) % quotes.length)

  return (
    <section className="relative w-full py-24 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-10">What Our Clients Say</h3>

        <div className="rounded-3xl border border-stone-200 bg-[#FAF8F5] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="relative min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="text-stone-800 text-lg md:text-xl leading-relaxed"
              >
                “{quotes[index].text}”
                <footer className="mt-4 text-stone-500">— {quotes[index].author}</footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button onClick={prev} className="inline-flex items-center rounded-full border border-stone-300 text-stone-700 px-4 py-2 text-sm hover:bg-stone-900 hover:text-stone-50 transition-colors">Prev</button>
            <div className="flex items-center gap-2">
              {quotes.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-stone-900' : 'bg-stone-300'}`} />
              ))}
            </div>
            <button onClick={next} className="inline-flex items-center rounded-full border border-stone-300 text-stone-700 px-4 py-2 text-sm hover:bg-stone-900 hover:text-stone-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}
