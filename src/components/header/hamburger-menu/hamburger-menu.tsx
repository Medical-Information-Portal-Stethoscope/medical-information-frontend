import classNames from 'classnames';
import { Search } from '../search';
import { Menu } from '../menu';
import styles from './hamburger-menu.module.scss';

interface IHamburgerMenuProps {
  isOpened: boolean;
  hasSearchField: boolean;
}

export const HamburgerMenu = ({
  isOpened,
  hasSearchField = true,
}: IHamburgerMenuProps) => (
  <div className={classNames(styles.wrapper, { [styles.active]: isOpened })}>
    {hasSearchField && <Search extraClass={styles.search} />}
    <Menu extraClass={styles.menu} />
  </div>
);
