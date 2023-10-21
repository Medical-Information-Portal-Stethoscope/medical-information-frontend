import { ReactNode, FC, FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Logo } from 'shared/logo';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { desktopMedium, tabletAlbumOrientation } from 'utils/constants';
import { Header } from 'components/header';
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
  const { pathname } = useLocation();
  const isSignUpForm = pathname.endsWith(routes.signup);
  const isBelowMediumScreens = useWindowDimensions() < desktopMedium;
  const isAboveTabletScreens = useWindowDimensions() > tabletAlbumOrientation;

  const content = (
    <>
      {hasCommentaryWithRequired && (
        <span className={styles.commentary}>
          Поля со звёздочкой обязательны для заполнения
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
        size={isBelowMediumScreens ? 'small' : 'medium'}
      />
    </>
  );

  return (
    <main className={styles.main}>
      {isAboveTabletScreens ? (
        <div className={styles.columnLeft}>
          <Link to={routes.home}>
            <Logo theme="dark" isSignUp hasCaption />
          </Link>
        </div>
      ) : (
        <Header />
      )}
      <div
        className={classNames(styles.columnRight, {
          [styles.columnRightSignUp]: isSignUpForm,
        })}
      >
        <div
          className={classNames(styles.formWrapper, {
            [styles.formWrapper_signUp]: heading === 'Регистрация',
            [styles.formWrapper_notSignUp]: heading !== 'Регистрация',
          })}
        >
          <h2
            className={classNames(styles.heading, {
              [styles.heading_notSignUp]:
                heading !== 'Регистрация' && heading !== 'Вход в аккаунт',
            })}
          >
            {heading}
          </h2>
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
