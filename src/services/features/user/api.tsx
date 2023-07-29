import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserRegistration, IUserLogin } from 'utils/types/user';
import api from 'utils/api-routes';

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

    return res.json();
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

    return res.json();
  }
);
