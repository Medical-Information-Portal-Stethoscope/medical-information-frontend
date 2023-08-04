import type { Meta, StoryObj } from '@storybook/react';
import { MailWithIcon } from './mail-with-icon';

const meta: Meta<typeof MailWithIcon> = {
  title: 'uikit/Icons/MailWithIcon',
  component: MailWithIcon,
  tags: ['autodocs'],
  argTypes: {
    hasStatusIcon: {
      description: 'Иконка успеха/неудачи операции',
      type: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },

    statusIcon: {
      description: 'Значок в иконке успеха/неудачи операции',
      type: 'string',
      options: ['success', 'fail'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {},
};

export const MailWithIconSuccess: TStory = {
  args: {
    hasStatusIcon: true,
    statusIcon: 'success',
  },
};

export const MailWithIconFail: TStory = {
  args: {
    hasStatusIcon: true,
    statusIcon: 'fail',
  },
};
