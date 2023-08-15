import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'services/app/store';
import { Paper } from '.';
import { articleExample } from './data/data';

const meta = {
  title: 'Components/Paper',
  component: Paper,
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
} as Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: articleExample,
    isNews: false,
  },
};
