import classNames from 'classnames';
import logo from 'assets/images/Logo.svg';
import logoLight from 'assets/images/Logo-light.svg';
import styles from './logo.module.scss';

export interface ILogoProps {
  extClassName?: string;
  theme: 'dark' | 'light';
  hasCaption?: boolean;
}

export const Logo = ({ extClassName, theme, hasCaption }: ILogoProps) =>
  hasCaption ? (
    <div className={classNames(styles.wrapper, extClassName)}>
      <img
        className={styles.logo}
        src={theme === 'light' ? logoLight : logo}
        alt="Логотип"
      />
      <span
        className={classNames(styles.caption, {
          [styles.captionDark]: theme === 'dark',
        })}
      >
        медицинский информационный портал
      </span>
    </div>
  ) : (
    <img
      className={styles.logo}
      src={theme === 'light' ? logoLight : logo}
      alt="Логотип"
    />
  );
