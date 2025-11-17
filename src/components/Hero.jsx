import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] isolate overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-white/70 uppercase tracking-[0.25em] text-xs mb-4">
            New Collection
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-white">
            Modern Jewelry for the Minimalist
          </h1>
          <p className="mt-6 text-white/70 max-w-xl">
            Crafted with precision. Designed to be timeless. Elevate your everyday with pieces that feel as good as they look.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#collections"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-black bg-white hover:bg-white/90 transition"
            >
              Shop Collection
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white border border-white/20 hover:border-white/40 transition"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
