import { ShieldCheck, Truck, RefreshCw } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Premium Materials', desc: 'Hypoallergenic, nickel-free, and long-lasting finishes.' },
  { icon: Truck, title: 'Fast & Secure Shipping', desc: 'Tracked worldwide delivery with protective packaging.' },
  { icon: RefreshCw, title: '30-Day Returns', desc: 'Simple, hassle-free returns on all items.' },
]

export default function Assurance() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white/10 p-2 border border-white/10">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium">{title}</h3>
                  <p className="text-white/60 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
