import { motion } from 'framer-motion';
import { Award, Microscope, HeartPulse, Wallet } from 'lucide-react';
import { WHY_CHOOSE } from '@/data';
import { staggerContainer, staggerItem } from './anim';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Microscope,
  HeartPulse,
  Wallet,
};

export default function WhyChooseUs() {
  return (
    <section className="relative -mt-20 z-20 px-5 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {WHY_CHOOSE.map((feature) => {
          const Icon = ICONS[feature.icon];
          return (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="gold-ring glass rounded-[24px] p-7 text-center group"
            >
              <div className="mx-auto mb-5 grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-[#D4AF37]/5 border border-[#D4AF37]/20 group-hover:from-[#D4AF37] group-hover:to-[#b8932b] transition-all duration-500">
                <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#2F2F2F] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
