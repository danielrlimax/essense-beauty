export type FeatureIconName =
  | 'shield'
  | 'calendar'
  | 'sparkles'
  | 'heart'
  | 'star'
  | 'check';

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: FeatureIconName;
};