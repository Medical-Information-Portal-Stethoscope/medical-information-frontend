import { FC } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from 'shared/icons/user-icon';
import { profileNavLink } from '../utils/routes';

import styles from './styles.module.scss';

export const Profile: FC = () => (
  <Link to={profileNavLink.to}>
    <div className={styles.profile}>
      <UserIcon color="blue" size="32" />
    </div>
  </Link>
);
