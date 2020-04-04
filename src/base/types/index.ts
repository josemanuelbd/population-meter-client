import { Action as ReduxAction } from 'redux';
import { LoginState } from 'containers/Login/types';
import { AppState } from 'app/containers/App/models';

export interface Action extends ReduxAction {
  type: string;
}

export interface ActionHandler<T> {
  [key: string]: (state: T, action: Action) => T;
}

export interface RootState {
  app: AppState;
  login: LoginState;
}

export interface RootReducer {
  app: (state: AppState, action: Action) => AppState;
  login: (state: LoginState, action: Action) => LoginState;
}
