import { JSX, ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: JSX.IntrinsicElements['button']['type'];
  model?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium';
  hasBorder?: boolean;
  hasIconMail?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingLabel?: string; // Дизайнеры сейчас прорабатывают эту логику, так что изменится
  onClick?: () => void;
}

export default function Button({
  children,
  type = 'button',
  model = 'primary',
  size = 'medium',
  hasBorder = false,
  hasIconMail = false,
  isDisabled = false,
  isLoading = false,
  loadingLabel,
  onClick,
}: IButtonProps) {
  const iconMail = (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3M1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3M1 3L10 9L19 3"
        stroke="#666372"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <button
      className={classNames(
        styles.button,
        styles[`button--${model}`],
        styles[`button--${size}`],
        {
          [styles[`button--hasBorder`]]: hasBorder,
        }
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {hasIconMail && iconMail}
      {isLoading && loadingLabel ? loadingLabel : children}
    </button>
  );
}
