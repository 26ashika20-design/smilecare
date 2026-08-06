import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { IMAGES, STATS } from '@/data';
import { Reveal, Counter } from './anim';

const POINTS = [
  'State-of-the-art sterilization & safety protocols',
  'Personalized treatment plans for every patient',
  'Award-winning specialists across all disciplines',
  'Calm, spa-like environment for total comfort',
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image side */}
          <Reveal className="relative">
            <div className="relative">
              <div className="rounded-[28px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">
                <img
                  src={IMAGES.aboutClinic}
                  alt="SmileCare Dental Clinic interior"
                  className="w-full h-[520px] object-cover"
                />
              </div>
              {/* Floating secondary image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-10 -right-4 sm:-right-10 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={IMAGES.aboutSecondary}
                  alt="Dentist consulting patient"
                  className="w-full h-36 sm:h-44 object-cover"
                />
              </motion.div>
              {/* Gold ring decor */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-[#D4AF37]/30 animate-float" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full border border-[#D4AF37]/40" />
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#b8932b] mb-4">
                <span className="w-8 h-px bg-[#D4AF37]" /> About Our Clinic
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-[#2F2F2F]">
                A Decade of Crafting <span className="text-gradient-gold">Confident Smiles</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-[#6B7280] leading-relaxed">
                Founded in 2014, SmileCare Dental Clinic was built on a simple belief: dental care
                should feel as refined as it is precise. From our first chair to our flagship
                five-suite practice, we have combined advanced technology with a genuinely
                personal approach — giving every patient a calm, luxurious experience and
                results that last a lifetime.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 grid sm:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-[#F6F6F6] p-5 border border-[#F6F6F6]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-[#D4AF37]/15">
                      <Target className="w-4.5 h-4.5 text-[#b8932b]" />
                    </span>
                    <h4 className="font-serif font-semibold text-[#2F2F2F]">Our Mission</h4>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    To deliver world-class dental care that is precise, comfortable and
                    accessible — helping every patient smile with confidence.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#F6F6F6] p-5 border border-[#F6F6F6]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-[#D4AF37]/15">
                      <Eye className="w-4.5 h-4.5 text-[#b8932b]" />
                    </span>
                    <h4 className="font-serif font-semibold text-[#2F2F2F]">Our Vision</h4>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    To be the most trusted luxury dental destination, redefining patient
                    experience through technology and human care.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-[#2F2F2F]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center py-8 px-4 rounded-2xl bg-gradient-to-b from-[#F6F6F6] to-white border border-[#F6F6F6]">
                <div className="font-serif text-4xl lg:text-5xl font-semibold text-gradient-gold">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-xs lg:text-sm text-[#6B7280] tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
