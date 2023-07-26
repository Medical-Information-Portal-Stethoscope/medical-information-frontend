import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'shared/icons';
import ButtonWithIconThree from './button-with-icon-three';
import styles from './button-with-icon-three.module.scss';

const meta: Meta<typeof ButtonWithIconThree> = {
  title: 'uikit/Buttons/ButtonWithIconThree',
  component: ButtonWithIconThree,
  tags: ['autodocs'],
  argTypes: {
    extraClass: {
      description: 'Дополнительные стили',
      type: 'string',
      defaultValue: undefined,
    },

    isSelected: {
      description: 'Наличие в избранных',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    isDisabled: {
      description: 'Взаимодействие',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },

    onClick: {
      description: 'Добавить в избранное либо удалить',
      type: 'function',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Bookmark: TStory = {
  args: {
    isSelected: false,
    isDisabled: false,
    icon: (
      <Icon
        icon="BookmarkIcon"
        color="gray"
        size="32"
        className={styles.bookmark}
      />
    ),
  },
};

export const Share: TStory = {
  args: {
    isSelected: false,
    isDisabled: false,
    icon: (
      <Icon
        icon="ForwardIcon"
        color="gray"
        size="32"
        className={styles.forward}
      />
    ),
  },
};

export const Comments: TStory = {
  args: {
    isSelected: false,
    isDisabled: false,
    icon: <Icon icon="CommentsIcon" color="gray" className={styles.forward} />,
  },
};
