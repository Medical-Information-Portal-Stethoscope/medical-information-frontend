import type { Meta, StoryObj } from '@storybook/react';
import FilterCheckbox from './filter-checkbox';

const meta: Meta<typeof FilterCheckbox> = {
  title: 'uikit/Checkboxes/FilterCheckbox',
  component: FilterCheckbox,
  tags: ['autodocs'],
  argTypes: {
    extraClass: {
      description: 'Дополнительные стили',
      type: 'string',
      defaultValue: undefined,
    },

    id: {
      description: 'Идентификатор',
      type: 'string',
    },

    label: {
      description: 'Название и значение кнопки',
      type: 'string',
    },

    isDisabled: {
      description: 'Взаимодействие с кнопкой',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    onChange: {
      description: 'Добавить фильтр либо убрать',
      type: 'function',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    id: 'template',
    label: 'Фильтр',
    isDisabled: false,
  },
};
