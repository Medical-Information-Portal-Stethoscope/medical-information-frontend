import { createSlice } from '@reduxjs/toolkit';
import { TArticle } from 'utils/types/article';
import { getFilteredArticles } from './api';

export type TErrorResponse = {
  [key: string]: string[];
};

type TSliceState = {
  articles: any | null;

  process: {
    isLoading: boolean;
    error: null | TErrorResponse;
  };
};

const initialState = {
  articles: null,

  process: {
    isLoading: false,
    error: null,
  },
} as TSliceState;

export const filteredArticlesSlice = createSlice({
  name: 'filteredArticles',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFilteredArticles.fulfilled, (state, action) => {
      state.articles = action.payload.results;
    });
  },
});
