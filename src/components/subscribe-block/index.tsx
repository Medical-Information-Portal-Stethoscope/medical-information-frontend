import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from 'utils/routes';
import Button from 'shared/buttons/button/button';
import Email from '../../assets/images/Email.svg';

import styles from './styles.module.scss';

export const SubscribeBlock: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.signup);
  };

  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribe__content}>
        <h2 className={styles.subscribe__header}>
          Зарегистрируйтесь и&nbsp;узнавайте первыми о&nbsp;наших публикациях
        </h2>
        <p className={styles.subscribe__paragraph}>
          В&nbsp;личном кабинете возможно выбрать интересные темы
          и&nbsp;подписаться на&nbsp;них, добавлять в&nbsp;избранное статьи
          и&nbsp;публиковать свои статьи
        </p>
        <Button
          extraClass={styles.subscribe__button}
          label="Зарегистрируйтесь&nbsp;&mdash; это бесплатно"
          size="medium"
          type="button"
          onClick={handleClick}
        />
      </div>
      <img className={styles.subscribe__mail} src={Email} alt="Иконка почты" />
    </section>
  );
};
