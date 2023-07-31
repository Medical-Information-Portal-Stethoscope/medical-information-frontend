import { RootState } from 'services/app/store';

// SERVER
export const isLoading = (state: RootState) => state.user.process.isLoading;
export const showServerError = (state: RootState) => state.user.process.error;

// USER
export const showUserPersonalData = (state: RootState) => state.user;
