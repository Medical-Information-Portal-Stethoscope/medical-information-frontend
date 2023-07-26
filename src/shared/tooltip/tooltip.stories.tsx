import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './tooltip';

const meta = {
  title: 'uikit/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} as Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
