// header navigation settings

import { NavLink } from './types/navigation';

const routeSettings = {
  news: { route: '/news', name: 'Новости' },
  articles: { route: '/articles', name: 'Статьи' },
  podcasts: { route: '/podcasts', name: 'Подкасты' },
  drugs: { route: '/grugs', name: 'Лекарства и БАД' },
  doctorQuestion: { route: '/doctorQuestion', name: 'Вопрос врачу' },
};

export const headerNavLinks: NavLink[] = [
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

const headerNavLinksPositionDesc = {};

const headerNavLinksPositionMob = {};
