export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center text-xs tracking-widest">N</div>
            <span className="font-serif text-[17px] text-stone-900">Nyra Studio</span>
          </a>

          <p className="text-sm text-stone-500">© {new Date().getFullYear()} Nyra Studio — Made with intention.</p>

          <div className="flex items-center gap-4 text-sm text-stone-600">
            <a href="#" className="hover:text-stone-900">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
