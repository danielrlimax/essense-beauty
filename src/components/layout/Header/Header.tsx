import { Container } from '../../ui/Container/Container';
import { useWhatsApp } from '../../../hooks/useWhatsApp';

import { HeaderActions } from './HeaderActions';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';
import { MobileMenu } from './MobileMenu';
import { useHeaderMenu } from './useHeaderMenu';

import styles from './Header.module.css';

export function Header() {
  const { getBookingUrl } = useWhatsApp();
  const { isMenuOpen, closeMenu, toggleMenu } = useHeaderMenu();

  const bookingUrl = getBookingUrl();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <HeaderLogo />

          <HeaderNav />

          <HeaderActions
            bookingUrl={bookingUrl}
            isMenuOpen={isMenuOpen}
            onToggleMenu={toggleMenu}
          />
        </div>
      </Container>

      <MobileMenu
        isOpen={isMenuOpen}
        bookingUrl={bookingUrl}
        onClose={closeMenu}
      />
    </header>
  );
}