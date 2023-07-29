import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Article } from '.';

const meta = {
  title: 'Pages/Article',
  component: Article,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
