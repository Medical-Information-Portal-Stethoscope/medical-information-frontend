import { FC } from 'react';

import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import { UserIcon } from 'shared/icons/user-icon';
import { PlusIcon } from 'shared/icons/plus-icon';

import styles from './styles.module.scss';

type UserInfo = {
  name: string;
  avatar: string | undefined;
  role: string;
  isHeader: boolean;
};

export const UserIconProfile: FC<UserInfo> = ({
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
      className={`${styles.user__icon} ${
        isHeader ? styles.user__icon_header : null
      }`}
    >
      {isDoctor && <PlusIcon color="red" className={styles.user__plus} />}

      {avatar && (
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={`${styles.user__avatar} ${
            isHeader ? styles.user__avatar_header : null
          }`}
        />
      )}
      {!avatar && <span className={styles.user__content}>{name}</span>}
    </div>
  );

  if (isUserOnline) {
    switch (user?.role) {
      case 'user' || 'doctor':
        return userIcon;
      default:
        return userIcon;
    }
  } else {
    if (isHeader) {
      return defaultUserIcon;
    }
    return userIcon;
  }
};
