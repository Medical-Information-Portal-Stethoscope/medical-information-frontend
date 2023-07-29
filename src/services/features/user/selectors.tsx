import { RootState } from 'services/app/store';

export const isLoading = (state: RootState) => state.user.process.isLoading;
