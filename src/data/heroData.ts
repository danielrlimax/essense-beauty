import type { HeroData } from '../types/hero';

export const heroData: HeroData = {
  eyebrow: 'Beleza, cuidado e autoestima',
  title: 'Realce sua beleza com uma experiência profissional e acolhedora',
  description:
    'Atendimento especializado em unhas, beleza e estética com atenção aos detalhes, conforto e resultados pensados para valorizar você.',
  primaryActionLabel: 'Agendar pelo WhatsApp',
  secondaryActionLabel: 'Conhecer serviços',
  secondaryActionHref: '#servicos',
  image: {
    src: '/images/hero.webp',
    alt: 'Atendimento profissional em beleza e estética',
  },
  highlights: [
    {
      id: 'scheduled-service',
      label: 'Atendimento com horário marcado',
      icon: 'calendar',
    },
    {
      id: 'clean-environment',
      label: 'Ambiente cuidado e higienizado',
      icon: 'shield',
    },
    {
      id: 'personalized-result',
      label: 'Resultado personalizado',
      icon: 'sparkles',
    },
  ],
};