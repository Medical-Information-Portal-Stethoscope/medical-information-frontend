import { createSlice } from '@reduxjs/toolkit';
import { TArticle } from 'utils/types/article';
import { getFirstSearchPage, getNextSearchPage } from './api';

type TSliceState = {
  storage: TArticle[];
  nextPage: string | null | undefined;
  isAllMaterials: boolean;
  query: string;

  process: {
    isLoading: boolean;
    error: string;
  };
};

const initialState: TSliceState = {
  storage: [],
  nextPage: '',
  isAllMaterials: false,
  query: '',
  process: {
    isLoading: false,
    error: '',
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFirstSearchPage.pending, (state) => {
      state.process.isLoading = true;
    });
    builder.addCase(getFirstSearchPage.fulfilled, (state, action) => {
      state.storage = action.payload.results;

      if (action.payload.next) {
        state.nextPage = action.payload.next;
        state.isAllMaterials = false;
      } else {
        state.isAllMaterials = true;
      }

      state.process.isLoading = false;
    });
    builder.addCase(getFirstSearchPage.rejected, (state, action) => {
      if (action.payload) {
        state.process.error = action.payload.detail;
        state.process.isLoading = false;
      }
    });

    builder.addCase(getNextSearchPage.pending, (state) => {
      state.process.isLoading = true;
    });
    builder.addCase(getNextSearchPage.fulfilled, (state, action) => {
      const data = action.payload.results;
      state.storage.push(...data);

      if (action.payload.next) {
        state.nextPage = action.payload.next;
      } else {
        state.isAllMaterials = true;
      }

      state.process.isLoading = false;
    });
    builder.addCase(getNextSearchPage.rejected, (state, action) => {
      if (action.payload) {
        state.process.error = action.payload.detail;
        state.process.isLoading = false;
      }
    });
  },
});

export default searchSlice.reducer;
