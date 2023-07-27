import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from 'services/features/articles/api';
import { tagsApi } from 'services/features/tags/api';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware, tagsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
