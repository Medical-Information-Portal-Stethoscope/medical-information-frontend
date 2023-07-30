import { RootState } from 'services/app/store';

export const isLoading = (state: RootState) => state.user.process.isLoading;
export const showServerError = (state: RootState) => state.user.process.error;
