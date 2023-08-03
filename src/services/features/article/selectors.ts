import { RootState } from 'services/app/store';

export const getDataById = (state: RootState) => state.article;

export const getErrStatusAboutDataId = (state: RootState) =>
  state.article.process.error;
