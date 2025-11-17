export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-xs">© {new Date().getFullYear()} Aurum Studio — All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white text-xs">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white text-xs">Terms</a>
            <a href="#" className="text-white/60 hover:text-white text-xs">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
