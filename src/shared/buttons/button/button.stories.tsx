import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'uikit/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
      name: 'label',
      defaultValue: 'Текст',
    },

    type: {
      type: 'string',
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
      control: {
        type: 'radio',
      },
    },

    model: {
      type: 'string',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
      control: {
        type: 'radio',
      },
    },

    size: {
      type: 'string',
      options: ['small', 'medium'],
      defaultValue: 'medium',
      control: {
        type: 'radio',
      },
    },

    hasBorder: {
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    hasIconMail: {
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    isDisabled: {
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    isLoading: {
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    loadingLabel: { type: 'string' },

    onClick: { type: 'function' },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Primary: TStory = {
  args: {
    children: 'Текст',
    type: 'button',
    model: 'primary',
    size: 'medium',
    hasBorder: false,
    hasIconMail: false,
    isDisabled: false,
    isLoading: false,
    loadingLabel: 'Подождите...',
  },
};

export const Secondary: TStory = {
  args: {
    children: 'Текст',
    type: 'button',
    model: 'secondary',
    size: 'medium',
    hasBorder: true,
    hasIconMail: false,
    isDisabled: false,
    isLoading: false,
    loadingLabel: 'Подождите...',
  },
};

export const Tertiary: TStory = {
  args: {
    children: 'Текст',
    type: 'button',
    model: 'tertiary',
    size: 'small',
    hasBorder: false,
    hasIconMail: false,
    isDisabled: false,
    isLoading: false,
    loadingLabel: 'Подождите...',
  },
};
