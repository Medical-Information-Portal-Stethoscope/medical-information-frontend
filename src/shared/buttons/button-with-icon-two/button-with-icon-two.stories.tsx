import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'shared/icons';
import ButtonWithIconTwo from './button-with-icon-two';

const meta: Meta<typeof ButtonWithIconTwo> = {
  title: 'uikit/Buttons/ButtonWithIconTwo',
  component: ButtonWithIconTwo,
  tags: ['autodocs'],
  argTypes: {
    extraClass: {
      description: 'Дополнительные стили',
      type: 'string',
      defaultValue: undefined,
    },

    isSelected: {
      description: 'Наличие в избранных',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    isDisabled: {
      description: 'Взаимодействие',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    onClick: {
      description: 'Добавить в избранное либо удалить',
      type: 'function',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    isSelected: false,
    isDisabled: false,
    icon: <Icon icon="BookmarkIcon" color="white" size="32" />,
  },
};
