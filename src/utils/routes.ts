const routes = Object.freeze({
  home: '/',

  signup: '/sign-up',
  signupActivation: '/activate',
  signin: '/sign-in',
  password: {
    reset: '/reset-password',
    resetConfirmation: '/reset-password-confirmation',
  },

  news: { route: '/news', name: 'Новости' },
  articles: { route: '/articles', name: 'Статьи' },
  podcasts: { route: '/podcasts', name: 'Подкасты' },
  drugs: { route: '/drugs', name: 'Лекарства и БАД' },
  doctorQuestion: { route: '/doctor', name: 'Вопрос врачу' },
  about: { route: '/about', name: 'О портале' },
  profile: '/profile',
  favorites: 'favorites',
  publication: 'creating-an-article',
  authors: { route: '/authors', name: 'Авторам' },
});

export default routes;
