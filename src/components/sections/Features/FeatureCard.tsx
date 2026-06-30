import type { Feature } from '../../../types/feature';

import { FeatureIcon } from './FeatureIcon';

import styles from './Features.module.css';

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardIcon}>
        <FeatureIcon name={feature.icon} />
      </div>

      <h3>{feature.title}</h3>

      <p>{feature.description}</p>
    </article>
  );
}