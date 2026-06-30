import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';

import { testimonialsData } from '../../../data/testimonialsData';

import { TestimonialCard } from './TestimonialCard';

import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <Section id="depoimentos" spacing="lg" className={styles.testimonials}>
      <Container>
        <div className={styles.header}>
          <SectionHeader
            eyebrow="Depoimentos"
            title="Clientes que confiaram e amaram o resultado"
            description="A experiência no Essence Beauty Studio é pensada para entregar beleza, cuidado e confiança em cada atendimento."
            align="center"
          />
        </div>

        <div className={styles.grid}>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}