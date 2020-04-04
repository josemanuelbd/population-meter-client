import { createReducer } from 'base';
import { ActionHandler } from 'base/types';
import produce from 'immer';
import { ActionTypes, LoginActionType } from '../actionTypes';
import { loginInitialState } from '../models';
import { LoginState } from '../types';

const loginRequest = (state: LoginState) =>
  produce(state, draft => {
    draft.isFetching = true;
  });

const loginError = (state: LoginState) =>
  produce(state, draft => {
    draft.isFetching = false;
  });

const loginSuccess = (state: LoginState, action: LoginActionType) =>
  produce(state, draft => {
    Object.keys(action.payload).forEach(key => {
      // @ts-ignore
      draft[key] = action.payload[key];
    });
    draft.isFetching = false;
  });

const logoutRequest = (state: LoginState) =>
  produce(state, draft => {
    draft.isFetching = true;
  });

const logoutError = (state: LoginState) =>
  produce(state, draft => {
    draft.isFetching = false;
  });

const logoutSuccess = () => ({ ...loginInitialState });

const actionHandlers: ActionHandler<LoginState> = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(loginInitialState, actionHandlers);
