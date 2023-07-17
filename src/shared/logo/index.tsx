import logo from 'assets/images/Logo.svg';

export interface ILogoProps {
  isHeading?: boolean;
  extClassName?: string;
}

export const Logo = ({ isHeading, extClassName }: ILogoProps) =>
  isHeading ? (
    <h1 className={extClassName}>
      <img src={logo} alt="логотип" />
    </h1>
  ) : (
    <div className={extClassName}>
      <img src={logo} alt="логотип" />
    </div>
  );
