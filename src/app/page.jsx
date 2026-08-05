import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import VedicConsultations from '../components/VedicConsultations';
import SpiritualGuidance from '../components/SpiritualGuidance';
import Achievements from '../components/Achievements';
import VideoTestimonials from '../components/VideoTestimonials';
import Testimonials from '../components/Testimonials';
import SpecialPoojas from '../components/SpecialPoojas';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <Hero />
      <About />
      <VedicConsultations />
      <SpiritualGuidance />
      <Achievements />
      <VideoTestimonials />
      <Testimonials />
      <SpecialPoojas />
      <Contact />
      <FAQ />
    </main>
      <Footer />
      <BookingModal />
    </>
  );
}
