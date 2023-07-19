import type { Meta, StoryObj } from '@storybook/react';
import IconDentistry from 'assets/icons/components/dentistry';
import FilterTab from './filter-tab';

const meta: Meta<typeof FilterTab> = {
  title: 'uikit/Buttons/FilterTab',
  component: FilterTab,
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

    icon: {
      description: 'Иконка',
      icon: 'string',
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
    label: 'Стоматология',
    icon: <IconDentistry />,
  },
};
