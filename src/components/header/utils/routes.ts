import { NavLinkType } from '../types/navigation';

const routeSettings = {
  news: { route: '/news', name: 'Новости' },
  articles: { route: '/articles', name: 'Статьи' },
  podcasts: { route: '/podcasts', name: 'Подкасты' },
  drugs: { route: '/grugs', name: 'Лекарства и БАД' },
  doctorQuestion: { route: '/doctor', name: 'Вопрос врачу' },
  profile: { route: '/profile', name: '' },
  home: { route: '/', name: '' },
};

Object.freeze(routeSettings);

export const headerNavLinks: NavLinkType[] = [
  {
    title: routeSettings.news.name,
    to: routeSettings.news.route,
  },
  {
    title: routeSettings.articles.name,
    to: routeSettings.articles.route,
  },
  {
    title: routeSettings.podcasts.name,
    to: routeSettings.podcasts.route,
  },
  {
    title: routeSettings.drugs.name,
    to: routeSettings.drugs.route,
  },
  {
    title: routeSettings.doctorQuestion.name,
    to: routeSettings.doctorQuestion.route,
  },
];

export const profileNavLink = {
  title: routeSettings.profile.name,
  to: routeSettings.profile.route,
};

export const homeNavLink = {
  title: routeSettings.home.name,
  to: routeSettings.home.route,
};
