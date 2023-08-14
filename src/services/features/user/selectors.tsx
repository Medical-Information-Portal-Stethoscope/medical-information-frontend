import { RootState } from 'services/app/store';

// SERVER
export const isLoading = (state: RootState) => state.user.process.isLoading;
export const showServerError = (state: RootState) => state.user.process.error;

// USER
export const isUserAuthChecked = (state: RootState) => state.user.isAuthChecked;
export const showUserPersonalData = (state: RootState) => state.user;
