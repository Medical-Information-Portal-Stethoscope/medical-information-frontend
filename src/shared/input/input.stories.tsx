import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'uikit/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    format: {
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
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultMedium: TStory = {
  args: {
    format: 'medium',
    label: 'Title',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: false,
    isValid: false,
  },
};

export const DefaultSmall: TStory = {
  args: {
    format: 'small',
    label: 'Title',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: false,
    isValid: false,
  },
};

export const SuccessMedium: TStory = {
  args: {
    format: 'medium',
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
    format: 'small',
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
    format: 'medium',
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
    format: 'small',
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
    format: 'medium',
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
    format: 'small',
    label: 'Title',
    placeholder: 'Input text',
    error: false,
    errorText: 'Error message',
    isDisabled: true,
    isValid: false,
  },
};
