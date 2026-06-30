import { ArrowRight, Clock } from 'lucide-react';

import { Button } from '../../ui/Button/Button';

import type { Service } from '../../../types/service';

import { ServiceIcon } from './ServiceIcon';

import styles from './Services.module.css';

type ServiceCardProps = {
  service: Service;
  bookingUrl: string;
};

export function ServiceCard({ service, bookingUrl }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardIcon}>
        <ServiceIcon name={service.icon} />
      </div>

      <div className={styles.cardContent}>
        <h3>{service.name}</h3>

        <p>{service.description}</p>
      </div>

      <div className={styles.cardMeta}>
        <strong>{service.price}</strong>

        <span>
          <Clock size={16} />
          {service.duration}
        </span>
      </div>

      <Button href={bookingUrl} external variant="secondary" fullWidth>
        Agendar serviço
        <ArrowRight size={17} />
      </Button>
    </article>
  );
}