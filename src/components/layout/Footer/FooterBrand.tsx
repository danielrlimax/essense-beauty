import { Sparkles } from 'lucide-react';

import { siteData } from '../../../data/siteData';

import styles from './Footer.module.css';

export function FooterBrand() {
  return (
    <div className={styles.brand}>
      <a href="#inicio" className={styles.logo} aria-label="Voltar para o início">
        <span className={styles.logoMark}>E</span>

        <span className={styles.logoText}>
          <strong>{siteData.name}</strong>
          <small>{siteData.segment}</small>
        </span>
      </a>

      <p>{siteData.slogan}</p>

      <div className={styles.brandDetail}>
        <Sparkles size={18} aria-hidden="true" />
        <span>Atendimento pensado para beleza, conforto e autoestima.</span>
      </div>
    </div>
  );
}