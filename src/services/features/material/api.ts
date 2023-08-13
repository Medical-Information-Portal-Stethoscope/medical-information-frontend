import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api-routes';
import { TArticle, IComment } from 'utils/types/article';

interface IErrorResponse {
  [key: string]: string | number | string[];
}

type TAddCommentReq = {
  materialId: string;
  text: string;
};

const token = localStorage.getItem('auth_token');

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
  IComment,
  TAddCommentReq,
  { rejectValue: IErrorResponse }
>('material/addComment', async (reqData, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.articles.base}/${reqData.materialId}/comments/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          text: reqData.text,
        }),
      }
    );

    const resBody: IComment = await res.json();

    if (!res.ok) {
      throw Object.assign(resBody, { status: res?.status });
    }

    return resBody as IComment;
  } catch (err) {
    return rejectWithValue(err as IErrorResponse);
  }
});

export const removeCommentFromMaterial = createAsyncThunk<
  IComment,
  { materialId: string; commentId: string },
  { rejectValue: IErrorResponse }
>(
  'material/removeComment',
  async ({ materialId, commentId }, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${api.baseUrl}${api.endpoints.articles.base}/${materialId}/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        }
      );

      const resBody = await res.json();

      if (!res.ok) {
        throw Object.assign(resBody, { status: res?.status });
      }

      return resBody;
    } catch (err) {
      return rejectWithValue(err as IErrorResponse);
    }
  }
);
