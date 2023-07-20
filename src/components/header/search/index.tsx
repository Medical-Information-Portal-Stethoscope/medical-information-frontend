import { FC } from 'react';
import styles from './styles.module.scss';
import { SearchIcon } from '../icons/Search';

export const Search: FC = () => {
  function handleChange() {
    return null;
  }

  function handleSearch() {
    return null;
  }

  return (
    <form className={styles.search} noValidate>
      <input
        className={styles.search__input}
        type="search"
        id="searchinput"
        name="searchinput"
        placeholder="Поиск"
        required
        // value=""
        // onChange={handleChange}
      />

      <button
        className={styles.search__submit}
        type="submit"
        name="search-info"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </form>
  );
};
