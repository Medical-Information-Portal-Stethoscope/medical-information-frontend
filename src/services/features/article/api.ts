import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api-routes';
import { TArticle } from 'utils/types/article';

type TErrorResponse = {
  [key: string]: string[];
};

export const getArticleById = createAsyncThunk<
  TArticle,
  string,
  { rejectValue: TErrorResponse }
>('article/getDataById', async (id, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.articles.base}/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const resBody: TArticle = await res.json();

    if (!res.ok) {
      throw resBody;
    }

    return resBody as TArticle;
  } catch (err) {
    return rejectWithValue(err as TErrorResponse);
  }
});
