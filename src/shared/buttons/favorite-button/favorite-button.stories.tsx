import type { Meta, StoryObj } from '@storybook/react';
import FavoriteButton from './favorite-button';

const meta: Meta<typeof FavoriteButton> = {
  title: 'uikit/Buttons/FavoriteButton',
  component: FavoriteButton,
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
  },
};
