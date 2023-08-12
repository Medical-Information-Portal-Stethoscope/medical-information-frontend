const api = Object.freeze({
  baseUrl: 'https://stethoscope.acceleratorpracticum.ru/api/v1/',

  endpoints: {
    articles: {
      base: 'articles',
    },

    user: {
      base: 'users/',

      auth: {
        base: 'auth/',

        login: 'login/',
        logout: 'logout/',
      },

      signupActivation: 'activation/',

      password: {
        reset: 'reset_password/',
        resetConfirmation: 'reset_password_confirm/',
      },

      me: 'me/',
    },
    tags: {
      // все теги
      all: '/tags',
      // верхнеуровневые теги
      roots: '/tags/roots',
    },
  },
});

export default api;
