import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { News } from '.';

const meta = {
  title: 'Pages/News',
  component: News,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof News>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
