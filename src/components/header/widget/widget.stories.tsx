import type { Meta, StoryObj } from '@storybook/react';

import { Widget } from '.';

const meta = {
  title: 'uikit/Components/Header/Widget',
  component: Widget,
  tags: ['autodocs'],
} as Meta<typeof Widget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
