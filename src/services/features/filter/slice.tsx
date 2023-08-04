import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TArticle } from 'utils/types/article';
import { getFilteredArticles } from './api';

export type TErrorResponse = {
  [key: string]: string[];
};

export type TGetInformationMaterialResponse = {
  next: string;
  previous: null;
  results: TArticle[];
};

type TSliceState = {
  articles: TArticle[] | null;

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
  initialState,
  reducers: {
    getAllArticles(
      state,
      action: PayloadAction<TGetInformationMaterialResponse>
    ) {
      state.articles = action.payload.results;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilteredArticles.fulfilled, (state, action) => {
      state.articles = action.payload.results;
    });
  },
});
export const { getAllArticles } = filteredArticlesSlice.actions;
