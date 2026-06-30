import type { ContactItem } from '../../../types/contact';

import { ContactCard } from './ContactCard';

import styles from './Contact.module.css';

type ContactInfoListProps = {
  items: ContactItem[];
  whatsappUrl: string;
};

export function ContactInfoList({ items, whatsappUrl }: ContactInfoListProps) {
  return (
    <div className={styles.infoList}>
      {items.map((item) => (
        <ContactCard key={item.id} item={item} whatsappUrl={whatsappUrl} />
      ))}
    </div>
  );
}