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
        <Logo isHeading extClassName={styles.header__logotext} />
      </Link>
      <Menu />
      <div className={styles.header__search}>
        <Search />
        <button
          type="button"
          className={styles.header__profile}
          onClick={handleTogglePopup}
        >
          <UserHeaderIcon />
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
