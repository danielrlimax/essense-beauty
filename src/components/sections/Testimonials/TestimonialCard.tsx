import { Quote } from 'lucide-react';

import type { Testimonial } from '../../../types/testimonial';

import { RatingStars } from './RatingStars';

import styles from './Testimonials.module.css';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.quoteIcon}>
          <Quote size={20} aria-hidden="true" />
        </span>

        <RatingStars rating={testimonial.rating} />
      </div>

      <p className={styles.text}>“{testimonial.text}”</p>

      <div className={styles.author}>
        <strong>{testimonial.name}</strong>
        <span>{testimonial.service}</span>
      </div>
    </article>
  );
}