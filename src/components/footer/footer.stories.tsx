import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Footer from './footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  decorators: [withRouter],
};
