import { ArrowRight, CalendarCheck } from 'lucide-react';

import { Button } from '../../ui/Button/Button';

import styles from './Contact.module.css';

type ContactCtaProps = {
  whatsappUrl: string;
};

export function ContactCta({ whatsappUrl }: ContactCtaProps) {
  return (
    <div className={styles.ctaCard}>
      <span className={styles.ctaIcon}>
        <CalendarCheck size={24} strokeWidth={2.1} aria-hidden="true" />
      </span>

      <div>
        <h3>Pronta para cuidar de você?</h3>

        <p>
          Chame no WhatsApp, escolha o melhor horário e tenha uma experiência de
          beleza feita com cuidado, conforto e atenção aos detalhes.
        </p>
      </div>

      <Button href={whatsappUrl} external size="lg" fullWidth>
        Agendar pelo WhatsApp
        <ArrowRight size={18} />
      </Button>
    </div>
  );
}