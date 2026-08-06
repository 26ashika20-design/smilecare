import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, MessageCircle, CalendarHeart } from 'lucide-react';
import { CLINIC } from '@/data';

export default function FloatingUI() {
  const [showTop, setShowTop] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      setShowSticky(window.scrollY > 1400 && window.scrollY < document.body.scrollHeight - 1200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 inset-x-0 z-[80] h-1 origin-left bg-gradient-to-r from-[#b8932b] via-[#D4AF37] to-[#e3c75e]"
      />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-[#1F1F1F] text-white shadow-lg hover:bg-[#D4AF37] hover:text-[#1F1F1F] transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${CLINIC.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>

      {/* Sticky appointment CTA (mobile) */}
      <AnimatePresence>
        {showSticky && (
          <motion.a
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            href="#appointment"
            className="sm:hidden fixed bottom-6 inset-x-16 z-40 btn-gold flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold shadow-xl"
          >
            <CalendarHeart className="w-4 h-4" /> Book Appointment
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
