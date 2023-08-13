import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api-routes';
import { TArticle, TComment } from 'utils/types/article';

interface IErrorResponse {
  [key: string]: string | number | string[];
}

export const getMaterialById = createAsyncThunk<
  TArticle,
  string,
  { rejectValue: IErrorResponse }
>('material/getDataById', async (id, { rejectWithValue }) => {
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

export const addCommentToMaterial = createAsyncThunk<
  TComment,
  { materialId: string; text: string },
  { rejectValue: IErrorResponse }
>('material/addComment', async ({ materialId, text }, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.articles.base}/${materialId}/comments/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
        }),
      }
    );

    const resBody: TComment = await res.json();

    if (!res.ok) {
      throw Object.assign(resBody, { status: res?.status });
    }

    return resBody as TComment;
  } catch (err) {
    return rejectWithValue(err as IErrorResponse);
  }
});

export const removeCommentFromMaterial = createAsyncThunk<
  TComment,
  { materialId: string; commentId: string },
  { rejectValue: IErrorResponse }
>(
  'material/addComment',
  async ({ materialId, commentId }, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${api.baseUrl}${api.endpoints.articles.base}/${materialId}/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const resBody: TComment = await res.json();

      if (!res.ok) {
        throw Object.assign(resBody, { status: res?.status });
      }

      return resBody as TComment;
    } catch (err) {
      return rejectWithValue(err as IErrorResponse);
    }
  }
);
