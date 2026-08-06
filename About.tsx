import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY } from '@/data';
import { Reveal } from './anim';

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const activeItem = GALLERY.find((g) => g.id === active);

  return (
    <section id="gallery" className="section-pad bg-[#F6F6F6]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#b8932b] mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" /> Smile Gallery <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-[#2F2F2F]">
            Real Results, <span className="text-gradient-gold">Radiant Smiles</span>
          </h2>
          <p className="mt-5 text-[#6B7280] leading-relaxed">
            A glimpse into the transformations and treatments we deliver every day — explore our
            clinic, technology and patient results.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-4">
            {GALLERY.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActive(item.id)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  item.span ? 'lg:col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 via-[#1F1F1F]/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
                    {item.category}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-white">{item.title}</span>
                </div>
                <span className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-white/15 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </motion.button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center p-5 bg-black/85 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeItem.image} alt={activeItem.title} className="w-full max-h-[80vh] object-contain" />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
                  {activeItem.category}
                </span>
                <p className="text-white font-serif text-lg">{activeItem.title}</p>
              </div>
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 grid place-items-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white/25"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
