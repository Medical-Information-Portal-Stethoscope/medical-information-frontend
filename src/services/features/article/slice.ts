import { createSlice } from '@reduxjs/toolkit';
import { TArticle } from 'utils/types/article';
import { getArticleById } from './api';

type TErrorResponse = {
  [key: string]: string[];
};

type TSliceState = {
  article: TArticle | null;

  process: {
    isLoading: boolean;
    error: null | TErrorResponse;
    errorCode: number | string;
  };
};

const initialState = {
  article: null,

  process: {
    isLoading: false,
    error: null,
  },
} as TSliceState;

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getArticleById.pending, (state) => {
        state.process.isLoading = true;
        state.process.error = null;
        state.article = null;
      })
      .addCase(getArticleById.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload !== undefined ? payload : null;
      })
      .addCase(getArticleById.fulfilled, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = null;
        state.article = payload;
      });
  },
});

export const articleReducer = articleSlice.reducer;
