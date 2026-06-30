export type HeroHighlightIcon = 'calendar' | 'shield' | 'sparkles';

export type HeroHighlight = {
  id: string;
  label: string;
  icon: HeroHighlightIcon;
};

export type HeroData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
  image: {
    src: string;
    alt: string;
  };
  highlights: HeroHighlight[];
};