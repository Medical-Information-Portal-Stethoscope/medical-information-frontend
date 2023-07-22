/* eslint-disable react/no-array-index-key */
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { headerNavLinks } from 'utils/data/header/links';

import styles from './styles.module.scss';

export const Menu: FC = () => (
  <nav className={styles.menu}>
    <ul className={styles.menu__list}>
      {headerNavLinks.map(
        (navItem, idx): ReactNode => (
          <li key={idx}>
            <NavLink
              to={navItem.to}
              className={({ isActive }) =>
                isActive
                  ? `${styles.menu__item} ${styles.menu__item_active}`
                  : styles.menu__item
              }
            >
              {navItem.title}
            </NavLink>
          </li>
        )
      )}
    </ul>
  </nav>
);
