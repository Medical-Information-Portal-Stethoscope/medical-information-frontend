import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TArticle } from 'utils/types/article';
import {
  getFilteredArticles,
  getFilteredArticlesForModal,
  IErrorResponse,
} from './api';

export type TGetInformationMaterialResponse = {
  next: string;
  previous: null;
  results: TArticle[];
};

type TSliceState = {
  articles: TGetInformationMaterialResponse | null;

  process: {
    isLoading: boolean;
    error: IErrorResponse | null;
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
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilteredArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
    builder.addCase(getFilteredArticles.rejected, (state, { payload }) => {
      state.process.isLoading = false;
      state.process.error = payload !== undefined ? payload : null;
    });
    builder.addCase(getFilteredArticlesForModal.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
    builder.addCase(
      getFilteredArticlesForModal.rejected,
      (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload !== undefined ? payload : null;
      }
    );
  },
});
export const { getAllArticles } = filteredArticlesSlice.actions;
