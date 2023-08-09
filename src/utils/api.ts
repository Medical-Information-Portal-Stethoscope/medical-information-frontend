import api from './api-routes';

// USER
export const confirmSignUp = async (
  uid: string | null,
  token: string | null
) => {
  const res = await fetch(
    `${api.baseUrl}${api.endpoints.user.base}${api.endpoints.user.signupActivation}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid,
        token,
      }),
    }
  );

  if (res.ok) {
    return 'Email is successfully confirmed';
  }

  throw new Error('Something went wrong');
};

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

// ARTICLES
export const createArticle = async (data) => {
  console.log(data);

  const res = await fetch(`${api.baseUrl}${api.endpoints.articles.base}/`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${localStorage.getItem('auth_token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const body = await res.json();

  if (res.ok) {
    return body;
  }

  throw new Error('Something went wrong');
};
