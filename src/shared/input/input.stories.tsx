import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'uikit/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Размер',
      type: 'string',
      options: ['medium', 'small'],
      defaultValue: 'medium',
      control: { type: 'radio' },
    },

    label: {
      description: 'Заголовок',
      type: 'string',
      defaultValue: 'Title',
    },

    value: {
      description: 'Текст',
      type: 'string',
      defaultValue: 'Input text',
    },

    placeholder: {
      description: 'Placeholder',
      type: 'string',
      defaultValue: 'Input text',
    },

    error: {
      description: 'Поведение при ошибке',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    errorText: {
      description: 'Сообщение об ошибке',
      type: 'string',
      defaultValue: 'Error message',
    },

    isDisabled: {
      description: 'Поведение при неактивном поле ввода',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    isValid: {
      description: 'Поведение при валидности текста',
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

    type: {
      description: 'Тип поведения',
      type: 'string',
      defaultValue: 'text',
    },

    icon: {
      description: 'Наличие иконки глаза',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultMedium: TStory = {
  args: {
    size: 'medium',
    label: 'Title',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: false,
    isValid: false,
    type: 'password',
    icon: true,
  },
};

export const DefaultSmall: TStory = {
  args: {
    size: 'small',
    label: 'Title',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: false,
    isValid: false,
    icon: true,
  },
};

export const SuccessMedium: TStory = {
  args: {
    size: 'medium',
    label: 'Title',
    value: 'Input text',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: false,
    isValid: true,
  },
};

export const SuccessSmall: TStory = {
  args: {
    size: 'small',
    label: 'Title',
    value: 'Input text',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: false,
    isValid: true,
  },
};

export const ErrorMedium: TStory = {
  args: {
    size: 'medium',
    label: 'Title',
    value: 'Input text',
    placeholder: 'Input text',
    error: true,
    errorText: 'Error message',
    isDisabled: false,
    isValid: false,
  },
};

export const ErrorSmall: TStory = {
  args: {
    size: 'small',
    label: 'Title',
    value: 'Input text',
    placeholder: 'Input text',
    error: true,
    errorText: 'Error message',
    isDisabled: false,
    isValid: false,
  },
};

export const DisabledMedium: TStory = {
  args: {
    size: 'medium',
    label: 'Title',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: true,
    isValid: false,
  },
};

export const DisabledSmall: TStory = {
  args: {
    size: 'small',
    label: 'Title',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: true,
    isValid: false,
  },
};