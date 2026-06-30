import { ArrowRight } from 'lucide-react';

import { Button } from '../../ui/Button/Button';
import { HeaderNav } from './HeaderNav';

import styles from './Header.module.css';

type MobileMenuProps = {
  isOpen: boolean;
  bookingUrl: string;
  onClose: () => void;
};

export function MobileMenu({ isOpen, bookingUrl, onClose }: MobileMenuProps) {
  const menuClassName = [
    styles.mobileMenu,
    isOpen ? styles.mobileMenuOpen : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div id="mobile-menu" className={menuClassName}>
      <div className={styles.mobileMenuContent}>
        <HeaderNav variant="mobile" onNavigate={onClose} />

        <Button
          href={bookingUrl}
          external
          fullWidth
          size="lg"
          onClick={onClose}
        >
          Agendar pelo WhatsApp
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}