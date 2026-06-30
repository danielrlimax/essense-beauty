import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';

import { servicesData } from '../../../data/servicesData';
import { useWhatsApp } from '../../../hooks/useWhatsApp';

import { ServiceCard } from './ServiceCard';

import styles from './Services.module.css';

export function Services() {
  const { getServiceBookingUrl } = useWhatsApp();

  return (
    <Section id="servicos" spacing="lg" className={styles.services}>
      <Container>
        <div className={styles.header}>
          <SectionHeader
            eyebrow="Nossos serviços"
            title="Cuidados pensados para realçar sua beleza"
            description="Escolha o serviço ideal para o seu momento e agende um atendimento personalizado pelo WhatsApp."
            align="center"
          />
        </div>

        <div className={styles.grid}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              bookingUrl={getServiceBookingUrl(service.name)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}