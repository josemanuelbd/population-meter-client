import { Action } from '../../../types';

export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR'
}

type LoginRequest = Action<ActionTypes.LOGIN_REQUEST>;
type LoginSuccess = Action<ActionTypes.LOGIN_SUCCESS>;
type LoginError = Action<ActionTypes.LOGIN_ERROR>;
type LogoutRequest = Action<ActionTypes.LOGOUT_REQUEST>;
type LogoutSuccess = Action<ActionTypes.LOGOUT_SUCCESS>;
type LogoutError = Action<ActionTypes.LOGOUT_ERROR>;

export type LoginActionType = LoginRequest | LoginSuccess | LoginError | LogoutRequest | LogoutSuccess | LogoutError;
