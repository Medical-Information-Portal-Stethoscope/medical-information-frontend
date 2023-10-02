import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import styles from './hamburger.module.scss';

interface IHamburgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isMenuOpened: boolean;
}

export const Hamburger = ({ isMenuOpened, onClick }: IHamburgerProps) => (
  <button
    className={classNames(styles.hamburger, { [styles.active]: isMenuOpened })}
    type="button"
    aria-label={`${isMenuOpened ? 'Закрыть' : 'Открыть'} гамбургер-меню`}
    onClick={onClick}
  >
    <span className={styles.line} />
    <span className={styles.line} />
    <span className={styles.line} />
  </button>
);
