import type { Service } from '../types/service';

export const servicesData: Service[] = [
  {
    id: 'manicure',
    name: 'Manicure',
    description:
      'Cuidado completo para unhas naturais, com acabamento delicado e esmaltação impecável.',
    price: 'A partir de R$ 35',
    duration: '50 min',
    icon: 'sparkles',
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    description:
      'Tratamento para os pés com limpeza, cuidado das unhas e finalização elegante.',
    price: 'A partir de R$ 40',
    duration: '60 min',
    icon: 'heart',
  },
  {
    id: 'alongamento',
    name: 'Alongamento de unhas',
    description:
      'Alongamento moderno e resistente para quem busca unhas bonitas por mais tempo.',
    price: 'A partir de R$ 120',
    duration: '2h',
    icon: 'gem',
  },
  {
    id: 'nail-art',
    name: 'Nail art',
    description:
      'Decorações personalizadas, delicadas ou sofisticadas para valorizar seu estilo.',
    price: 'A partir de R$ 15',
    duration: '30 min',
    icon: 'brush',
  },
  {
    id: 'sobrancelhas',
    name: 'Design de sobrancelhas',
    description:
      'Modelagem personalizada para harmonizar o rosto com naturalidade e precisão.',
    price: 'A partir de R$ 45',
    duration: '40 min',
    icon: 'eye',
  },
  {
    id: 'beleza',
    name: 'Pacotes de beleza',
    description:
      'Combinações de serviços para quem deseja uma experiência completa de cuidado.',
    price: 'Sob consulta',
    duration: 'Personalizado',
    icon: 'scissors',
  },
];