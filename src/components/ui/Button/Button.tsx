import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type NativeButtonType = 'button' | 'submit' | 'reset';

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'children' | 'className' | 'href' | 'type'
  > & {
    href: string;
    external?: boolean;
  };

type ButtonElementProps = ButtonBaseProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'className' | 'type'
  > & {
    href?: undefined;
    external?: never;
    type?: NativeButtonType;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

function isLinkButton(props: ButtonProps): props is ButtonLinkProps {
  return typeof props.href === 'string';
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
  } = props;

  const buttonClassName = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (isLinkButton(props)) {
    const {
      children: _children,
      variant: _variant,
      size: _size,
      fullWidth: _fullWidth,
      className: _className,
      external,
      target,
      rel,
      ...linkProps
    } = props;

    return (
      <a
        {...linkProps}
        className={buttonClassName}
        target={external ? '_blank' : target}
        rel={external ? 'noreferrer' : rel}
      >
        {children}
      </a>
    );
  }

  const {
    children: _children,
    variant: _variant,
    size: _size,
    fullWidth: _fullWidth,
    className: _className,
    type = 'button',
    ...buttonProps
  } = props;

  return (
    <button {...buttonProps} className={buttonClassName} type={type}>
      {children}
    </button>
  );
}