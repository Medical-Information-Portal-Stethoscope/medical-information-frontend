import { FC, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './circle-with-dots.module.scss';

interface ISpinnerProps {
  size?: 'big' | 'small';
  color?: 'blue' | 'gray' | 'white';
}

export const Spinner: FC<ISpinnerProps> = ({ size, color }): ReactElement => (
  <span
    className={classNames(
      styles.spinnerWrapper,
      styles[`spinnerWrapper--${size}`]
    )}
  >
    <span
      className={classNames(
        styles.spinner,
        styles[`spinner--${size}`],
        styles[`spinner--${size}--${color}`]
      )}
    />
  </span>
);
