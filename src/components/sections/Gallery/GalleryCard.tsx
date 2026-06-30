import type { GalleryImage } from '../../../types/gallery';

import styles from './Gallery.module.css';

type GalleryCardProps = {
  image: GalleryImage;
};

export function GalleryCard({ image }: GalleryCardProps) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={image.src} alt={image.alt} />

      <div className={styles.cardOverlay}>
        <span>{image.category}</span>
        <h3>{image.title}</h3>
      </div>
    </article>
  );
}