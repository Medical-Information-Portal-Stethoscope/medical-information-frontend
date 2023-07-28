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
  async (data: IUserRegistration, { rejectWithValue }) => {
    const { email, password, first_name, last_name } = data;

    try {
      const res = await fetch(`${api.baseUrl}${api.endpoints.user.base}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, first_name, last_name }),
      });

      console.log(res);

      if (!res.ok) {
        Promise.reject(new Error(`Error ${res.status}`));
      }

      const success = await res.json();

      return success;
    } catch (err) {
      return rejectWithValue(`User registration error: ${err}`);
    }
  }
);
