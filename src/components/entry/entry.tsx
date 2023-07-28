import { ReactNode, FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Logo } from 'shared/logo';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import styles from './entry.module.scss';

interface IEntryProps {
  children: ReactNode;
  heading: string;
  buttonLabel: string;
  isDisabled: boolean;
  altNavigation?: ReactNode;
  extraClass?: string;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

const Entry: FC<IEntryProps> = ({
  children,
  heading,
  buttonLabel,
  isDisabled,
  altNavigation,
  extraClass,
  onSubmit,
}) => (
  <main className={styles.main}>
    <div className={styles.columnLeft}>
      <div className={styles.wrapperLeft}>
        <Link className={styles.logo} to={routes.home}>
          <Logo isHeading />
          <span>Медицинский информационный портал</span>
        </Link>
      </div>
    </div>
    <div className={styles.columnRight}>
      <div className={classNames(styles.wrapperRight, extraClass)}>
        <div className={styles.formWrapper}>
          <h2 className={styles.heading}>{heading}</h2>
          <form className={styles.form} noValidate onSubmit={onSubmit}>
            {children}
            <Button type="submit" label={buttonLabel} isDisabled={isDisabled} />
          </form>
          {altNavigation && altNavigation}
        </div>
      </div>
    </div>
  </main>
);

export default Entry;
