import { createSlice } from '@reduxjs/toolkit';
import { IUser } from './types';
import { registerUser, loginUser } from './api';

type TSliceState = {
  user: IUser | null;

  process: {
    isLoading: boolean;
    error: null | any; // TODO: коллеги, если подправите тип, буду признателен. Устал бороться с TS >_<
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
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload;

        state.process.isLoading = false;
        state.process.error = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.process.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.process.isLoading = false;
        state.process.error = null;

        // TODO: по идее, бэки должны посылать имя и фамилию юзера для сохранения в store и отображения в лк
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload;
      })

      .addDefaultCase((state) => state);
  },
});

export const { resetServerError } = userSlice.actions;
export default userSlice.reducer;
