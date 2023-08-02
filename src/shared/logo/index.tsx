import logo from 'assets/images/Logo.svg';
import logoLight from 'assets/images/Logo-light.svg';

export interface ILogoProps {
  isHeading?: boolean;
  extClassName?: string;
}

export const Logo = ({ isHeading, extClassName }: ILogoProps) =>
  isHeading ? (
    <h1 className={extClassName}>
      <img src={logoLight} alt="логотип" />
      <p>медицинский информационный портал</p>
    </h1>
  ) : (
    <div className={extClassName}>
      <img src={logo} alt="логотип" />
    </div>
  );
