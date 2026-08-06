@import 'tailwindcss';

@theme {
  --font-sans: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;

  --color-charcoal: #2F2F2F;
  --color-charcoal-light: #3d3d3d;
  --color-muted: #6B7280;
  --color-gold: #D4AF37;
  --color-gold-light: #e3c75e;
  --color-gold-dark: #b8932b;
  --color-soft: #F6F6F6;
  --color-ink: #1F1F1F;

  --shadow-luxe: 0 20px 60px -15px rgba(0, 0, 0, 0.12);
  --shadow-glass: 0 8px 32px rgba(31, 38, 135, 0.08);
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: var(--font-sans);
  color: #2F2F2F;
  background: #FFFFFF;
  overflow-x: hidden;
}

::selection {
  background: rgba(212, 175, 55, 0.25);
  color: #1F1F1F;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f6f6f6;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #d4af37, #b8932b);
  border-radius: 10px;
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.12); }
}
.animate-slow-zoom {
  animation: slowZoom 18s ease-in-out infinite alternate;
}

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-22px); }
}
.animate-float {
  animation: floatY 7s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.text-gradient-gold {
  background: linear-gradient(120deg, #b8932b 0%, #D4AF37 40%, #f0d97a 70%, #b8932b 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.glass-dark {
  background: rgba(31, 31, 31, 0.55);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.btn-gold {
  background: linear-gradient(135deg, #e3c75e 0%, #D4AF37 50%, #b8932b 100%);
  color: #1F1F1F;
  box-shadow: 0 8px 24px -8px rgba(212, 175, 55, 0.5);
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-gold:hover {
  background: linear-gradient(135deg, #D4AF37 0%, #b8932b 50%, #9c7d24 100%);
  box-shadow: 0 14px 38px -8px rgba(212, 175, 55, 0.75), 0 0 24px rgba(212, 175, 55, 0.4);
  transform: translateY(-3px);
}

.gold-ring {
  box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.0), 0 12px 40px -12px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.gold-ring:hover {
  box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.6), 0 22px 50px -12px rgba(212, 175, 55, 0.25);
  transform: translateY(-8px);
}

.section-pad {
  padding-top: 7rem;
  padding-bottom: 7rem;
}
@media (max-width: 768px) {
  .section-pad {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }
}
