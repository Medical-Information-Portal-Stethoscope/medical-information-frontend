import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Podcasts from '.';

const meta = {
  title: 'Components/Podcasts',
  component: Podcasts,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof Podcasts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
