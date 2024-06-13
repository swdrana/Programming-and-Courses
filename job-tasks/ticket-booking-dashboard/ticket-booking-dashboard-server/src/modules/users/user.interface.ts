export type TUser = {
  name: string;
  email: string
};

export type TUserRegister = {
  name: string;
  email: string;
};

export type TUserLogin = {
  email: string;
};

export type IAuthResponse = {
  user: TUser;
  token: string;
};

export type TUserUpdate = {
  name?: string;
  email?: string;
};
