import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api-routes';
import {
  IUserRegistration,
  IUserRegistrationResponse,
  IUserLogin,
  IUserLoginResponse,
} from './types';

export const registerUser = createAsyncThunk(
  'user/registration',
  async (data: IUserRegistration) => {
    const res = await fetch(`${api.baseUrl}${api.endpoints.user.base}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      Promise.reject(new Error(`Error ${res.status}`));
    }

    return (await res.json()) as IUserRegistrationResponse;
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data: IUserLogin) => {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.user.auth.base}${api.endpoints.user.auth.login}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      Promise.reject(new Error(`Error ${res.status}`));
    }

    return (await res.json()) as IUserLoginResponse;
  }
);
