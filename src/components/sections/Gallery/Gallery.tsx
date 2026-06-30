import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';

import { galleryData } from '../../../data/galleryData';

import { GalleryCard } from './GalleryCard';

import styles from './Gallery.module.css';

export function Gallery() {
  return (
    <Section id="galeria" spacing="lg" className={styles.gallery}>
      <Container>
        <div className={styles.header}>
          <SectionHeader
            eyebrow="Galeria"
            title="Resultados que mostram cuidado, técnica e beleza"
            description="Veja alguns estilos e inspirações que representam a delicadeza, o acabamento e a experiência oferecida no Essence Beauty Studio."
            align="center"
          />
        </div>

        <div className={styles.grid}>
          {galleryData.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </div>
      </Container>
    </Section>
  );
}