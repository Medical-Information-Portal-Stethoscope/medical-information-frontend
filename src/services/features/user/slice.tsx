import { createSlice } from '@reduxjs/toolkit';
import { IUser, TErrorResponse } from './types';
import { registerUser, loginUser, getUserPersonalData } from './api';

type TSliceState = {
  user: IUser | null;

  process: {
    isLoading: boolean;
    error: null | TErrorResponse;
  };
};

const initialState = {
  user: null,

  process: {
    isLoading: false,
    error: null,
  },
} as TSliceState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetServerError(state) {
      state.process.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.process.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.process.isLoading = false;
        state.process.error = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload !== undefined ? payload : null;
      })

      .addCase(loginUser.pending, (state) => {
        state.process.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.process.isLoading = false;
        state.process.error = null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload !== undefined ? payload : null;
      })

      .addCase(getUserPersonalData.pending, (state) => {
        state.process.isLoading = true;
      })
      .addCase(getUserPersonalData.fulfilled, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = null;
        state.user = payload;
      })
      .addCase(getUserPersonalData.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload !== undefined ? payload : null;
      })

      .addDefaultCase((state) => state);
  },
});

export const { resetServerError } = userSlice.actions;
export default userSlice.reducer;
