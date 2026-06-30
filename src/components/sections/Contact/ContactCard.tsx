import type { ContactItem } from '../../../types/contact';

import { ContactIcon } from './ContactIcon';

import styles from './Contact.module.css';

type ContactCardProps = {
  item: ContactItem;
  whatsappUrl: string;
};

export function ContactCard({ item, whatsappUrl }: ContactCardProps) {
  const href = item.id === 'whatsapp' ? whatsappUrl : item.href;

  const content = (
    <>
      <span className={styles.cardIcon}>
        <ContactIcon name={item.icon} />
      </span>

      <span className={styles.cardContent}>
        <strong>{item.title}</strong>
        <small>{item.description}</small>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className={styles.card}
        href={href}
        target={item.external || item.id === 'whatsapp' ? '_blank' : undefined}
        rel={item.external || item.id === 'whatsapp' ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return <div className={styles.card}>{content}</div>;
}