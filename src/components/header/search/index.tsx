import React, { FC, useState } from 'react';
import { SearchIcon } from '../icons/Search';

import styles from './styles.module.scss';

export const Search: FC = () => {
  const [value, setValue] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleSearch(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): string {
    event.preventDefault();
    return value;
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
        value={value}
        onChange={handleChange}
      />

      <button
        className={styles.search__submit}
        type="button"
        name="search-info"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </form>
  );
};
