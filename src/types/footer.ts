export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterContactItem = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};