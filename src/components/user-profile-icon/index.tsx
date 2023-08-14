import { FC } from 'react';
import classNames from 'classnames';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import { UserIcon } from 'shared/icons/user-icon';
import { PlusIcon } from 'shared/icons/plus-icon';

import styles from './styles.module.scss';

type UserInfo = {
  name: string;
  avatar: string;
  role: string;
  isHeader: boolean;
};

export const UserProfileIcon: FC<UserInfo> = ({
  name,
  avatar,
  role,
  isHeader,
}) => {
  const { user } = useAppSelector(showUserPersonalData);
  const isUserOnline = !!user?.id;
  const isDoctor = role === 'doctor';

  const defaultUserIcon = (
    <UserIcon color="white" size="32" className={styles.user__default} />
  );
  const userIcon = (
    <div
      className={classNames(styles.user__icon, {
        [styles['user__icon-image']]: !user?.avatar,
        [styles['user__icon-mask']]: user?.avatar,
      })}
    >
      {isDoctor && <PlusIcon color="red" className={styles.user__plus} />}
      {avatar ? (
        <img
          className={styles.user__avatar}
          src={avatar}
          alt="Аватар пользователя"
        />
      ) : (
        <span className={styles.user__content}>{name}</span>
      )}
    </div>
  );

  if (isUserOnline) {
    switch (role) {
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
