import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'utils/types/user';
import { registerUser } from './api';

type TSliceState = {
  user: IUser | null;

  process: {
    isLoading: boolean;
    error: null;
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
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.process.isLoading = true;
        state.process.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;

        state.process.isLoading = false;
        state.process.error = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload;
      })

      .addDefaultCase((state) => state);
  },
});

export default userSlice.reducer;
