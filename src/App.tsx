import CardQuestionDoctor from 'components/cards/question-doctor/question-doctor';
import { OphthalmologyIcon } from 'shared/icons/ophthalmology-icon';
// import { Icon } from 'shared/icons';

function App() {
  return (
    <CardQuestionDoctor
      heading="Офтальмология"
      icon={<OphthalmologyIcon size="80" color="white" />}
      // icon={<Icon icon="BigArrowIcon" color="white" />}
      // isCardAllQuestions
    />
  ); // for tests
}

export default App;
