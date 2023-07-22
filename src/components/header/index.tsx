import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CloudDrizzelIcon } from 'shared/icons/cloud-drizzel-icon';
import { LocationPinIcon } from 'shared/icons/location-pin-icon';
import { UserIcon } from 'shared/icons/user-icon';

import { profileNavLink, homeNavLink } from 'utils/data/header/links';

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
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Link to={homeNavLink.to}>
          <Logo isHeading />
        </Link>
        <div className={styles.header__search}>
          <Search />
          <Link to={profileNavLink.to}>
            <div className={styles.header__profile}>
              <UserIcon color="blue" size="24" />
            </div>
          </Link>
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
    </header>
  );
};
