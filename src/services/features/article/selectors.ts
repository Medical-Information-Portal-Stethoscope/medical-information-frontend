import { RootState } from 'services/app/store';

export const getDataById = (state: RootState) => state.article;

// export const getPreviewArticles = (state: RootState) =>
//   state.informationMaterial.queries.getAllArticles?.data

// export const getPreviewNews = (state: RootState) =>
//   state.informationMaterial.queries.getAllNews?.data;
