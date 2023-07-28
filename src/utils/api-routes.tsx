const api = Object.freeze({
  baseUrl: 'https://stethoscope.acceleratorpracticum.ru/api/v1',

  endpoints: {
    articles: {
      base: '/articles',
    },

    user: {
      base: '/users',
    },
  },
});

export default api;
