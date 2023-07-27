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
  tagTypes: [],
  endpoints: (builder) => ({
    getArticles: builder.query<TGetArticlesResponse, void>({
      query: () => api.endpoints.articles.base,
    }),
    getAllArticles: builder.query({
      query: (id) => `${api.endpoints.articles.base}/?tags_exclude=${id}`,
    }),
  }),
});

export const { useGetArticlesQuery, useGetAllArticlesQuery } = articlesApi;
