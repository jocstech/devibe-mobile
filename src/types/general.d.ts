declare interface UserLoginType {
  username: string;
  password: string;
}

declare interface UserType {
  username: string;
  password: string;
  role: string;
  roleId: string;
  permissions: string | string[];
}

declare interface LoginParams {
  username: string;
  password: string;
}

declare interface LoginResponse {
  token: string;
}

declare interface Role {
  readonly name?: string;
  readonly value?: string;
  readonly description?: string;
  readonly icon?: string;
  readonly subset?: Role[];
}

declare interface User {
  readonly _id?: string;
  username?: string;
  email?: string;
  avatar?: string;
  nickname?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  verified?: boolean;
  blocked?: boolean;
  roles?: Role[];
  iat?: number;
  exp?: number;
}
