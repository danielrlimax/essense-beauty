import {
  Clock,
  AtSign,
  MapPin,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';

import type { ContactIconName } from '../../../types/contact';

type ContactIconProps = {
  name: ContactIconName;
};

const iconMap: Record<ContactIconName, LucideIcon> = {
  whatsapp: MessageCircle,
  instagram: AtSign,
  map: MapPin,
  clock: Clock,
};

export function ContactIcon({ name }: ContactIconProps) {
  const Icon = iconMap[name];

  return <Icon size={22} strokeWidth={2.1} aria-hidden="true" />;
}