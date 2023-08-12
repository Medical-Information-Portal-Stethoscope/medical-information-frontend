import { configureStore } from '@reduxjs/toolkit';
import { informationMaterialApi } from 'services/features/information-material/api';
import userSlice from 'services/features/user/slice';
import { tagsApi } from 'services/features/tags/api';
import contentSlice from 'services/features/information-material/slice';

import { authMiddleware } from 'services/features/user/middlewares';
import { filteredArticlesSlice } from 'services/features/filter/slice';
import { materialReducer } from 'services/features/material/slice';

export const store = configureStore({
  reducer: {
    [informationMaterialApi.reducerPath]: informationMaterialApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    user: userSlice,
    [filteredArticlesSlice.name]: filteredArticlesSlice.reducer,
    content: contentSlice,
    material: materialReducer,
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
