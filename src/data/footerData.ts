import type {
  FooterColumn,
  FooterContactItem,
} from '../types/footer';

export const footerColumns: FooterColumn[] = [
  {
    title: 'Navegação',
    links: [
      {
        label: 'Início',
        href: '#inicio',
      },
      {
        label: 'Serviços',
        href: '#servicos',
      },
      {
        label: 'Galeria',
        href: '#galeria',
      },
      {
        label: 'Depoimentos',
        href: '#depoimentos',
      },
      {
        label: 'Contato',
        href: '#contato',
      },
    ],
  },
  {
    title: 'Serviços',
    links: [
      {
        label: 'Manicure',
        href: '#servicos',
      },
      {
        label: 'Pedicure',
        href: '#servicos',
      },
      {
        label: 'Alongamento de unhas',
        href: '#servicos',
      },
      {
        label: 'Nail art',
        href: '#servicos',
      },
      {
        label: 'Design de sobrancelhas',
        href: '#servicos',
      },
    ],
  },
];

export const footerContactItems: FooterContactItem[] = [
  {
    label: 'Localização',
    value: 'São Paulo, SP',
  },
  {
    label: 'Horário',
    value: 'Segunda a sábado, com horário marcado',
  },
  {
    label: 'Instagram',
    value: '@essencebeautystudio',
    href: 'https://instagram.com/essencebeautystudio',
    external: true,
  },
];