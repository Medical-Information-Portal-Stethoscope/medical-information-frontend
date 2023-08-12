import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import api from 'utils/api-routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TArticle } from 'utils/types/article';
import { TError, TGetInformationMaterialResponse } from './types';

export const informationMaterialApi = createApi({
  reducerPath: 'informationMaterial',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseUrl }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllArticles: builder.query<
      TGetInformationMaterialResponse,
      string | undefined
    >({
      query: (idNewsTag) =>
        `${api.endpoints.articles.base}/?tags_exclude=${idNewsTag}`,
    }),

    getAllNews: builder.query<
      TGetInformationMaterialResponse,
      string | undefined
    >({
      query: (id) => `${api.endpoints.articles.base}/?tags=${id}`,
    }),

    getMaterialById: builder.query<TArticle, string | undefined>({
      query: (id) => `${api.endpoints.articles.base}/${id}`,
    }),

    getMostPopularArticle: builder.query<TArticle, void>({
      query: () => `${api.endpoints.articles.base}/the_most_popular`,
    }),

    getArticlesbyTags: builder.query<
      TGetInformationMaterialResponse,
      string | undefined
    >({
      query: (tagsQuery) => `${api.endpoints.articles.base}/?${tagsQuery}`,
    }),
  }),
});

export const getNextPageContent = createAsyncThunk<
  TGetInformationMaterialResponse,
  string,
  { rejectValue: TError }
>('content/getNextPageContent', async (nextUrl, { rejectWithValue }) => {
  try {
    const response = await fetch(`${nextUrl}`);

    const data: TGetInformationMaterialResponse = await response.json();

    if (!response.ok) {
      throw data;
    }

    return data;
  } catch (err) {
    return rejectWithValue(err as TError);
  }
});

export const {
  useGetAllArticlesQuery,
  useGetAllNewsQuery,
  useGetMaterialByIdQuery,
  useGetMostPopularArticleQuery,
  useGetArticlesbyTagsQuery,
} = informationMaterialApi;
