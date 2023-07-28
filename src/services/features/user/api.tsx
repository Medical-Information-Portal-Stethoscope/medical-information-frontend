/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'utils/types/user';
import api from 'utils/api-routes';

interface IUserRegistration extends IUser {
  password: string;
  password_confirmation: string;
  personal_data_confirmation_has_agreed: boolean;
}

export const registerUser = createAsyncThunk(
  'user/register',
  async (data: IUserRegistration) => {
    const { email, password, first_name, last_name } = data;

    const res = await fetch(`${api.baseUrl}${api.endpoints.user.base}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, first_name, last_name }),
    });

    if (!res.ok) {
      Promise.reject(new Error(`Error ${res.status}`));
    }

    return res.json();
  }
);
