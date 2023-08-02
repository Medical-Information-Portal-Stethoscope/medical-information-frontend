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
    title: routes.about.name,
    to: routes.about.route,
  },
  {
    title: routes.authors.name,
    to: routes.authors.route,
  },
];

export const homeNavLink = {
  title: '',
  to: routes.home,
};
