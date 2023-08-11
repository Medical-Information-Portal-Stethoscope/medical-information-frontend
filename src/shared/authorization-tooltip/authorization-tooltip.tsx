import { Link } from 'react-router-dom';
import routes from 'utils/routes';
import classNames from 'classnames';
import styles from './authorization-tooltip.module.scss';

/* eslint-disable arrow-body-style */
const AuthorizationTooltip = () => {
  return (
    <div className={classNames(styles.authtooltip)}>
      <p className={classNames(styles[`authtooltip--text`])}>
        Для совершения действия требуется{' '}
        <Link
          className={classNames(styles[`authtooltip--link`])}
          to={routes.signin}
        >
          авторизация
        </Link>{' '}
      </p>
    </div>
  );
};

export default AuthorizationTooltip;
