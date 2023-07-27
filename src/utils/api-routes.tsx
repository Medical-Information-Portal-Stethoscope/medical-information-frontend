const api = Object.freeze({
  baseUrl: 'https://stethoscope.acceleratorpracticum.ru/api/v1',

  endpoints: {
    articles: {
      base: '/articles',
    },
    tags: {
      all: '/tags',
      roots: '/tags/roots',
    },
  },
});

export default api;
