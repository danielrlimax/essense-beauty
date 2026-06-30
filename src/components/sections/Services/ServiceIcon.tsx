import {
  Brush,
  Eye,
  Gem,
  Heart,
  Scissors,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

import type { ServiceIconName } from '../../../types/service';

type ServiceIconProps = {
  name: ServiceIconName;
};

const iconMap: Record<ServiceIconName, LucideIcon> = {
  sparkles: Sparkles,
  heart: Heart,
  eye: Eye,
  scissors: Scissors,
  brush: Brush,
  gem: Gem,
};

export function ServiceIcon({ name }: ServiceIconProps) {
  const Icon = iconMap[name];

  return <Icon size={22} strokeWidth={2.1} aria-hidden="true" />;
}