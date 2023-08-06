import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './text-area';

const meta: Meta<typeof TextArea> = {
  title: 'uikit/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Размер',
      type: 'string',
      options: ['medium', 'large'],
      defaultValue: 'medium',
      control: { type: 'radio' },
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
    counter: {
      description: 'Счетчик символов',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },
    maxTextAreaLength: {
      description: 'Максимальное количество символов',
      type: 'number',
      options: [400, Infinity],
      defaultValue: Infinity,
      control: { type: 'radio' },
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultMediumWithCounter: TStory = {
  args: {
    size: 'medium',
    label: 'Text',
    placeholder: 'Type some text',
    counter: true,
    maxTextAreaLength: 400,
  },
};

export const DefaultMediumWithoutCounter: TStory = {
  args: {
    size: 'medium',
    label: 'Text',
    placeholder: 'Type some text',
    counter: false,
    maxTextAreaLength: Infinity,
  },
};

export const DefaultLargeWithCounter: TStory = {
  args: {
    size: 'large',
    label: 'Text',
    placeholder: 'Type some text',
    counter: true,
    maxTextAreaLength: 400,
  },
};

export const DefaultLargeWithoutCounter: TStory = {
  args: {
    size: 'large',
    label: 'Text',
    placeholder: 'Type some text',
    counter: false,
    maxTextAreaLength: Infinity,
  },
};
