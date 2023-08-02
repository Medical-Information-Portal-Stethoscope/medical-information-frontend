import api from './api-routes';

export const resetPassword = async (data: { email: string }) => {
  try {
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

    throw new Error('Something went wrong');
  } catch (err) {
    return err;
  }
};
