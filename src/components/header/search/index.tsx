/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, FormEvent, useCallback, useEffect, useRef } from 'react';
import { SearchIcon } from 'shared/icons/search-icon';
import { useAppDispatch, useAppSelector } from 'services/app/hooks';
import { changeInputValue } from 'services/features/search/slice';
import { searchQuery } from 'services/features/search/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from 'utils/routes';
import styles from './styles.module.scss';

export const Search: FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const value = useAppSelector(searchQuery);
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith('/search')) {
      dispatch(changeInputValue(''));
    }
  }, [location.pathname]); //eslint-disable-line

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInputValue(event.target.value));
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      navigate(`${routes.search.route}/${value}`);
    }
  };

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
        <SearchIcon color="blue" size="22" />
      </button>
    </form>
  );
};
