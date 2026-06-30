import type { ContactItem } from '../types/contact';

export const contactData: ContactItem[] = [
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description: 'Agende seu horário de forma rápida e prática.',
    icon: 'whatsapp',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: '@essencebeautystudio',
    icon: 'instagram',
    href: 'https://instagram.com/essencebeautystudio',
    external: true,
  },
  {
    id: 'localizacao',
    title: 'Localização',
    description: 'São Paulo, SP',
    icon: 'map',
  },
  {
    id: 'horario',
    title: 'Horário de atendimento',
    description: 'Segunda a sábado, com horário marcado.',
    icon: 'clock',
  },
];