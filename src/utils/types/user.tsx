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
