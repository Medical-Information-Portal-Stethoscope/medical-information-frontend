import classNames from 'classnames';
import logo from 'assets/images/Logo.svg';
import logoLight from 'assets/images/Logo-light.svg';
import styles from './logo.module.scss';

export interface ILogoProps {
  extClassName?: string;
  theme: 'dark' | 'light';
  hasCaption?: boolean;
  isSignUp?: boolean;
}

export const Logo = ({
  extClassName,
  theme,
  hasCaption,
  isSignUp,
}: ILogoProps) =>
  hasCaption ? (
    <div
      className={classNames(
        isSignUp ? styles.wrapper_signup : styles.wrapper,
        extClassName
      )}
    >
      <img
        className={isSignUp ? styles.logo_signup : styles.logo}
        src={theme === 'light' ? logoLight : logo}
        alt="Логотип"
      />
      <span
        className={classNames({
          [styles.caption]: !isSignUp,
          [styles.caption_signup]: isSignUp,
          [styles.captionDark]: theme === 'dark',
        })}
      >
        медицинский информационный портал
      </span>
    </div>
  ) : (
    <img
      className={isSignUp ? styles.logo_signup : styles.logo}
      src={theme === 'light' ? logoLight : logo}
      alt="Логотип"
    />
  );
