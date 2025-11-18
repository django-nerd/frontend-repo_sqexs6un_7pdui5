import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 md:py-28 bg-[#F6F3EE]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-900">Let’s Create Something Beautiful.</h3>
            <p className="mt-4 text-stone-700 max-w-md">Fill out the form and we’ll get back to you shortly.</p>

            <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-stone-500 mb-2">Name</label>
                    <input type="text" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-stone-500 mb-2">Company Name</label>
                    <input type="text" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10" placeholder="Acme Co." />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-stone-500 mb-2">Email</label>
                    <input type="email" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-stone-500 mb-2">Phone Number</label>
                    <input type="tel" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10" placeholder="+1 555 000 000" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-stone-500 mb-2">Message</label>
                  <textarea rows="5" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10" placeholder="Tell us a little about your project..." />
                </div>

                <motion.button whileTap={{ scale: 0.98 }} type="button" className="inline-flex items-center rounded-full bg-stone-900 text-stone-50 px-6 py-3 text-sm hover:bg-stone-800 transition-colors">Send Enquiry</motion.button>
              </form>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="sticky top-28">
              <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <p className="text-stone-700 leading-relaxed">We believe in modern craft — clean layouts, gentle typography, and interfaces that feel as good as they look. If that resonates, we’d love to hear from you.</p>
                <div className="mt-6 h-48 rounded-2xl bg-gradient-to-br from-stone-200 to-stone-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
