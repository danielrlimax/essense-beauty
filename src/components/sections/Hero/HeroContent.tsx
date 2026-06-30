import { ArrowRight } from 'lucide-react';

import { Button } from '../../ui/Button/Button';

import type { HeroData } from '../../../types/hero';

import styles from './Hero.module.css';

type HeroContentProps = {
  data: HeroData;
  bookingUrl: string;
};

export function HeroContent({ data, bookingUrl }: HeroContentProps) {
  return (
    <div className={styles.content}>
      <span className={styles.eyebrow}>{data.eyebrow}</span>

      <h1 className={styles.title}>{data.title}</h1>

      <p className={styles.description}>{data.description}</p>

      <div className={styles.actions}>
        <Button href={bookingUrl} external size="lg" fullWidth>
          {data.primaryActionLabel}
          <ArrowRight size={18} />
        </Button>

        <Button
          href={data.secondaryActionHref}
          variant="secondary"
          size="lg"
          fullWidth
        >
          {data.secondaryActionLabel}
        </Button>
      </div>
    </div>
  );
}