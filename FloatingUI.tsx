import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube } from './SocialIcons';
import { CLINIC, IMAGES } from '@/data';
import { Reveal } from './anim';

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      {/* Top banner with reception image */}
      <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
        <img
          src={IMAGES.contact}
          alt="SmileCare reception"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F]/55 to-[#1F1F1F]/40" />
        <Reveal className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#D4AF37] mb-3">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            We'd Love to <span className="text-gradient-gold">Hear From You</span>
          </h2>
          <p className="mt-4 text-white/75 max-w-xl">
            Visit our clinic, call our team, or send us a message — we're here to help you smile.
          </p>
        </Reveal>
      </div>

      {/* Contact details + map */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 -mt-20 relative z-10 pb-24">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <Reveal>
              <InfoCard icon={MapPin} title="Visit Us">
                <p className="text-sm text-[#6B7280] leading-relaxed">{CLINIC.address}</p>
              </InfoCard>
            </Reveal>
            <Reveal delay={0.08}>
              <InfoCard icon={Phone} title="Call Us">
                <a href={`tel:${CLINIC.phone.replace(/[^0-9+]/g, '')}`} className="block text-sm text-[#6B7280] hover:text-[#b8932b]">{CLINIC.phone}</a>
                <a href={`tel:${CLINIC.emergency.replace(/[^0-9+]/g, '')}`} className="block text-sm text-[#6B7280] hover:text-[#b8932b] mt-1">
                  <span className="text-red-500 font-semibold">24/7 Emergency:</span> {CLINIC.emergency}
                </a>
              </InfoCard>
            </Reveal>
            <Reveal delay={0.16}>
              <InfoCard icon={Mail} title="Email Us">
                <a href={`mailto:${CLINIC.email}`} className="text-sm text-[#6B7280] hover:text-[#b8932b]">{CLINIC.email}</a>
              </InfoCard>
            </Reveal>
            <Reveal delay={0.24}>
              <InfoCard icon={Clock} title="Working Hours">
                <ul className="space-y-1.5">
                  {CLINIC.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-[#6B7280]">{h.day}</span>
                      <span className="text-[#2F2F2F] font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-[24px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] h-full min-h-[340px] bg-[#F6F6F6]">
              <iframe
                title="SmileCare Dental Clinic location"
                src="https://www.google.com/maps?q=Banjara+Hills+Road+No+12+Hyderabad&output=embed"
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        {/* Socials */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#F6F6F6] p-6">
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#2F2F2F]">Follow SmileCare</h3>
              <p className="text-sm text-[#6B7280]">Tips, transformations and clinic updates.</p>
            </div>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  className="grid place-items-center w-11 h-11 rounded-full bg-white border border-[#F6F6F6] text-[#2F2F2F] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-colors shadow-sm"
                >
                  <Icon className="w-4.5 h-4.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-6 gold-ring">
      <div className="flex items-center gap-3 mb-3">
        <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#b8932b] text-white">
          <Icon className="w-5 h-5" />
        </span>
        <h4 className="font-serif font-semibold text-[#2F2F2F]">{title}</h4>
      </div>
      {children}
    </div>
  );
}
