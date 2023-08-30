import { RootState } from '../../app/store';

export const searchStorage = (state: RootState) => state.search.storage;

export const nextSearchPage = (state: RootState) => state.search.nextPage;

export const isAllContent = (state: RootState) => state.search.isAllMaterials;

export const isLoadingContent = (state: RootState) =>
  state.search.process.isLoading;
