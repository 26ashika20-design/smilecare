import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube } from './SocialIcons';
import { NAV_LINKS, SERVICES, CLINIC } from '@/data';

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-20 pb-8 relative overflow-hidden">
      <div className="pointer-events-none absolute -left-16 -top-16 w-64 h-64 rounded-full border border-[#D4AF37]/10" />
      <div className="pointer-events-none absolute -right-20 bottom-20 w-80 h-80 rounded-full border border-[#D4AF37]/5" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/5 border border-white/10">
                <span className="font-serif text-xl text-gradient-gold leading-none">S</span>
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg font-semibold">SmileCare</span>
                <span className="block text-[10px] tracking-[0.22em] uppercase text-white/50">Dental Clinic</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Luxury dental care with advanced technology, experienced specialists and a genuinely
              personal approach — for every smile.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid place-items-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-[#D4AF37] hover:text-[#1F1F1F] hover:border-[#D4AF37] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#appointment"
                  className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-5">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${CLINIC.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" /> {CLINIC.phone}
              </a>
              <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" /> {CLINIC.email}
              </a>
              <p className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" /> {CLINIC.address}
              </p>
            </div>
          </div>
        </div>

        {/* Emergency strip */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <div>
              <p className="font-semibold text-sm">Dental Emergency?</p>
              <p className="text-xs text-white/60">We're available 24/7 — call us immediately.</p>
            </div>
          </div>
          <a
            href={`tel:${CLINIC.emergency.replace(/[^0-9+]/g, '')}`}
            className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <Phone className="w-4 h-4" /> {CLINIC.emergency}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-white/50">
          <p>Copyright © 2026 SmileCare Dental Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
