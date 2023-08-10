import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from './file-input';

const meta: Meta<typeof FileInput> = {
  title: 'uikit/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    extraClass: {
      description: 'Дополнительный класс',
      type: 'string',
    },

    id: {
      description: 'Идентификатор',
      type: 'string',
    },

    label: {
      description: 'Заголовок',
      type: 'string',
    },

    name: {
      description: 'Имя',
      type: 'string',
    },

    icon: {
      description: 'Дополнильная иконка',
    },

    accept: {
      description:
        'Тип данных, которые можно добавить с устройства пользователя',
      type: 'string',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    id: 'photo',
    label: 'Прикрепить фотографию',
    name: 'photo',
    accept: '.jpg, .jpeg, .png',
  },
};
