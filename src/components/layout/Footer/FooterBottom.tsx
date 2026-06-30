import { siteData } from '../../../data/siteData';

import styles from './Footer.module.css';

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.bottom}>
      <p>
        © {currentYear} {siteData.name}. Todos os direitos reservados.
      </p>

      <span>Beleza, cuidado e autoestima em cada detalhe.</span>
    </div>
  );
}