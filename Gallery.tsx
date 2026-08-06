import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CalendarHeart, Phone } from 'lucide-react';
import { NAV_LINKS, CLINIC } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span
              className={`grid place-items-center w-10 h-10 rounded-xl transition-colors ${
                scrolled ? 'bg-[#1F1F1F]' : 'bg-white/15 backdrop-blur-md border border-white/25'
              }`}
            >
              <span className="font-serif text-lg text-gradient-gold leading-none">S</span>
            </span>
            <span className="leading-tight">
              <span
                className={`block font-serif text-[17px] font-semibold tracking-tight transition-colors ${
                  scrolled ? 'text-[#2F2F2F]' : 'text-white'
                }`}
              >
                SmileCare
              </span>
              <span
                className={`block text-[10px] tracking-[0.22em] uppercase transition-colors ${
                  scrolled ? 'text-[#6B7280]' : 'text-white/70'
                }`}
              >
                Dental Clinic
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? 'text-[#2F2F2F] hover:text-[#b8932b]' : 'text-white/90 hover:text-white after:w-0'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phone.replace(/[^0-9+]/g, '')}`}
              className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-[#2F2F2F] hover:text-[#b8932b]' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{CLINIC.phone}</span>
            </a>
            <a
              href="#appointment"
              className="btn-gold hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              <CalendarHeart className="w-4 h-4" />
              Book Appointment
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden grid place-items-center w-11 h-11 rounded-xl transition-colors ${
                scrolled ? 'bg-[#F6F6F6] text-[#2F2F2F]' : 'bg-white/15 text-white backdrop-blur-md border border-white/20'
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#F6F6F6]">
                <span className="font-serif text-xl font-semibold text-[#2F2F2F]">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid place-items-center w-10 h-10 rounded-xl bg-[#F6F6F6] text-[#2F2F2F]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
                {[...NAV_LINKS, { label: 'Appointment', href: '#appointment' }].map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3.5 text-lg font-medium text-[#2F2F2F] border-b border-[#F6F6F6]/70 hover:text-[#b8932b] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="p-6 border-t border-[#F6F6F6] space-y-3">
                <a
                  href={`tel:${CLINIC.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 text-sm text-[#6B7280]"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  {CLINIC.phone}
                </a>
                <a
                  href="#appointment"
                  onClick={() => setOpen(false)}
                  className="btn-gold flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
                >
                  <CalendarHeart className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
