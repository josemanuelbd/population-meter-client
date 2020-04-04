import { ActionTypes, LoginActionType } from '../actionTypes';
import reducer from '.';

describe('Login reducer', () => {
  const initialState = reducer(undefined, { type: 'INIT' });

  describe('Login actions', () => {
    it('should mark isFetching as true', () => {
      const expectedState = {
        ...initialState,
        isFetching: true
      };

      const nextState = reducer(initialState, { type: ActionTypes.LOGIN_REQUEST });

      expect(nextState).toStrictEqual(expectedState);
    });

    it('should mark isFetching as false, and store user data', () => {
      const state = {
        ...initialState,
        isFetching: true
      };

      const action: LoginActionType = { type: ActionTypes.LOGIN_SUCCESS, payload: { id: 1, name: 'Test' } };

      const expectedState = {
        ...state,
        id: 1,
        name: 'Test',
        isFetching: false
      };

      const nextState = reducer(state, action);

      expect(nextState).toStrictEqual(expectedState);
    });

    it('should mark isFetching as false', () => {
      const state = {
        ...initialState,
        isFetching: true
      };

      const nextState = reducer(state, { type: ActionTypes.LOGIN_ERROR });

      expect(nextState).toStrictEqual(initialState);
    });
  });

  describe('Logout actions', () => {
    it('should mark isFetching as true', () => {
      const expectedState = {
        ...initialState,
        isFetching: true
      };

      const nextState = reducer(initialState, { type: ActionTypes.LOGOUT_REQUEST });

      expect(nextState).toStrictEqual(expectedState);
    });

    it('should mark isFetching as false, and store user data', () => {
      const state = {
        ...initialState,
        id: 1,
        name: 'Test',
        isFetching: true
      };

      const nextState = reducer(state, { type: ActionTypes.LOGOUT_SUCCESS });

      expect(nextState).toStrictEqual(initialState);
    });

    it('should mark isFetching as false', () => {
      const state = {
        ...initialState,
        isFetching: true
      };

      const nextState = reducer(state, { type: ActionTypes.LOGOUT_ERROR });

      expect(nextState).toStrictEqual(initialState);
    });
  });
});
