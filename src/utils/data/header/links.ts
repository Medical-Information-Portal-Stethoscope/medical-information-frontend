import routes from 'utils/routes';

export const headerNavLinks = [
  {
    title: routes.news.name,
    to: routes.news.route,
  },
  {
    title: routes.articles.name,
    to: routes.articles.route,
  },
  {
    title: routes.podcasts.name,
    to: routes.podcasts.route,
  },
  {
    title: routes.drugs.name,
    to: routes.drugs.route,
  },
  {
    title: routes.doctorQuestion.name,
    to: routes.doctorQuestion.route,
  },
];

export const homeNavLink = {
  title: '',
  to: routes.home,
};
