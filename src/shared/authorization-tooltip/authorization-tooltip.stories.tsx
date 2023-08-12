import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import AuthorizationTooltip from './authorization-tooltip';

const meta = {
  title: 'uikit/AuthorizationTooltip',
  component: AuthorizationTooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof AuthorizationTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
