export interface IUser {
  email: string;
}

export interface IUserRegistration extends IUser {
  first_name: string;
  last_name: string;
  password: string;
  re_password: string;
}

export interface IUserLogin extends IUser {
  password: string;
}

export interface IUserRegistrationResponse {
  email: string;
  first_name: string;
  last_name: string;
}

export interface IUserLoginResponse {
  auth_token: string;
}

export interface IUserPersonalData extends IUserRegistrationResponse {
  id: string;
  rating: number;
  publications_amount: number;
  subscribed: boolean;
  role: string;
  avatar: string;
}

export type TErrorResponse = {
  [key: string]: string[];
};
