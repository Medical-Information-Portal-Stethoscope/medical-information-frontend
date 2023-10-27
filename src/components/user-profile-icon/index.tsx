import { FC } from 'react';
import classNames from 'classnames';
import { UserIcon } from 'shared/icons/user-icon';
import { PlusIcon } from 'shared/icons/plus-icon';

import styles from './styles.module.scss';

type UserInfo = {
  name: string;
  avatar: string;
  role: string;
  isHeader: boolean;
  isUserOnline?: boolean;
};

export const UserProfileIcon: FC<UserInfo> = ({
  name,
  avatar,
  role,
  isHeader,
  isUserOnline,
}) => {
  const isDoctor = role === 'doctor';

  const defaultUserIcon = (
    <UserIcon color="white" size="32" className={styles.user__default} />
  );
  const userIcon = (
    <div
      className={classNames(styles.user__icon, {
        [styles['user__icon-image']]: !avatar,
        [styles['user__icon-mask']]: avatar && isHeader,
        [styles['user__icon-header']]: isHeader,
      })}
    >
      {isDoctor && (
        <PlusIcon
          color="red"
          className={classNames(styles.user__plus, {
            [styles['user__plus-header']]: isHeader,
          })}
        />
      )}
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
