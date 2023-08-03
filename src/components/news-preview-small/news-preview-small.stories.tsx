import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { NewsPreviewSmall } from '.';

const meta = {
  title: 'Components/NewsPreviewSmall',
  component: NewsPreviewSmall,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof NewsPreviewSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
