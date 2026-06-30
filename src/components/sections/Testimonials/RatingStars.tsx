import { Star } from 'lucide-react';

import styles from './Testimonials.module.css';

type RatingStarsProps = {
  rating: number;
};

export function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div
      className={styles.stars}
      aria-label={`Avaliação de ${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          fill="currentColor"
          strokeWidth={0}
          className={index < rating ? styles.starActive : styles.starInactive}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}