import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import CardSearch from './card-search';

const meta: Meta<typeof CardSearch> = {
  title: 'uikit/Cards/SearchCard',
  component: CardSearch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    data: {
      description: 'Данные для статьи',
    },

    extraClass: {
      description: 'Дополнительные стили',
      type: 'string',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    data: {
      id: '123',
      title: 'Полное руководство по использованию зубной нити',
      annotation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem magni dolor obcaecati modi libero molestias illo, vero fugiat iste, perspiciatis natus consequatur voluptatum voluptas repellat necessitatibus harum provident ab!',
      image:
        'https://dr-yakimov.ru/wp-content/uploads/2022/04/nit-dlya-gigieny-polosti-rta.jpg',
    },

    extraClass: '',
    route: 'route',
  },
};
