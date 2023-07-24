import { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'shared/logo';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import styles from './entry.module.scss';

interface IEntryProps {
  children?: ReactNode;
  heading: string;
  buttonLabel: string;
  altNavigation?: ReactNode;
}

const Entry: FC<IEntryProps> = ({
  children,
  heading,
  buttonLabel,
  altNavigation,
}) => (
  <main className={styles.main}>
    <div className={styles.columnLeft}>
      <div className={styles.wrapperLeft}>
        <Link to={routes.home}>
          <Logo isHeading />
        </Link>
      </div>
    </div>
    <div className={styles.columnRight}>
      <div className={styles.wrapperRight}>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <h2 className={styles.heading}>{heading}</h2>
            {children}
            <Button label={buttonLabel} />
          </form>
          {altNavigation && altNavigation}
        </div>
      </div>
    </div>
  </main>
);

export default Entry;
