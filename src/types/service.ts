export type ServiceIconName =
  | 'sparkles'
  | 'heart'
  | 'eye'
  | 'scissors'
  | 'brush'
  | 'gem';

export type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: ServiceIconName;
};