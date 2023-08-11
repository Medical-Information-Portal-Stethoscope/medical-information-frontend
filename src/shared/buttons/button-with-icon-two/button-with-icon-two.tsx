import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './button-with-icon-two.module.scss';

interface IButtonWithIconTwo extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  ariaLabel?: string;
  onClick: () => void;
  icon: ReactNode;
}

export default function ButtonWithIconTwo({
  extraClass,
  isSelected = false,
  isDisabled = false,
  ariaLabel = isSelected ? 'Убрать из избранных' : 'Добавить в избранное',
  onClick,
  icon,
}: IButtonWithIconTwo) {
  return (
    <button
      className={classNames(styles.button, extraClass, {
        [styles[`button--isSelected`]]: isSelected,
      })}
      type="button"
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
