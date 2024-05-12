import {user} from './user';

export type otpResponse = {};

export type loginResponse = {
  id: string;
  type: 'users';
  attributes: user;
};
