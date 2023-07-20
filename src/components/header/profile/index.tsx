import { FC } from 'react';
import styles from './styles.module.scss';
import { ProfileIcon } from '../icons/Profile';

export const Profile: FC = () => {
  const a = 1;
  return (
    <button
      className={styles.profile}
      type="button"
      name="profile"
      //   onClick={handleSearch}
    >
      <ProfileIcon />
    </button>
  );
};
