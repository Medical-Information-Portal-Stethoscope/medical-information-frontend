import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'services/app/store';
import { Comment } from '.';

const meta = {
  title: 'Components/Comments/Comment',
  component: Comment,
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
} as Meta<typeof Comment>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // data: articlesExample,
  },
};
