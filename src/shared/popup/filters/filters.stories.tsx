import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from 'services/app/store';
import { FiltersPopup } from '.';

const meta = {
  title: 'Components/Popup/FiltersPopup',
  component: FiltersPopup,
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
} as Meta<typeof FiltersPopup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    allDiseasesTags: [],
    allTags: [],
  },
};
