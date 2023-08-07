import { JSX, ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Spinner } from 'shared/preloaders/circle-with-dots/circle-with-dots';
import styles from './button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
  type?: JSX.IntrinsicElements['button']['type'];
  label?: string;
  model?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium';
  hasBorder?: boolean; // not provided for the tertiary
  customIcon?: ReactNode; // for the best perfomance it should be svg
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
  hasSpinner?: boolean;
  spinnerSize?: 'big' | 'small';
  spinnerColor?: 'blue' | 'gray' | 'white';
  onClick?: () => void;
}

export default function Button({
  extraClass,
  type = 'button',
  label,
  model = 'primary',
  size = 'medium',
  hasBorder = false,
  customIcon,
  isDisabled = false,
  isLoading = false,
  loadingLabel,
  hasSpinner = false,
  spinnerSize,
  spinnerColor,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        extraClass,
        styles[`button--${model}`],
        styles[`button--${size}`],
        {
          [styles[`button--${model}--loading`]]: isLoading,
          [styles[`button--hasBorder`]]: hasBorder,
          [styles[`button--hasBorder--loading`]]: isLoading && hasBorder,
        }
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      <span className={styles.content}>
        {(hasSpinner && isLoading && model !== 'tertiary' && (
          <Spinner size={spinnerSize} color={spinnerColor} />
        )) ||
          null}
        {customIcon || null}
        {isLoading && loadingLabel ? loadingLabel : label}
      </span>
    </button>
  );
}
