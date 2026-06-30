import { AtSign, Clock, MapPin } from 'lucide-react';

import type { FooterContactItem } from '../../../types/footer';

import styles from './Footer.module.css';

type FooterContactProps = {
  items: FooterContactItem[];
};

function getContactIcon(label: string) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes('local')) {
    return <MapPin size={18} aria-hidden="true" />;
  }

  if (normalizedLabel.includes('horário')) {
    return <Clock size={18} aria-hidden="true" />;
  }

  return <AtSign size={18} aria-hidden="true" />;
}

export function FooterContact({ items }: FooterContactProps) {
  return (
    <div className={styles.column}>
      <h3>Contato</h3>

      <div className={styles.contactList}>
        {items.map((item) => {
          const content = (
            <>
              <span className={styles.contactIcon}>
                {getContactIcon(item.label)}
              </span>

              <span>
                <strong>{item.label}</strong>
                <small>{item.value}</small>
              </span>
            </>
          );

          if (item.href) {
            return (
              <a
                key={item.label}
                className={styles.contactItem}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                {content}
              </a>
            );
          }

          return (
            <div key={item.label} className={styles.contactItem}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}