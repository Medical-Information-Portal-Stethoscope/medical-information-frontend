import { FC } from 'react';

import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import { UserIcon } from 'shared/icons/user-icon';
import { PlusIcon } from 'shared/icons/plus-icon';

import styles from './styles.module.scss';

export const UserHeaderIcon: FC = () => {
  const { user } = useAppSelector(showUserPersonalData);
  const isUserOnline = !!user?.id;
  const username = `${user?.first_name[0]} ${user?.last_name[0]}`;
  const isDoctor = user?.role === 'doctor';

  const defaultUserIcon = (
    <UserIcon color="white" size="32" className={styles.user__default} />
  );
  const userIcon = (
    <div className={styles.user__icon}>
      {isDoctor && <PlusIcon color="red" className={styles.user__plus} />}
      <p className={styles.user__content}>{username}</p>
    </div>
  );

  if (isUserOnline) {
    switch (user?.role) {
      case 'user':
        return userIcon;
      case 'doctor':
        return userIcon;
      default:
        return userIcon;
    }
  } else {
    return defaultUserIcon;
  }
};
