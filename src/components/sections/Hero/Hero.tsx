import { Container } from '../../ui/Container/Container';

import { heroData } from '../../../data/heroData';
import { useWhatsApp } from '../../../hooks/useWhatsApp';

import { HeroContent } from './HeroContent';
import { HeroHighlights } from './HeroHighlights';
import { HeroImage } from './HeroImage';

import styles from './Hero.module.css';

export function Hero() {
  const { getBookingUrl } = useWhatsApp();

  return (
    <section id="inicio" className={styles.hero}>
      <HeroImage src={heroData.image.src} alt={heroData.image.alt} />

      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.contentWrapper}>
          <HeroContent data={heroData} bookingUrl={getBookingUrl()} />

          <HeroHighlights items={heroData.highlights} />
        </div>
      </Container>
    </section>
  );
}