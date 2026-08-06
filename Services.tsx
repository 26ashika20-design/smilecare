import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data';
import { Reveal, staggerContainer, staggerItem } from './anim';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-white relative overflow-hidden">
      {/* Decorative gold rings */}
      <div className="pointer-events-none absolute -left-20 top-10 w-72 h-72 rounded-full border border-[#D4AF37]/10 animate-float" />
      <div className="pointer-events-none absolute -right-16 bottom-10 w-48 h-48 rounded-full border border-[#D4AF37]/10 animate-float [animation-delay:2s]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#b8932b] mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" /> Patient Stories <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-[#2F2F2F]">
            Loved by Thousands of <span className="text-gradient-gold">Smiling Patients</span>
          </h2>
          <p className="mt-5 text-[#6B7280] leading-relaxed">
            Real experiences from real patients who trusted us with their smiles.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.id}
              variants={staggerItem}
              className="glass rounded-[24px] p-7 relative gold-ring"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <blockquote className="text-sm text-[#2F2F2F]/80 leading-relaxed">
                "{t.review}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/40"
                />
                <div>
                  <div className="font-semibold text-[#2F2F2F] text-sm">{t.name}</div>
                  <div className="text-xs text-[#b8932b] font-medium">{t.treatment}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
