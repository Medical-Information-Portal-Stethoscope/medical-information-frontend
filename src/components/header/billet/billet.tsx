import classNames from 'classnames';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import { useAppSelector } from '../../../services/app/hooks';
import { showUserPersonalData } from '../../../services/features/user/selectors';
import { Icon } from '../../../shared/icons';
import styles from './billet.module.scss';

interface IBilletProps {
  extraClass?: string;
  onSwipeStart: (evt: React.TouchEvent<HTMLDivElement>) => void;
  onSwipeEnd: (evt: React.TouchEvent<HTMLDivElement>) => void;
  onLogout: () => void;
}

export const Billet = ({
  extraClass,
  onSwipeStart,
  onSwipeEnd,
  onLogout,
}: IBilletProps) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const isProfilePage = pathname.endsWith(routes.profile);

  const { user } = useAppSelector(showUserPersonalData);

  return (
    <div
      className={classNames(styles.billet, extraClass)}
      onTouchStart={onSwipeStart}
      onTouchEnd={onSwipeEnd}
    >
      <div className={styles.wrapper}>
        <span className={styles.handle} />
        <div className={styles.buttons}>
          <Button
            type="button"
            model="primary"
            size="small"
            label={user ? 'Перейти в личный кабинет' : 'Зарегистрироваться'}
            onClick={
              user
                ? () => navigate(routes.profile)
                : () => navigate(routes.signup)
            }
            extraClass={user ? styles.buttons_auth : styles.buttons_unauth}
            isDisabled={isProfilePage}
          />
          <Button
            type="button"
            model="secondary"
            size="small"
            label={user ? 'Выйти' : 'Войти'}
            hasBorder
            customIcon={user && <Icon icon="LogoutTwoIcon" color="blue" />}
            onClick={user ? onLogout : () => navigate(routes.signin)}
          />
        </div>
      </div>
    </div>
  );
};
