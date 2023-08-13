import { FC, useState } from 'react';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import { Link } from 'react-router-dom';
import Tooltip from 'shared/tooltip/tooltip';
import { homeNavLink } from 'utils/data/header/links';
import { Logo } from 'shared/logo';
import { UserHeaderIcon } from '../user-header-icon';
import { Search } from './search';
import { Menu } from './menu';

import styles from './styles.module.scss';

export const Header: FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const handleTogglePopup = () => setIsPopupOpened(!isPopupOpened);

  const { user } = useAppSelector(showUserPersonalData);
  const userName =
    `${user?.first_name[0]} ${user?.last_name[0]}` || 'Дарья Врачева';

  return (
    <header className={styles.header}>
      <Link to={homeNavLink.to}>
        <Logo isHeading theme="light" />
        <span className={styles.header__logotext}>
          медицинский информационный портал
        </span>
      </Link>
      <Menu />
      <div className={styles.header__search}>
        <Search />
        <button
          type="button"
          className={styles.header__profile}
          aria-label={
            isPopupOpened
              ? 'Закрыть модальное окно'
              : 'Открыть модальное окно с переходами на страницы регистрации и авторизации'
          }
          onClick={handleTogglePopup}
        >
          <UserHeaderIcon
            name={userName}
            role={user?.role || 'user'}
            avatar=""
            isHeader
          />
        </button>
      </div>

      {isPopupOpened && (
        <div className={styles.tooltip}>
          <Tooltip />
        </div>
      )}
    </header>
  );
};
