import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './button-with-icon-three.module.scss';

interface IButtonWithIconThree extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  icon: ReactNode;
}

export default function ButtonWithIconThree({
  extraClass,
  isSelected = false,
  isDisabled = false,
  onClick,
  icon,
}: IButtonWithIconThree) {
  return (
    <button
      className={classNames(styles.button, extraClass, {
        [styles[`button--isSelected`]]: isSelected,
      })}
      type="button"
      aria-label={isSelected ? 'Убрать из избранных' : 'Добавить в избранное'}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
