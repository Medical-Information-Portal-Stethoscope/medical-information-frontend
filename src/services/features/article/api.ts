import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api-routes';
import { TArticle } from 'utils/types/article';

interface IErrorResponse {
  [key: string]: string | number | string[];
}

export const getArticleById = createAsyncThunk<
  TArticle,
  string,
  { rejectValue: IErrorResponse }
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
      throw Object.assign(resBody, { status: res?.status });
    }

    return resBody as TArticle;
  } catch (err) {
    return rejectWithValue(err as IErrorResponse);
  }
});
