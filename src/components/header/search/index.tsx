import React, { FC, useState } from 'react';
import { SearchIcon } from 'shared/icons/search-icon';

import styles from './styles.module.scss';

export const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleSearch(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): string {
    event.preventDefault();
    return value;
  }

  function handleSetActive() {
    setIsActive(true);
  }
  function handleSetInactive() {
    setIsActive(false);
  }

  return (
    <form
      className={`${styles.search}  ${isActive ? styles.search_active : null}`}
      noValidate
    >
      <input
        className={styles.search__input}
        type="search"
        id="searchinput"
        name="searchinput"
        placeholder="Поиск"
        required
        value={value}
        onChange={handleChange}
        onFocus={handleSetActive}
        onBlur={handleSetInactive}
      />

      <button
        className={styles.search__submit}
        type="button"
        name="search-info"
        onClick={handleSearch}
      >
        <SearchIcon color="blue" size="24" />
      </button>
    </form>
  );
};
