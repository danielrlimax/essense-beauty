import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';

import { featuresData } from '../../../data/featuresData';

import { FeatureCard } from './FeatureCard';

import styles from './Features.module.css';

export function Features() {
  return (
    <Section id="diferenciais" spacing="lg" className={styles.features}>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <SectionHeader
              eyebrow="Por que escolher"
              title="Uma experiência de beleza feita com cuidado em cada detalhe"
              description="Mais do que um atendimento, uma experiência pensada para entregar conforto, confiança e um resultado que valoriza sua beleza."
            />
          </div>

          <div className={styles.grid}>
            {featuresData.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}