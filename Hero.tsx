import { motion } from 'framer-motion';
import { CalendarHeart, Stethoscope, GraduationCap, Clock } from 'lucide-react';
import { DOCTORS } from '@/data';
import { Reveal, staggerContainer, staggerItem } from './anim';

export default function Doctors() {
  return (
    <section id="doctors" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#b8932b] mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" /> Our Specialists <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-[#2F2F2F]">
            Meet the Experts Behind <span className="text-gradient-gold">Your Smile</span>
          </h2>
          <p className="mt-5 text-[#6B7280] leading-relaxed">
            Board-certified specialists with decades of combined experience, dedicated to delivering
            exceptional results with a gentle, personal touch.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {DOCTORS.map((doc) => (
            <motion.article
              key={doc.id}
              variants={staggerItem}
              className="group bg-white rounded-[24px] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-[#F6F6F6] hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-2.5"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-[#1F1F1F]/15 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="font-serif text-lg font-semibold text-white">{doc.name}</h3>
                  <p className="text-[11px] text-[#D4AF37] tracking-wide font-medium uppercase mt-0.5">
                    {doc.specialization}
                  </p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{doc.qualification}</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                  <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{doc.experience} of clinical practice</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                  <Stethoscope className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{doc.specialization}</span>
                </div>
                <a
                  href="#appointment"
                  className="btn-gold mt-2 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
                >
                  <CalendarHeart className="w-4 h-4" />
                  Book Consultation
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
