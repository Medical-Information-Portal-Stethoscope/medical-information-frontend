import type { Meta, StoryObj } from '@storybook/react';
import { Hamburger } from './hamburger';

const meta: Meta<typeof Hamburger> = {
  title: 'uikit/Buttons/Button',
  component: Hamburger,
  tags: ['autodocs'],
  argTypes: {
    isMenuOpened: {
      description: 'Активное состояние гамбургера',
      type: 'boolean',
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {};
