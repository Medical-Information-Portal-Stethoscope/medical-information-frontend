import { Search } from '../search';
import { Menu } from '../menu';
import styles from './hamburger-menu.module.scss';

export const HamburgerMenu = () => (
  <div className={`${styles.wrapper} ${styles.active}`}>
    <Search extraClass={styles.search} />
    <Menu extraClass={styles.menu} />
  </div>
);
