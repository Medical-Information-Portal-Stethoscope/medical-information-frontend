import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { ArticlesPreviewSmall } from '.';

const meta = {
  title: 'Components/ArticlesPreviewSmall',
  component: ArticlesPreviewSmall,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof ArticlesPreviewSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
