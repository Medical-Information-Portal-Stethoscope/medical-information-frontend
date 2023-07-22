import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'shared/icons';
import CardQuestionDoctor from './question-doctor';

const meta: Meta<typeof CardQuestionDoctor> = {
  title: 'uikit/Cards/QuestionDoctor',
  component: CardQuestionDoctor,
  tags: ['autodocs'],
  argTypes: {
    heading: {
      description: 'Заголовок',
      type: 'string',
    },

    icon: {
      description: 'Иконка',
    },

    extraClass: {
      description: 'Дополнительные стили',
      type: 'string',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    heading: 'Офтальмология',
    icon: <Icon icon="OphthalmologyIcon" size="80" color="white" />,
  },
};
