const routes = Object.freeze({
  home: '/',
  signup: '/sign-up',
  signin: '/sign-in',
  news: { route: '/news', name: 'Новости' },
  articles: { route: '/articles', name: 'Статьи' },
  podcasts: { route: '/podcasts', name: 'Подкасты' },
  drugs: { route: '/drugs', name: 'Лекарства и БАД' },
  doctorQuestion: { route: '/doctor', name: 'Вопрос врачу' },
  about: { route: '/about', name: 'О портале' },
});

export default routes;