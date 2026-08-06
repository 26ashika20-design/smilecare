import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Appointment from '@/components/Appointment';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Services />
        <Doctors />
        <Gallery />
        <Testimonials />
        <Appointment />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingUI />
    </div>
  );
}
