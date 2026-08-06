import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data';
import { Reveal, staggerContainer, staggerItem } from './anim';

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#F6F6F6]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#b8932b] mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" /> Our Services <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-[#2F2F2F]">
            Comprehensive Care for <span className="text-gradient-gold">Every Smile</span>
          </h2>
          <p className="mt-5 text-[#6B7280] leading-relaxed">
            From routine cleanings to complete smile transformations, every treatment is delivered
            with precision, comfort and an unwavering focus on your wellbeing.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.id}
              variants={staggerItem}
              className="group bg-white rounded-[24px] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-white hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-2.5"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-white/85 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-[#2F2F2F]">
                  {service.price}
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-[#1F1F1F]/70 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {service.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-[#2F2F2F] group-hover:text-[#b8932b] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <a
                  href="#appointment"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F2F2F] group-hover:text-[#b8932b] transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
