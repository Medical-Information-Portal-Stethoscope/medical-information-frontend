import api from 'utils/api-routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TError, TGetInformationMaterialResponse } from './types';

export const getFirstSearchPage = createAsyncThunk<
  TGetInformationMaterialResponse,
  { query: string; pageSize: string },
  { rejectValue: TError }
>(
  'search/getFirstSearchPage',
  async ({ query, pageSize }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${api.baseUrl}${api.endpoints.articles.base}/${api.endpoints.search.base}?page_size=${pageSize}&query=${query}`
      );

      const data: TGetInformationMaterialResponse = await response.json();

      if (!response.ok) {
        throw data;
      }

      return { ...data, query };
    } catch (err) {
      return rejectWithValue(err as TError);
    }
  }
);

export const getNextSearchPage = createAsyncThunk<
  TGetInformationMaterialResponse,
  string,
  { rejectValue: TError }
>('search/getNextSearchPage', async (nextUrl, { rejectWithValue }) => {
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
