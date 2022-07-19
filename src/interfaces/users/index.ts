export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUser extends IUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdate {
  id: string;
  name?: string;
  email?: string;
  age?: number;
}
