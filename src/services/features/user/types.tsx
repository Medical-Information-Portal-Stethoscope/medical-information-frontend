export interface IUser {
  email: string;
}

export interface IUserRegistration extends IUser {
  first_name: string;
  last_name: string;
  password: string;
}

export interface IUserLogin extends IUser {
  password: string;
}

export interface IUserRegistrationResponse {
  user: {
    email: string;
    first_name: string;
    last_name: string;
  };
}

export interface IUserLoginResponse {
  user: {
    auth_token: string;
  };
}
