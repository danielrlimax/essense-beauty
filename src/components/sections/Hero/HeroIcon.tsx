import {
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

import type { HeroHighlightIcon } from '../../../types/hero';

type HeroIconProps = {
  name: HeroHighlightIcon;
};

const iconMap: Record<HeroHighlightIcon, LucideIcon> = {
  calendar: CalendarCheck,
  shield: ShieldCheck,
  sparkles: Sparkles,
};

export function HeroIcon({ name }: HeroIconProps) {
  const Icon = iconMap[name];

  return <Icon size={18} strokeWidth={2.2} aria-hidden="true" />;
}