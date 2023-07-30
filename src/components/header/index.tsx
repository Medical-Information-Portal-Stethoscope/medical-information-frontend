import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from 'shared/tooltip/tooltip';
import { UserIcon } from 'shared/icons/user-icon';
import { homeNavLink } from 'utils/data/header/links';
import { Logo } from 'shared/logo';
import { Search } from './search';
import { Menu } from './menu';

import styles from './styles.module.scss';

export const Header: FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const handleTogglePopup = () => setIsPopupOpened(!isPopupOpened);

  return (
    <header className={styles.header}>
      <Link to={homeNavLink.to}>
        <Logo isHeading />
      </Link>
      <Menu />
      <div className={styles.header__search}>
        <Search />
        <button
          type="button"
          className={styles.header__profile}
          onClick={handleTogglePopup}
        >
          <UserIcon color="white" size="32" />
        </button>
      </div>

      {isPopupOpened && (
        // <Portal isOpened={isPopupOpened}>
        <div className={styles.tooltip}>
          <Tooltip />
        </div>
        // </Portal>
      )}
    </header>
  );
};
