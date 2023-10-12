import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from 'utils/routes';
import Button from 'shared/buttons/button/button';
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
          Зарегистрируйтесь и&nbsp;получите возможность:
        </h2>
        <ul className={styles.subscribe__list}>
          <li className={styles.subscribe__item}>
            Писать&nbsp;и&nbsp;публиковать&nbsp; свои статьи
          </li>
          <li className={styles.subscribe__item}>
            Подписываться на&nbsp;еженедельную рассылку
          </li>
          <li className={styles.subscribe__item}>
            Участвовать&nbsp;в&nbsp;обсуждениях под&nbsp;статьями
          </li>
          <li className={styles.subscribe__item}>
            Добавлять интересные статьи в&nbsp;избранное
          </li>
        </ul>
        <div className={styles.subscribe__container}>
          <Button
            extraClass={styles.subscribe__button}
            label="Зарегистрироваться"
            size="medium"
            type="button"
            onClick={handleClick}
          />
          <p className={styles.subscribe__caption}>
            Это удобно, процесс регистрации очень простой и&nbsp;займёт
            не&nbsp;более 5&nbsp;минут.
          </p>
        </div>
      </div>
      <div className={styles.subscribe__ellipse} />
    </section>
  );
};
