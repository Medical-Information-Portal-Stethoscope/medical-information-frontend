/* eslint-disable react/no-array-index-key */
import { FC, ReactNode, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

import { headerNavLinks } from '../utils/routes';

export const Menu: FC = () => {
  const { pathname } = useLocation();
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    setLink(pathname);
  }, [pathname]);

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {headerNavLinks.map(
          (navItem, idx): ReactNode => (
            <li key={idx}>
              <NavLink to={navItem.to}>
                <div
                  className={`${styles.menu__item} ${
                    link === navItem.to ? styles.menu__item_active : null
                  }`}
                >
                  {navItem.title}
                </div>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
