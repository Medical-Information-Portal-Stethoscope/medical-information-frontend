import { RootState } from '../../app/store';

export const articlesStorage = (state: RootState) =>
  state.content.articles.storage;

export const nextArticlesPage = (state: RootState) =>
  state.content.articles.nextPage;

export const isAllContentArticles = (state: RootState) =>
  state.content.articles.isAllArticles;

export const newsStorage = (state: RootState) => state.content.news.storage;

export const nextNewsPage = (state: RootState) => state.content.news.nextPage;

export const isAllContentNews = (state: RootState) =>
  state.content.news.isAllNews;

export const isLoadingContent = (state: RootState) =>
  state.content.process.isLoading;
