import type { HTMLAttributes, ReactNode } from 'react';

import styles from './Section.module.css';

type SectionSpacing = 'sm' | 'md' | 'lg';

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  spacing?: SectionSpacing;
};

export function Section({
  children,
  spacing = 'lg',
  className = '',
  ...props
}: SectionProps) {
  const sectionClassName = [
    styles.section,
    styles[spacing],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClassName} {...props}>
      {children}
    </section>
  );
}