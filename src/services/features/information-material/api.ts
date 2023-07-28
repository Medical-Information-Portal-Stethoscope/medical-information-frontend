import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TArticle } from 'utils/types/article';
import api from 'utils/api-routes';

type TGetInformationMaterialResponse = {
  next: string;
  previous: null;
  results: TArticle[];
};

export const informationMaterialApi = createApi({
  reducerPath: 'informationMaterial',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseUrl }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllArticles: builder.query<
      TGetInformationMaterialResponse,
      string | undefined
    >({
      query: (id) => `${api.endpoints.articles.base}/?tags_exclude=${id}`,
    }),
    getAllNews: builder.query<
      TGetInformationMaterialResponse,
      string | undefined
    >({
      query: (id) => `${api.endpoints.articles.base}/?tags=${id}`,
    }),
  }),
});

export const { useGetAllArticlesQuery, useGetAllNewsQuery } =
  informationMaterialApi;
