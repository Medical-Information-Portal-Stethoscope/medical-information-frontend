import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'shared/icons';
import CardMoreContent from './more-content';

const meta: Meta<typeof CardMoreContent> = {
  title: 'uikit/Cards/MoreContent',
  component: CardMoreContent,
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
    heading: 'Остальные категории',
    icon: <Icon icon="BigArrowIcon" color="white" />,
  },
};
