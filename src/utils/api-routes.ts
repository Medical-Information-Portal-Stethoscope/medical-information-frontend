const api = Object.freeze({
  baseUrl: 'https://stethoscope-portal.ru/api/v1/',

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
        reset: 'reset_password/', // in auth form
        resetConfirmation: 'reset_password_confirm/', // in auth form
        change: 'set_password/', // in profile
      },

      me: 'me/',

      subscription: 'subscription/',
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
