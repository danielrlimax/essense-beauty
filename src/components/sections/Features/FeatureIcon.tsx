import {
  CalendarCheck,
  CheckCircle,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from 'lucide-react';

import type { FeatureIconName } from '../../../types/feature';

type FeatureIconProps = {
  name: FeatureIconName;
};

const iconMap: Record<FeatureIconName, LucideIcon> = {
  shield: ShieldCheck,
  calendar: CalendarCheck,
  sparkles: Sparkles,
  heart: HeartHandshake,
  star: Star,
  check: CheckCircle,
};

export function FeatureIcon({ name }: FeatureIconProps) {
  const Icon = iconMap[name];

  return <Icon size={22} strokeWidth={2.1} aria-hidden="true" />;
}