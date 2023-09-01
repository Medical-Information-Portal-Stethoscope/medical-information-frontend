import { configureStore } from '@reduxjs/toolkit';
import { informationMaterialApi } from 'services/features/information-material/api';
import userReducer from 'services/features/user/slice';
import { tagsApi } from 'services/features/tags/api';
import contentReducer from 'services/features/information-material/slice';

import { authMiddleware } from 'services/features/user/middlewares';
import { filteredArticlesSlice } from 'services/features/filter/slice';
import { materialReducer } from 'services/features/material/slice';

import searchReducer from 'services/features/search/slice';

export const store = configureStore({
  reducer: {
    [informationMaterialApi.reducerPath]: informationMaterialApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    user: userReducer,
    [filteredArticlesSlice.name]: filteredArticlesSlice.reducer,
    content: contentReducer,
    material: materialReducer,
    search: searchReducer,
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
