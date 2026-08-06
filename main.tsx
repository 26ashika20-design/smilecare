import { motion } from 'framer-motion';
import { CalendarHeart, Stethoscope, ChevronDown, Star } from 'lucide-react';
import { IMAGES, CLINIC } from '@/data';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroInterior}
          alt="Luxury SmileCare dental clinic interior"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/85 via-[#1F1F1F]/55 to-[#1F1F1F]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/70 via-transparent to-[#1F1F1F]/30" />
      </div>

      {/* Floating decorative gold rings */}
      <div className="pointer-events-none absolute -right-24 top-1/4 w-96 h-96 rounded-full border border-[#D4AF37]/20 animate-float" />
      <div className="pointer-events-none absolute right-32 top-1/3 w-52 h-52 rounded-full border border-white/10 animate-float [animation-delay:1.5s]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-28 pb-20 w-full"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 mb-7"
          >
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </span>
            <span className="text-xs font-medium text-white/90 tracking-wide">
              Rated 5.0 by 2,400+ patients
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-serif text-4xl sm:text-5xl lg:text-[4.2rem] font-semibold leading-[1.08] text-white tracking-tight"
          >
            Experience Luxury <br className="hidden sm:block" />
            Dental Care With <span className="text-gradient-gold">Confidence</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 text-lg text-white/80 max-w-xl leading-relaxed"
          >
            Providing world-class dental care using advanced technology, experienced specialists,
            and personalized treatment plans for every patient.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              className="btn-gold inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold"
            >
              <CalendarHeart className="w-4.5 h-4.5" />
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-white border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/15 transition-all duration-300"
            >
              <Stethoscope className="w-4.5 h-4.5" />
              Explore Services
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Insurance Accepted
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> 0% Payment Plans
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> 24/7 Emergency Care
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </motion.a>

      {/* Emergency strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 hidden md:block">
        <div className="mx-auto max-w-7xl px-8 pb-6 flex justify-end">
          <a
            href={`tel:${CLINIC.emergency.replace(/[^0-9+]/g, '')}`}
            className="glass-dark rounded-full px-4 py-2.5 flex items-center gap-2 text-white/90 text-xs hover:text-white transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            24/7 Emergency · {CLINIC.emergency}
          </a>
        </div>
      </div>
    </section>
  );
}
