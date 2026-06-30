import { Container } from '../../ui/Container/Container';

import {
  footerColumns,
  footerContactItems,
} from '../../../data/footerData';
import { useWhatsApp } from '../../../hooks/useWhatsApp';

import { FooterBottom } from './FooterBottom';
import { FooterBrand } from './FooterBrand';
import { FooterColumn } from './FooterColumn';
import { FooterContact } from './FooterContact';
import { FooterCta } from './FooterCta';

import styles from './Footer.module.css';

export function Footer() {
  const { getBookingUrl } = useWhatsApp();

  return (
    <footer className={styles.footer}>
      <Container>
        <FooterCta whatsappUrl={getBookingUrl()} />

        <div className={styles.main}>
          <FooterBrand />

          <div className={styles.linksArea}>
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}

            <FooterContact items={footerContactItems} />
          </div>
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}