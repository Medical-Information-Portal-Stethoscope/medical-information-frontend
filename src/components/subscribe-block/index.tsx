// TODO: заменить input на кастомный

import React, { FC, useState } from 'react';
import Button from 'shared/buttons/button/button';
import Email from '../../assets/images/Email.svg';

import styles from './styles.module.scss';

export const SubscribeBlock: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function handleSubmit(): string {
    return email;
  }
  const handleClick = () => {
    handleSubmit();
  };

  function handleSetActive() {
    setIsActive(true);
  }
  function handleSetInactive() {
    setIsActive(false);
  }

  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribe__content}>
        <h2 className={styles.subscribe__header}>
          Подпишись на&nbsp;нашу рассылку
        </h2>
        <p className={styles.subscribe__paragraph}>
          Мы&nbsp;будем присылать письма не&nbsp;чаще 1&nbsp;раза в&nbsp;неделю
        </p>
        <form className={styles.subscribe__form} noValidate>
          <input
            className={`${styles.subscribe__input} ${
              isActive ? styles.subscribe__input_active : null
            }`}
            type="text"
            id="subscribeinput"
            name="subscribeinput"
            required
            value={email}
            onChange={handleChange}
            onFocus={handleSetActive}
            onBlur={handleSetInactive}
            placeholder="Ваш e-mail"
          />
          <Button
            extraClass={styles.subscribe__button}
            label="Подписаться"
            size="medium"
            type="button"
            onClick={handleClick}
          />
        </form>
      </div>
      <img className={styles.subscribe__mail} src={Email} alt="Иконка почты" />
    </section>
  );
};
