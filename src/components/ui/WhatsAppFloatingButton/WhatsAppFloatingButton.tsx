import { FaWhatsapp } from 'react-icons/fa';

import { useWhatsApp } from '../../../hooks/useWhatsApp';

import styles from './WhatsAppFloatingButton.module.css';

export function WhatsAppFloatingButton() {
  const { getBookingUrl } = useWhatsApp();

  return (
    <a
      className={styles.button}
      href={getBookingUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
    >
      <FaWhatsapp size={30} aria-hidden="true" />
    </a>
  );
}