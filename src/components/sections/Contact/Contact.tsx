import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';

import { contactData } from '../../../data/contactData';
import { useWhatsApp } from '../../../hooks/useWhatsApp';

import { ContactCta } from './ContactCta';
import { ContactInfoList } from './ContactInfoList';

import styles from './Contact.module.css';

export function Contact() {
  const { getBookingUrl } = useWhatsApp();

  const whatsappUrl = getBookingUrl();

  return (
    <Section id="contato" spacing="lg" className={styles.contact}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <SectionHeader
              eyebrow="Contato"
              title="Agende seu horário de forma simples e rápida"
              description="Entre em contato pelo WhatsApp para tirar dúvidas, consultar horários disponíveis ou escolher o melhor serviço para você."
            />

            <ContactInfoList items={contactData} whatsappUrl={whatsappUrl} />
          </div>

          <ContactCta whatsappUrl={whatsappUrl} />
        </div>
      </Container>
    </Section>
  );
}