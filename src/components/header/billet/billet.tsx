import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import styles from './billet.module.scss';

interface IBilletProps {
  extraClass?: string;
  onSwipeStart: (evt: React.TouchEvent<HTMLDivElement>) => void;
  onSwipeEnd: (evt: React.TouchEvent<HTMLDivElement>) => void;
}

export const Billet = ({
  extraClass,
  onSwipeStart,
  onSwipeEnd,
}: IBilletProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={classNames(styles.billet, extraClass)}
      onTouchStart={onSwipeStart}
      onTouchEnd={onSwipeEnd}
    >
      <div className={styles.wrapper}>
        <span className={styles.handle} />
        <div className={styles.buttons}>
          <Button
            type="button"
            model="primary"
            size="small"
            label="Зарегистрироваться"
            onClick={() => navigate(routes.signup)}
          />
          <Button
            type="button"
            model="secondary"
            size="small"
            label="Войти"
            hasBorder
            onClick={() => navigate(routes.signin)}
          />
        </div>
      </div>
    </div>
  );
};
