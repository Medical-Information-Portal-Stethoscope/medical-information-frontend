import { ReactNode, FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'shared/logo';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import styles from './entry.module.scss';

interface IEntryProps {
  children: ReactNode;
  heading: string;
  buttonLabel?: string;
  buttonType?: 'submit' | 'button';
  isLoading?: boolean;
  isDisabled?: boolean;
  altNavigation?: ReactNode | null;
  hasCommentaryWithRequired?: boolean;
  onSubmit?: (evt: FormEvent<HTMLFormElement>) => void;
  onClick?: () => void;
}

const Entry: FC<IEntryProps> = ({
  children,
  heading,
  buttonLabel,
  buttonType = 'submit',
  isLoading,
  isDisabled,
  altNavigation,
  hasCommentaryWithRequired = false,
  onSubmit,
  onClick,
}) => {
  const content = (
    <>
      {hasCommentaryWithRequired && (
        <span className={styles.commentary}>
          Поля со звёздочкой обязательны к заполнению
        </span>
      )}
      {children}
      <Button
        type={buttonType}
        label={buttonLabel}
        isLoading={isLoading}
        isDisabled={isDisabled}
        hasSpinner
        spinnerSize="small"
        spinnerColor="white"
        onClick={onClick}
      />
    </>
  );

  return (
    <main className={styles.main}>
      <div className={styles.columnLeft}>
        <Link className={styles.logo} to={routes.home}>
          <Logo isHeading theme="dark" />
          <span>медицинский информационный портал</span>
        </Link>
      </div>
      <div className={styles.columnRight}>
        <div className={styles.formWrapper}>
          <h2 className={styles.heading}>{heading}</h2>
          {buttonType === 'submit' ? (
            <form className={styles.form} noValidate onSubmit={onSubmit}>
              {content}
            </form>
          ) : (
            <div className={styles.form}>{content}</div>
          )}
          {altNavigation && altNavigation}
        </div>
      </div>
    </main>
  );
};

export default Entry;
