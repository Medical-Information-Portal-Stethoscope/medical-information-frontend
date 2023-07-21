import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProfileIcon } from '../icons/Profile';
import { profileNavLink } from '../utils/routes';

import styles from './styles.module.scss';

export const Profile: FC = () => (
  <Link to={profileNavLink.to}>
    <div className={styles.profile}>
      <ProfileIcon />
    </div>
  </Link>
);
