import type { HTMLAttributes, ReactNode } from 'react';

import styles from './Container.module.css';

type ContainerSize = 'default' | 'narrow' | 'wide';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: ContainerSize;
};

export function Container({
  children,
  size = 'default',
  className = '',
  ...props
}: ContainerProps) {
  const containerClassName = [
    styles.container,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName} {...props}>
      {children}
    </div>
  );
}