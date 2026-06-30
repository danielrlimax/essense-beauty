export type ContactIconName = 'whatsapp' | 'instagram' | 'map' | 'clock';

export type ContactItem = {
  id: string;
  title: string;
  description: string;
  icon: ContactIconName;
  href?: string;
  external?: boolean;
};