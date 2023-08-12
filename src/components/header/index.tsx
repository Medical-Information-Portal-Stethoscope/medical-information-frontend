import { FC, useState } from 'react';
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
          <UserHeaderIcon />
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
