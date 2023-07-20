import { FC } from 'react';

import { Logo } from 'shared/logo';
import { Search } from './search';
import { Profile } from './profile';

import styles from './styles.module.scss';

export const Header: FC = () => {
  const a = null;
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__search}>
        <Search />
        <Profile />
      </div>
    </header>
  );
};
