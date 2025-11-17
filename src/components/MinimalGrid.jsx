import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Sable Ring',
    price: '$120',
    image:
      'https://images.unsplash.com/photo-1615220368123-29f2f8d24731?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Arc Necklace',
    price: '$180',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Loop Earrings',
    price: '$90',
    image:
      'https://images.unsplash.com/photo-1603575449299-0c54f2d16749?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Orbit Bracelet',
    price: '$150',
    image:
      'https://images.unsplash.com/photo-1623296116993-6e0b17ec3a07?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function MinimalGrid() {
  return (
    <section id="collections" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-white text-2xl sm:text-3xl font-light">Featured Pieces</h2>
          <a href="#" className="text-white/60 hover:text-white text-sm">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900"
            >
              <img
                src={p.image}
                alt={p.name}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">{p.name}</p>
                  <p className="text-white/60 text-xs">{p.price}</p>
                </div>
                <button className="text-black bg-white/90 hover:bg-white rounded-full text-xs px-3 py-1">Add</button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
