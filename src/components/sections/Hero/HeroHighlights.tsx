import type { HeroHighlight } from '../../../types/hero';

import { HeroIcon } from './HeroIcon';

import styles from './Hero.module.css';

type HeroHighlightsProps = {
  items: HeroHighlight[];
};

export function HeroHighlights({ items }: HeroHighlightsProps) {
  return (
    <div className={styles.highlights} aria-label="Diferenciais">
      {items.map((item) => (
        <div className={styles.highlight} key={item.id}>
          <span className={styles.highlightIcon}>
            <HeroIcon name={item.icon} />
          </span>

          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}