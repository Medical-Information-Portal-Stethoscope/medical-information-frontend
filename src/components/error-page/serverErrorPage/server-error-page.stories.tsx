import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { ServerErrorPage } from '.';

const meta = {
  title: 'uikit/Components/ErrorPage/ServerErrorPage',
  component: ServerErrorPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof ServerErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
