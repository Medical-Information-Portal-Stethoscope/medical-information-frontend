import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'shared/buttons/button/button';

import routes from 'utils/routes';

import styles from './styles.module.scss';

type ErrorPageType = {
  img: string;
  title: string | React.ReactElement;
  message: string | React.ReactElement;
};

export const ErrorPage = ({
  img = '',
  title = '',
  message = '',
}: ErrorPageType) => {
  const navigate = useNavigate();
  function handleRedirectToHomepage() {
    navigate(routes.home);
  }

  const handleClick = () => {
    handleRedirectToHomepage();
  };

  return (
    <section className={styles.error}>
      <img className={styles.error__image} src={img} alt="Логотип ошибки" />
      <h2 className={styles.error__title}>{title}</h2>
      <p className={styles.error__message}>{message}</p>

      <Button
        extraClass={styles.error__button}
        label="Перейти на&nbsp;главную"
        size="medium"
        type="button"
        model="secondary"
        hasBorder
        onClick={handleClick}
      />
    </section>
  );
};
