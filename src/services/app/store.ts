import { configureStore } from '@reduxjs/toolkit';
import { informationMaterialApi } from 'services/features/information-material/api';
import userSlice from 'services/features/user/slice';
import { tagsApi } from 'services/features/tags/api';

import { authMiddleware } from 'services/features/user/middlewares';

export const store = configureStore({
  reducer: {
    [informationMaterialApi.reducerPath]: informationMaterialApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authMiddleware,
      informationMaterialApi.middleware,
      tagsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
