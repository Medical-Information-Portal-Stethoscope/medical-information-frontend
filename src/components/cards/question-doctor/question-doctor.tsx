import { ReactNode, FC } from 'react';
import classNames from 'classnames';
import Button from 'shared/buttons/button/button';
import styles from './question-doctor.module.scss';

interface ICardQuestionDoctorProps {
  heading: string;
  icon: ReactNode;
  isCardAll?: boolean;
  extraClass?: string;
}

const CardQuestionDoctor: FC<ICardQuestionDoctorProps> = ({
  heading,
  icon,
  isCardAll = false,
  extraClass,
}) => {
  const renderContent = () => {
    if (isCardAll) {
      return (
        <>
          <h3 className={styles.headingAll}>{heading}</h3>
          {icon}
        </>
      );
    }

    return (
      <>
        <div className={styles.info}>
          {icon}
          <h3 className={styles.heading}>{heading}</h3>
        </div>
        <Button
          extraClass={styles.button}
          label="Задать вопрос"
          model="secondary"
          size="small"
        />
      </>
    );
  };

  return (
    <article
      className={classNames(styles.article, extraClass, {
        [styles.articleAll]: isCardAll,
      })}
    >
      {renderContent()}
    </article>
  );
};

export default CardQuestionDoctor;
