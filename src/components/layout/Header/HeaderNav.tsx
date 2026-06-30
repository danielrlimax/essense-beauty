import { navigationData } from '../../../data/navigationData';

import styles from './Header.module.css';

type HeaderNavProps = {
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
};

export function HeaderNav({ onNavigate, variant = 'desktop' }: HeaderNavProps) {
  const navClassName =
    variant === 'mobile' ? styles.mobileNav : styles.desktopNav;

  return (
    <nav className={navClassName} aria-label="Navegação principal">
      {navigationData.map((item) => (
        <a key={item.href} href={item.href} onClick={onNavigate}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}