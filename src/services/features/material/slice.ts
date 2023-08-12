import { createSlice } from '@reduxjs/toolkit';
import { TArticle } from 'utils/types/article';
import { getMaterialById } from './api';

interface IErrorResponse {
  [key: string]: string | number | string[];
}

type TSliceState = {
  material: TArticle | null;

  process: {
    isLoading: boolean;
    error: null | IErrorResponse;
  };
};

const initialState = {
  material: null,

  process: {
    isLoading: false,
    error: null,
  },
} as TSliceState;

const materialSlice = createSlice({
  name: 'material',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getMaterialById.pending, (state) => {
        state.process.isLoading = true;
        state.process.error = null;
        state.material = null;
      })
      .addCase(getMaterialById.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload !== undefined ? payload : null;
      })
      .addCase(getMaterialById.fulfilled, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = null;
        state.material = payload;
      });
  },
});

export const materialReducer = materialSlice.reducer;
