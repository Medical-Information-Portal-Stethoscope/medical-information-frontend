import { ReactNode, FC } from 'react';
import classNames from 'classnames';
import Button from 'shared/buttons/button/button';
import styles from './question-doctor.module.scss';

interface ICardQuestionDoctorProps {
  heading: string;
  icon: ReactNode;
  extraClass?: string;
  onClick?: () => void;
}

const CardQuestionDoctor: FC<ICardQuestionDoctorProps> = ({
  heading,
  icon,
  extraClass,
  onClick,
}) => (
  <article className={classNames(styles.article, extraClass)}>
    <div className={styles.info}>
      {icon}
      <h3 className={styles.heading}>{heading}</h3>
    </div>
    <Button
      extraClass={styles.button}
      label="Задать вопрос"
      model="secondary"
      size="small"
      onClick={onClick}
    />
  </article>
);

export default CardQuestionDoctor;
