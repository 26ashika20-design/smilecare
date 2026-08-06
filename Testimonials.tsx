import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarHeart, CheckCircle2, Loader2, AlertCircle, User, Phone, Mail, MessageSquare, Stethoscope, Calendar, Clock, MapPin } from 'lucide-react';
import { SERVICES, IMAGES, CLINIC } from '@/data';
import { Reveal } from './anim';
import { supabase } from '@/lib/supabase';

const TIMES = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Appointment() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    time: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('appointments').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      treatment: form.treatment,
      preferred_date: form.date,
      preferred_time: form.time,
      message: form.message.trim() || null,
      location: CLINIC.address,
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <section id="appointment" className="section-pad bg-[#F6F6F6] relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.reception} alt="" className="w-full h-full object-cover opacity-[0.07]" />
      </div>
      <div className="pointer-events-none absolute -right-20 top-20 w-80 h-80 rounded-full border border-[#D4AF37]/10 animate-float" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#b8932b] mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" /> Book a Visit <span className="w-8 h-px bg-[#D4AF37]" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-[#2F2F2F]">
            Reserve Your <span className="text-gradient-gold">Appointment</span>
          </h2>
          <p className="mt-5 text-[#6B7280] leading-relaxed">
            Schedule a consultation with one of our specialists. We'll confirm your booking within
            one business hour.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-[28px] p-6 sm:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)] border border-white/60">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <ResultState
                  icon={<CheckCircle2 className="w-10 h-10 text-white" />}
                  title="Booking Received!"
                  accent="from-[#D4AF37] to-[#b8932b]"
                  body={`Thank you, ${form.name || 'valued patient'}. Our front desk will call you shortly to confirm your ${form.treatment || 'appointment'} at ${CLINIC.address}.`}
                  onReset={() => {
                    setStatus('idle');
                    setForm({ name: '', phone: '', email: '', treatment: '', date: '', time: '', message: '' });
                  }}
                  resetLabel="Book another appointment"
                />
              ) : status === 'error' ? (
                <ResultState
                  icon={<AlertCircle className="w-10 h-10 text-white" />}
                  title="Something went wrong"
                  accent="from-red-500 to-red-600"
                  body="We couldn't submit your booking right now. Please try again in a moment, or call us directly and we'll take care of you."
                  onReset={() => setStatus('idle')}
                  resetLabel="Try again"
                />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="grid sm:grid-cols-2 gap-5"
                >
                  <Field icon={User} label="Full Name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="John Doe"
                      className="input-field"
                    />
                  </Field>
                  <Field icon={Phone} label="Phone Number">
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="input-field"
                    />
                  </Field>
                  <Field icon={Mail} label="Email Address">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@email.com"
                      className="input-field"
                    />
                  </Field>
                  <Field icon={Stethoscope} label="Treatment Type">
                    <select
                      required
                      value={form.treatment}
                      onChange={(e) => update('treatment', e.target.value)}
                      className="input-field appearance-none"
                    >
                      <option value="" disabled>Select a treatment</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </Field>
                  <Field icon={Calendar} label="Preferred Date">
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className="input-field"
                    />
                  </Field>
                  <Field icon={Clock} label="Preferred Time">
                    <select
                      required
                      value={form.time}
                      onChange={(e) => update('time', e.target.value)}
                      className="input-field appearance-none"
                    >
                      <option value="" disabled>Select a time</option>
                      {TIMES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field icon={MessageSquare} label="Message (optional)">
                      <textarea
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        rows={3}
                        placeholder="Tell us about your concerns or any specific requests..."
                        className="input-field resize-none"
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-[#6B7280]">
                      By booking you agree to our privacy policy. We never share your data.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4.5 h-4.5 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          <CalendarHeart className="w-4.5 h-4.5" /> Book Appointment
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Clinic location note */}
            {status === 'idle' && (
              <div className="mt-6 flex items-start gap-2.5 text-xs text-[#6B7280] bg-white/50 rounded-xl p-3.5">
                <MapPin className="w-4 h-4 text-[#b8932b] flex-shrink-0 mt-0.5" />
                <span>Bookings are confirmed for <strong className="text-[#2F2F2F]">SmileCare Dental Clinic</strong>, {CLINIC.address}.</span>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          border-radius: 14px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(0,0,0,0.08);
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          font-size: 0.9rem;
          color: #2F2F2F;
          transition: all 0.25s ease;
        }
        .input-field::placeholder { color: #9ca3af; }
        .input-field:focus {
          outline: none;
          border-color: #D4AF37;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(212,175,55,0.12);
        }
        select.input-field { cursor: pointer; }
      `}</style>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-[#2F2F2F] mb-1.5 tracking-wide">{label}</span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b8932b]" />
        {children}
      </span>
    </label>
  );
}

function ResultState({
  icon,
  title,
  body,
  accent,
  onReset,
  resetLabel,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  accent: string;
  onReset: () => void;
  resetLabel: string;
}) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
        className={`mx-auto grid place-items-center w-20 h-20 rounded-full bg-gradient-to-br ${accent} mb-6`}
      >
        {icon}
      </motion.div>
      <h3 className="font-serif text-2xl font-semibold text-[#2F2F2F]">{title}</h3>
      <p className="mt-3 text-[#6B7280] max-w-md mx-auto leading-relaxed">{body}</p>
      <button
        onClick={onReset}
        className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#2F2F2F] border border-[#2F2F2F]/15 hover:border-[#D4AF37] hover:text-[#b8932b] transition-colors"
      >
        {resetLabel}
      </button>
    </motion.div>
  );
}
