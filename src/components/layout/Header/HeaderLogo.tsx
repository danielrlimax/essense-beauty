import { siteData } from '../../../data/siteData';

import styles from './Header.module.css';

export function HeaderLogo() {
  return (
    <a className={styles.logo} href="#inicio" aria-label="Ir para o início">
      <span className={styles.logoMark}>E</span>

      <span className={styles.logoText}>
        <strong>{siteData.name}</strong>
        <small>{siteData.segment}</small>
      </span>
    </a>
  );
}