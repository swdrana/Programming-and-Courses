export interface IUser {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserRegister {
  name: string;
  email: string;
}

export interface IUserLogin {
  email: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
}
