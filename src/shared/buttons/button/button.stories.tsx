import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'uikit/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    extraClass: {
      description: 'Дополнительные стили',
      type: 'string',
      defaultValue: undefined,
    },

    type: {
      description: 'Тип поведения',
      type: 'string',
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
      control: {
        type: 'radio',
      },
    },

    label: {
      description: 'Текст',
      type: 'string',
    },

    model: {
      description: 'Тип модели',
      type: 'string',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
      control: {
        type: 'radio',
      },
    },

    size: {
      description: 'Размер',
      type: 'string',
      options: ['small', 'medium'],
      defaultValue: 'medium',
      control: {
        type: 'radio',
      },
    },

    hasBorder: {
      description: 'Наличие границы',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    customIcon: {
      type: undefined,
      description: 'Иконка',
      defaultValue: undefined,
    },

    isDisabled: {
      description: 'Взаимодействие с кнопкой',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    isLoading: {
      description: 'Процесс обмена данными с сервером',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    loadingLabel: {
      description: 'Текст в процессе обмена данными с сервером',
      type: 'string',
    },

    onClick: { description: 'Нажатие', type: 'function' },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const PrimaryMedium: TStory = {
  args: {
    type: 'button',
    label: 'Текст',
    model: 'primary',
    size: 'medium',
    hasBorder: false,
    isDisabled: false,
    isLoading: false,
  },
};

export const PrimarySmall: TStory = {
  args: {
    type: 'button',
    label: 'Текст',
    model: 'primary',
    size: 'small',
    hasBorder: false,
    isDisabled: false,
    isLoading: false,
  },
};

export const SecondaryMediumWithBorder: TStory = {
  args: {
    type: 'button',
    label: 'Текст',
    model: 'secondary',
    size: 'medium',
    hasBorder: true,
    isDisabled: false,
    isLoading: false,
  },
};

export const SecondarySmallWithBorder: TStory = {
  args: {
    type: 'button',
    label: 'Текст',
    model: 'secondary',
    size: 'small',
    hasBorder: true,
    isDisabled: false,
    isLoading: false,
  },
};

export const SecondarySmallWithouthBorder: TStory = {
  args: {
    type: 'button',
    label: 'Текст',
    model: 'secondary',
    size: 'small',
    hasBorder: false,
    isDisabled: false,
    isLoading: false,
  },
};

export const Tertiary: TStory = {
  args: {
    type: 'button',
    label: 'Текст',
    model: 'tertiary',
    size: 'small',
    hasBorder: false,
    isDisabled: false,
    isLoading: false,
  },
};
