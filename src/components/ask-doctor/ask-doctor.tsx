import CardQuestionDoctor from 'components/cards/question-doctor/question-doctor';
import CardMoreContent from 'components/cards/more-content/more-content';
import { Icon } from 'shared/icons';
import data from './test-data/test-data';
import styles from './ask-doctor.module.scss';

const questions = data.map(({ id, heading, icon }) => (
  <CardQuestionDoctor key={id} heading={heading} icon={icon} />
));

export default function AskDoctor() {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Задать вопрос врачу</h2>
        <div className={styles.questions}>
          {questions}
          <CardMoreContent
            heading="Остальные категории"
            icon={<Icon icon="BigArrowIcon" color="white" />}
          />
        </div>
      </div>
    </section>
  );
}
