import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { FiltersPopup } from '.';

const meta = {
  title: 'Components/Popup/FiltersPopup',
  component: FiltersPopup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof FiltersPopup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
