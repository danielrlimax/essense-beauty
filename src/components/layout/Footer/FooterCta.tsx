import { ArrowRight, MessageCircle } from 'lucide-react';

import { Button } from '../../ui/Button/Button';

import styles from './Footer.module.css';

type FooterCtaProps = {
  whatsappUrl: string;
};

export function FooterCta({ whatsappUrl }: FooterCtaProps) {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaContent}>
        <span className={styles.ctaIcon}>
          <MessageCircle size={22} aria-hidden="true" />
        </span>

        <div>
          <h2>Quer agendar seu horário?</h2>

          <p>
            Fale pelo WhatsApp e escolha o melhor serviço para o seu momento.
          </p>
        </div>
      </div>

      <Button href={whatsappUrl} external size="lg">
        Chamar no WhatsApp
        <ArrowRight size={18} />
      </Button>
    </div>
  );
}