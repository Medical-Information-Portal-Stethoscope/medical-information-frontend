import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { CloudDrizzelIcon } from 'shared/icons/cloud-drizzel-icon';
import { LocationPinIcon } from 'shared/icons/location-pin-icon';
import Tooltip from 'shared/tooltip/tooltip';
import { UserIcon } from 'shared/icons/user-icon';
import { homeNavLink } from 'utils/data/header/links';
import { Logo } from 'shared/logo';
import { Search } from './search';
import { Menu } from './menu';
import { getDatetimeData } from '../../utils/functions/getDatetimeData';
import { defaultDataWidget } from '../../utils/data/header/constants';

import styles from './styles.module.scss';

export type WidgetType = {
  city: string;
  deg: string;
};

export const Header: FC = () => {
  const [date, time] = getDatetimeData();
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const handleTogglePopup = () => setIsPopupOpened(!isPopupOpened);

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Link to={homeNavLink.to}>
          <Logo isHeading />
        </Link>
        <div className={styles.header__search}>
          <Search />
          <button
            type="button"
            className={styles.header__profile}
            onClick={handleTogglePopup}
          >
            <UserIcon color="blue" size="24" />
          </button>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <div className={styles.header__widget}>
          <div className={styles.header__widget__date}>
            <p className={styles.header__widget__currentday}>{date}</p>
            <p className={styles.header__widget__currenttime}>{time}</p>
          </div>
          <div className={styles.header__widget__info}>
            <p className={styles.header__widget__temperature}>
              <CloudDrizzelIcon color="blue" size="32" />
              {defaultDataWidget.deg}&deg;
            </p>
            <p className={styles.header__widget__city}>
              {' '}
              <LocationPinIcon color="blue" size="16" />
              {defaultDataWidget.city}
            </p>
          </div>
        </div>
        <Menu />
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
