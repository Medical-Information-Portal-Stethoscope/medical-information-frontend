import { configureStore } from '@reduxjs/toolkit';
import { informationMaterialApi } from 'services/features/information-material/api';
import { tagsApi } from 'services/features/tags/api';

export const store = configureStore({
  reducer: {
    [informationMaterialApi.reducerPath]: informationMaterialApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      informationMaterialApi.middleware,
      tagsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;