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

    isCardAll: {
      description: 'Посмотреть все категории',
      type: 'boolean',
      options: [true, false],
      control: {
        type: 'radio',
      },
      defaultValue: false,
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    heading: 'Офтальмология',
    icon: <Icon icon="OphthalmologyIcon" size="80" color="white" />,
    isCardAll: false,
  },
};

export const All: TStory = {
  args: {
    heading: 'Остальные категории',
    icon: <Icon icon="BigArrowIcon" color="white" />,
    isCardAll: true,
  },
};
