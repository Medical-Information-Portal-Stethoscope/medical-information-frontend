/* eslint-disable camelcase */
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

export const logoutUser = createAsyncThunk<
  unknown,
  string,
  { rejectValue: TErrorResponse }
>('user/logout', async (token, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.user.auth.base}${api.endpoints.user.auth.logout}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw await res.json();
    }

    return 'You have successfully logged out';
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

export const changeUserName = createAsyncThunk<
  IUserPersonalData,
  { token: string; first_name: string; last_name: string },
  { rejectValue: TErrorResponse }
>('user/changingName', async (data, { rejectWithValue }) => {
  try {
    const { token, first_name, last_name } = data;

    const res = await fetch(
      `${api.baseUrl}${api.endpoints.user.base}${api.endpoints.user.me}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, last_name }),
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

export const changeUserAvatar = createAsyncThunk<
  IUserPersonalData,
  { token: string; avatar: string | ArrayBuffer },
  { rejectValue: TErrorResponse }
>('user/avatar', async (data, { rejectWithValue }) => {
  try {
    const { token, avatar } = data;

    const res = await fetch(
      `${api.baseUrl}${api.endpoints.user.base}${api.endpoints.user.me}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ avatar }),
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

export const subscribeUserToMailingList = createAsyncThunk<
  unknown,
  string,
  { rejectValue: TErrorResponse }
>('user/subscription', async (token, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.user.base}${api.endpoints.user.subscription}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw await res.json();
    }

    return 'Subscription is successfull';
  } catch (err) {
    return rejectWithValue(err as TErrorResponse);
  }
});

export const unsubscribeUserFromMailingList = createAsyncThunk<
  unknown,
  string,
  { rejectValue: TErrorResponse }
>('user/unsubscription', async (token, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${api.baseUrl}${api.endpoints.user.base}${api.endpoints.user.subscription}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw await res.json();
    }

    return 'Unsubscription is successfull';
  } catch (err) {
    return rejectWithValue(err as TErrorResponse);
  }
});
