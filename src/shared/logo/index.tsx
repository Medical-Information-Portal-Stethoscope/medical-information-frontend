import logo from 'assets/images/Logo.svg';
import logoLight from 'assets/images/Logo-light.svg';
import styles from './logo.module.scss';

export interface ILogoProps {
  isHeading?: boolean;
  extClassName?: string;
  theme?: 'dark' | 'light';
}

export const Logo = ({
  isHeading,
  extClassName,
  theme = 'light',
}: ILogoProps) =>
  isHeading ? (
    <h1 className={extClassName}>
      {theme === 'light' ? (
        <img className={styles.logo} src={logoLight} alt="Логотип" />
      ) : (
        <img className={styles.logo} src={logo} alt="Логотип" />
      )}
    </h1>
  ) : (
    <div className={extClassName}>
      <img src={logo} alt="логотип" />
    </div>
  );
