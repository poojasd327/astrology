import Hero from '../components/Hero';
import About from '../components/About';
import VedicConsultations from '../components/VedicConsultations';
import SpiritualGuidance from '../components/SpiritualGuidance';
import SpecialPoojas from '../components/SpecialPoojas';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VedicConsultations />
      <SpiritualGuidance />
      <SpecialPoojas />
      <Contact />
    </main>
  );
}
