import api from './api-routes';

export const resetPassword = async (data: { email: string }) => {
  const res = await fetch(
    `${api.baseUrl}${api.endpoints.user.base}${api.endpoints.user.password.reset}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (res.ok) {
    return "Link for password reset is sent on user's email";
  }

  throw await res.json();
};

export const resetPasswordConfirmation = async (
  uid: string | null,
  token: string | null,
  data: {
    password: string;
    password_confirmation: string;
  }
) => {
  const res = await fetch(
    `${api.baseUrl}${api.endpoints.user.base}${api.endpoints.user.password.resetConfirmation}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid,
        token,
        new_password: data.password,
        re_new_password: data.password_confirmation,
      }),
    }
  );

  if (res.ok) {
    return "Link for password reset is sent on user's email";
  }

  throw new Error('Something went wrong');
};
