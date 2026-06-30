import type { FooterColumn as FooterColumnType } from '../../../types/footer';

import styles from './Footer.module.css';

type FooterColumnProps = {
  column: FooterColumnType;
};

export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div className={styles.column}>
      <h3>{column.title}</h3>

      <nav aria-label={column.title}>
        {column.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}