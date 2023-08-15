import { RootState } from 'services/app/store';

export const getDataById = (state: RootState) => state.material;

export const getErrStatusAboutDataId = (state: RootState) =>
  state.material.process.error;
