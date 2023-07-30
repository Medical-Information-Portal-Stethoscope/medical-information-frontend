import { ReactNode, FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'shared/logo';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import styles from './entry.module.scss';

interface IEntryProps {
  children: ReactNode;
  heading: string;
  buttonLabel: string;
  isLoading: boolean;
  isDisabled: boolean;
  altNavigation?: ReactNode;
  hasCommentaryWithRequired?: boolean;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

const Entry: FC<IEntryProps> = ({
  children,
  heading,
  buttonLabel,
  isLoading,
  isDisabled,
  altNavigation,
  hasCommentaryWithRequired = false,
  onSubmit,
}) => (
  <main className={styles.main}>
    <div className={styles.columnLeft}>
      <Link className={styles.logo} to={routes.home}>
        <Logo isHeading />
        <span>медицинский информационный портал</span>
      </Link>
    </div>
    <div className={styles.columnRight}>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>{heading}</h2>
        <form className={styles.form} noValidate onSubmit={onSubmit}>
          {hasCommentaryWithRequired && (
            <span className={styles.commentary}>
              Поля со звёздочкой обязательны к заполнению
            </span>
          )}
          {children}
          <Button
            type="submit"
            label={buttonLabel}
            isLoading={isLoading}
            isDisabled={isDisabled}
          />
        </form>
        {altNavigation && altNavigation}
      </div>
    </div>
  </main>
);

export default Entry;
