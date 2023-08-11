import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './text-area';

const meta: Meta<typeof TextArea> = {
  title: 'uikit/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    minHeight: {
      description: 'Минимальная высота',
      type: 'number',
    },

    label: {
      description: 'Заголовок',
      type: 'string',
      defaultValue: 'Title',
    },
    value: {
      description: 'Содержание',
      type: 'string',
      defaultValue: 'Text',
    },
    placeholder: {
      description: 'Placeholder',
      type: 'string',
      defaultValue: 'Text',
    },

    hasCounter: {
      description: 'Счетчик символов',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    maxSymbols: {
      description: 'Максимальное количество символов',
      type: 'number',
      defaultValue: 0,
    },

    autoComplete: {
      description: 'Автозаполнение',
      type: 'string',
      options: ['on', 'off'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultMediumWithCounter: TStory = {
  args: {
    label: 'Text',
    placeholder: 'Type some text',
    hasCounter: true,
    maxSymbols: 400,
  },
};

export const DefaultMediumWithoutCounter: TStory = {
  args: {
    label: 'Text',
    placeholder: 'Type some text',
    hasCounter: false,
    maxSymbols: Infinity,
  },
};

export const DefaultLargeWithCounter: TStory = {
  args: {
    label: 'Text',
    placeholder: 'Type some text',
    hasCounter: true,
    maxSymbols: 400,
  },
};

export const DefaultLargeWithoutCounter: TStory = {
  args: {
    label: 'Text',
    placeholder: 'Type some text',
    hasCounter: false,
    maxSymbols: Infinity,
  },
};
