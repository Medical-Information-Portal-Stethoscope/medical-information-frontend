import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import api from 'utils/api-routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const { useGetAllArticlesQuery, useGetAllNewsQuery } =
  informationMaterialApi;
