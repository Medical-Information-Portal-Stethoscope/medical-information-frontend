import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './button-with-icon.module.scss';

interface IButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  ariaLabel: string;
  hasBackground?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  extraClass?: string;
  onClick?: () => void;
}

export default function ButtonWithIcon({
  icon,
  ariaLabel,
  hasBackground = true,
  isDisabled = false,
  isLoading = false,
  extraClass,
  onClick,
}: IButtonWithIconProps) {
  return (
    <button
      className={classNames(styles.button, extraClass, {
        [styles.background]: hasBackground,
      })}
      type="button"
      aria-label={ariaLabel}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
