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
  async (data: IUserRegistration, { rejectWithValue }) => {
    try {
      const res = await fetch(`${api.baseUrl}${api.endpoints.user.base}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resBody = await res.json();

      if (!res.ok) {
        throw resBody;
      }

      return resBody as IUserRegistrationResponse;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data: IUserLogin, { rejectWithValue }) => {
    try {
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

      const resBody = await res.json();

      if (!res.ok) {
        throw resBody;
      }

      return resBody as IUserLoginResponse;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
