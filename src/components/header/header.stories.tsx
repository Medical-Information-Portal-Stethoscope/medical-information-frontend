import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from 'services/app/store';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '.';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
} as Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
