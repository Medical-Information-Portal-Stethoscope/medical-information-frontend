/* eslint-disable react/no-array-index-key */
import classNames from 'classnames';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { headerNavLinks } from 'utils/data/header/links';

import styles from './menu.module.scss';

interface IMenuProps {
  extraClass?: string;
}

export const Menu = ({ extraClass }: IMenuProps) => (
  <nav className={classNames(styles.menu, extraClass)}>
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
