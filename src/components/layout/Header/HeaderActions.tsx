import { Menu, X } from 'lucide-react';

import { Button } from '../../ui/Button/Button';

import styles from './Header.module.css';

type HeaderActionsProps = {
  bookingUrl: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
};

export function HeaderActions({
  bookingUrl,
  isMenuOpen,
  onToggleMenu,
}: HeaderActionsProps) {
  return (
    <div className={styles.actions}>
      <Button href={bookingUrl} external size="sm" className={styles.desktopCta}>
        Agendar horário
      </Button>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={onToggleMenu}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  );
}