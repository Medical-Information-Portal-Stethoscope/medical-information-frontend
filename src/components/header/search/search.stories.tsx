import type { Meta, StoryObj } from '@storybook/react';

import { Search } from '.';

const meta = {
  title: 'Components/Header/Search',
  component: Search,
  tags: ['autodocs'],
} as Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
