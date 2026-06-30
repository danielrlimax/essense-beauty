import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Contact } from './components/sections/Contact/Contact';
import { Features } from './components/sections/Features/Features';
import { Gallery } from './components/sections/Gallery/Gallery';
import { Hero } from './components/sections/Hero/Hero';
import { Services } from './components/sections/Services/Services';
import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { WhatsAppFloatingButton } from './components/ui/WhatsAppFloatingButton/WhatsAppFloatingButton';

import styles from './App.module.css';

export default function App() {
  return (
    <>
      <Header />

      <main className={styles.app}>
        <Hero />
        <Services />
        <Features />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}