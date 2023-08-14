import { Middleware, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';

export const authMiddleware: Middleware<
  unknown,
  unknown,
  ThunkDispatch<unknown, unknown, AnyAction>
> = () => (next) => (action) => {
  if (action.type === 'user/login/fulfilled') {
    localStorage.setItem('auth_token', action.payload.auth_token);
  }

  if (action.type === 'user/logout/fulfilled') {
    localStorage.removeItem('auth_token');
  }

  return next(action);
};
