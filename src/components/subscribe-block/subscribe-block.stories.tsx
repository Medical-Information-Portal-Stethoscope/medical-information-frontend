import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { SubscribeBlock } from '.';

const meta = {
  title: 'Components/SubscribeBlock',
  component: SubscribeBlock,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof SubscribeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
