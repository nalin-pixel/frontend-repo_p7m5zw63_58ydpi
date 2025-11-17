import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-500" />
            <span className="text-white/90 tracking-[0.25em] text-sm font-medium">
              AURUM
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-full transition"
            >
              <ShoppingBag size={16} />
              <span className="text-sm">Cart</span>
            </a>
          </nav>

          <button
            className="md:hidden text-white/90 p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex w-max items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-full transition"
            >
              <ShoppingBag size={16} />
              <span className="text-sm">Cart</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
