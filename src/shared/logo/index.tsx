import logo from 'assets/images/Logo.svg';
import logoLight from 'assets/images/Logo-light.svg';

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
        <img src={logoLight} alt="логотип" />
      ) : (
        <img src={logo} alt="логотип" />
      )}
    </h1>
  ) : (
    <div className={extClassName}>
      <img src={logo} alt="логотип" />
    </div>
  );
