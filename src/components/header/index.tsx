/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import Tooltip from 'shared/tooltip/tooltip';
import { homeNavLink } from 'utils/data/header/links';
import { Logo } from 'shared/logo';
import routes from 'utils/routes';
import { UserProfileIcon } from '../user-profile-icon';
import { Search } from './search';
import { Menu } from './menu';
import styles from './header.module.scss';

export const Header = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const navigate = useNavigate();

  const { user } = useAppSelector(showUserPersonalData);
  const userName = `${user?.first_name[0]}${user?.last_name[0]}`;

  const isUserOnline = !!user?.id;

  const handleTogglePopup = () => setIsPopupOpened(!isPopupOpened);
  const navigateToUserProfile = () => navigate(routes.profile);
  const createAriaLabel = () => {
    if (user) {
      return 'Перейти в личный кабинет пользователя';
    }

    return isPopupOpened
      ? 'Закрыть модальное окно'
      : 'Открыть модальное окно с переходами на страницы регистрации и авторизации';
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link className={styles.header__logo} to={homeNavLink.to}>
          <Logo theme="light" hasCaption />
        </Link>
        <Menu />
        <div className={styles.header__search}>
          <Search />
          <div
            className={classNames(styles.header__profile, {
              [styles.header__profile_auth]: user,
            })}
            role="button"
            tabIndex={0}
            aria-label={createAriaLabel()}
            onClick={user ? navigateToUserProfile : handleTogglePopup}
          >
            <UserProfileIcon
              avatar={user?.avatar || ''}
              isHeader
              name={userName}
              role={user?.role || 'user'}
              isUserOnline={isUserOnline}
            />
          </div>
        </div>

        <div
          className={classNames(styles.tooltip, {
            [styles[`tooltip--open`]]: isPopupOpened,
          })}
        >
          <Tooltip />
        </div>
      </div>
    </header>
  );
};
