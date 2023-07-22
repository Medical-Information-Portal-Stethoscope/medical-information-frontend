import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'shared/icons';
import ButtonWithIcon from './button-with-icon';

const meta: Meta<typeof ButtonWithIcon> = {
  title: 'uikit/Buttons/ButtonWithIcon',
  component: ButtonWithIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'Иконка',
    },

    ariaLabel: {
      description: 'Имя элемента для скринридеров',
      type: 'string',
    },

    hasBackground: {
      description: 'Фон',
      type: 'boolean',
      options: [true, false],
      defaultValue: true,
      control: {
        type: 'radio',
      },
    },

    isDisabled: {
      description: 'Взаимодействие с кнопкой',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    isLoading: {
      description: 'Состояние в процессе обмена данными с сервером',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    extraClass: {
      description: 'Дополнительные стили',
      type: 'string',
      defaultValue: undefined,
    },

    onClick: { description: 'Функция', type: 'function' },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const WithBackground: TStory = {
  args: {
    icon: <Icon icon="MailIcon" color="blue" />,
    ariaLabel: 'Отправить письмо',
    hasBackground: true,
    isDisabled: false,
    isLoading: false,
    extraClass: '',
  },
};

export const WithoutBackground: TStory = {
  args: {
    icon: <Icon icon="MailIcon" color="blue" />,
    ariaLabel: 'Отправить письмо',
    hasBackground: false,
    isDisabled: false,
    isLoading: false,
    extraClass: '',
  },
};
