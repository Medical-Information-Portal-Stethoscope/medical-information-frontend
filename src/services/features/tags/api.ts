import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import api from 'utils/api-routes';

export type TTags = {
  pk: string;
  name: string;
  children: Array<string>;
};

export const tagsApi = createApi({
  reducerPath: 'tags',
  baseQuery: fetchBaseQuery({ baseUrl: api.baseUrl }),
  endpoints: (builder) => ({
    getRootsTags: builder.query<TTags[], void>({
      query: () => api.endpoints.tags.roots,
    }),
    getSubtreeTags: builder.query({
      query: (id) => `/tags/${id}/subtree/`,
    }),
  }),
});

export const { useGetRootsTagsQuery, useGetSubtreeTagsQuery } = tagsApi;
