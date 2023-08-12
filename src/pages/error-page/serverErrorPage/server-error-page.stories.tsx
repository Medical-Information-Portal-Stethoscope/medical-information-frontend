import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'services/app/store';
import { Provider } from 'react-redux';

import { ServerErrorPage } from '.';

const meta = {
  title: 'Components/ErrorPage/ServerErrorPage',
  component: ServerErrorPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    ),
  ],
} as Meta<typeof ServerErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
