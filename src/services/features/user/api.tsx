import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'utils/api-routes';
import {
  IUserRegistration,
  IUserRegistrationResponse,
  IUserLogin,
  IUserLoginResponse,
  IUserPersonalData,
  TErrorResponse,
} from './types';

export const registerUser = createAsyncThunk<
  IUserRegistrationResponse,
  IUserRegistration,
  { rejectValue: TErrorResponse }
>('user/registration', async (data, { rejectWithValue }) => {
  try {
    const res = await fetch(`${api.baseUrl}${api.endpoints.user.base}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resBody: unknown = await res.json();

    if (!res.ok) {
      throw resBody;
    }

    return resBody as IUserRegistrationResponse;
  } catch (err) {
    return rejectWithValue(err as TErrorResponse);
  }
});

export const loginUser = createAsyncThunk<
  IUserLoginResponse,
  IUserLogin,
  { rejectValue: TErrorResponse }
>('user/login', async (data, { rejectWithValue }) => {
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

    const resBody: unknown = await res.json();

    if (!res.ok) {
      throw resBody;
    }

    return resBody as IUserLoginResponse;
  } catch (err) {
    return rejectWithValue(err as TErrorResponse);
  }
});

export const getUserPersonalData = createAsyncThunk<
  IUserPersonalData,
  string,
  { rejectValue: TErrorResponse }
>('user/personalData', async (token, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.user.base}${api.endpoints.user.me}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    const resBody: unknown = await res.json();

    if (!res.ok) {
      throw resBody;
    }

    return resBody as IUserPersonalData;
  } catch (err) {
    return rejectWithValue(err as TErrorResponse);
  }
});
