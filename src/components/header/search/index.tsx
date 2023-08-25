/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useCallback, useRef, useState } from 'react';
import { SearchIcon } from 'shared/icons/search-icon';

import styles from './styles.module.scss';

export const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>): string {
    event.preventDefault();
    return value;
  }

  const onWrapperClick = useCallback(() => {
    ref.current?.focus();
  }, [ref]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <form
      className={styles.search}
      noValidate
      onClick={onWrapperClick}
      onSubmit={handleSearch}
    >
      <input
        className={styles.search__input}
        type="search"
        id="searchinput"
        name="searchinput"
        placeholder="Поиск"
        required
        ref={ref}
        value={value}
        onChange={handleChange}
      />

      <button
        className={styles.search__submit}
        type="submit"
        name="search-info"
      >
        <SearchIcon color="blue" size="24" />
      </button>
    </form>
  );
};
