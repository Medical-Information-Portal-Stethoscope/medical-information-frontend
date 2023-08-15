/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { resetServerError } from 'services/features/user/slice';
import { showServerError } from 'services/features/user/selectors';
import { OverlayingPopup } from 'shared/overlaying-popup/overlaying-popup';
import { Icon } from 'shared/icons';
import { useMount } from 'hooks/useMount';
import { AvatarModal } from '../avatar-modal/avatar-modal';
import styles from './avatar.module.scss';

interface IAvatarProps {
  user: null | {
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

export const Avatar: FC<IAvatarProps> = ({ user }): ReactElement => {
  const dispatch = useAppDispatch();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { mounted } = useMount({ isOpened: isModalOpened });

  const serverError = useAppSelector(showServerError);

  const closeModal = () => {
    setIsModalOpened(false);
    dispatch(resetServerError());
  };

  return (
    <>
      <div
        className={styles.avatar}
        role="button"
        tabIndex={0}
        aria-label="Открыть модальное окно и изменить аватар"
        aria-pressed={isModalOpened}
        onClick={() => setIsModalOpened(true)}
      >
        {user?.avatar ? (
          <img
            className={styles.userImage}
            src={user.avatar}
            alt="Аватар пользователя"
          />
        ) : (
          <span
            className={styles.userInitials}
          >{`${user?.first_name[0].toUpperCase()}${user?.last_name[0].toUpperCase()}`}</span>
        )}

        <Icon icon="EditWithBorderIcon" color="lightBlue" />
      </div>

      {mounted && (
        <OverlayingPopup isOpened={isModalOpened} onClose={closeModal}>
          <AvatarModal
            avatar={user?.avatar}
            serverError={serverError}
            onClose={closeModal}
            isOpened={isModalOpened}
          />
        </OverlayingPopup>
      )}
    </>
  );
};
