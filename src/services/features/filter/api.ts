import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api-routes';
import { TArticle } from 'utils/types/article';

interface IErrorResponse {
  [key: string]: string | number | string[];
}

type TGetInformationMaterialResponse = {
  next: string;
  previous: null;
  results: TArticle[];
};

export const getFilteredArticles = createAsyncThunk<
  TGetInformationMaterialResponse,
  { id: string; idNewsTag: string },
  { rejectValue: IErrorResponse }
>('articles/getDataById', async (ids, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.articles.base}/?tags_exclude=${ids.idNewsTag}&tags=${ids.id}`
    );

    const resBody = await res.json();

    if (!res.ok) {
      throw Object.assign(resBody, { status: res?.status });
    }

    return resBody;
  } catch (err) {
    return rejectWithValue(err as IErrorResponse);
  }
});
