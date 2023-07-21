import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'shared/logo';
import { Search } from './search';
import { Profile } from './profile';
import { Widget } from './widget';

import { homeNavLink } from './utils/routes';

import styles from './styles.module.scss';
import { Menu } from './menu';
import { defaultDataWidget } from './utils/constants';

export const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.header__top}>
      <Link to={homeNavLink.to}>
        <Logo />
      </Link>
      <div className={styles.header__search}>
        <Search />
        <Profile />
      </div>
    </div>
    <div className={styles.header__bottom}>
      <Widget city={defaultDataWidget.city} deg={defaultDataWidget.deg} />
      <Menu />
    </div>
  </header>
);
