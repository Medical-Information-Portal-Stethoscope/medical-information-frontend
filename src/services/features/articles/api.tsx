import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TArticle } from 'utils/types/article';
import api from 'utils/api-routes';

type TGetArticlesResponse = {
  next: string;
  previous: null;
  results: TArticle[];
};

export const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseUrl }),
  endpoints: (builder) => ({
    getArticles: builder.query<TGetArticlesResponse, void>({
      query: () => api.endpoints.articles.base,
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
