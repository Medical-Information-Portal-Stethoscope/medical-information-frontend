import { createSlice } from '@reduxjs/toolkit';
import { TErrorResponse, IUserPersonalData } from './types';
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserPersonalData,
  changeUserName,
  changeUserAvatar,
  subscribeUserToMailingList,
  unsubscribeUserFromMailingList,
} from './api';

type TSliceState = {
  user: IUserPersonalData | null;

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

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.process.error = null;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
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

      .addCase(changeUserName.pending, (state) => {
        state.process.isLoading = true;
      })
      .addCase(changeUserName.fulfilled, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = null;
        state.user = payload;
      })
      .addCase(changeUserName.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload !== undefined ? payload : null;
      })

      .addCase(changeUserAvatar.fulfilled, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = null;
        state.user = payload;
      })
      .addCase(changeUserAvatar.rejected, (state, { payload }) => {
        state.process.isLoading = false;
        state.process.error = payload !== undefined ? payload : null;
      })

      .addCase(subscribeUserToMailingList.fulfilled, (state) => {
        state.process.error = null;

        if (state.user) {
          state.user.subscribed = true;
        }
      })
      .addCase(subscribeUserToMailingList.rejected, (state, { payload }) => {
        state.process.error = payload !== undefined ? payload : null;
      })

      .addCase(unsubscribeUserFromMailingList.fulfilled, (state) => {
        state.process.error = null;

        if (state.user) {
          state.user.subscribed = false;
        }
      })
      .addCase(
        unsubscribeUserFromMailingList.rejected,
        (state, { payload }) => {
          state.process.error = payload !== undefined ? payload : null;
        }
      )

      .addDefaultCase((state) => state);
  },
});

export const { resetServerError } = userSlice.actions;
export default userSlice.reducer;
