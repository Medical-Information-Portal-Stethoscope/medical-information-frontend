import type { Meta, StoryObj } from '@storybook/react';
import ConsentCheckbox from './consent-checkbox';

const meta: Meta<typeof ConsentCheckbox> = {
  title: 'uikit/Checkboxes/ConsentCheckbox',
  component: ConsentCheckbox,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Идентификатор',
      type: 'string',
    },

    name: {
      description: 'Имя чекбокса',
      type: 'string',
    },

    value: {
      description: 'Значение чекбокса',
      type: 'string',
    },

    label: {
      description: 'Подпись к чекбоксу',
      type: 'string',
    },

    isChecked: {
      description: 'Отметить чекбокс',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    isDisabled: {
      description: 'Возможность взаимодействия с чекбоксом',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    onChange: {
      description: 'Изменения при нажатии',
      type: 'function',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    id: 'template',
    name: 'consent-checkbox',
    value: 'agree',
    isChecked: false,
    isDisabled: false,
  },
};
