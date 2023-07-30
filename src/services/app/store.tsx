import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from 'services/features/articles/api';
import userSlice from 'services/features/user/slice';

import { authMiddleware } from 'services/features/user/middlewares';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, articlesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
