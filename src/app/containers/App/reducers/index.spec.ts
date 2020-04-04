import reducer from '.';
import { AppActionType, ActionTypes } from '../actionTypes';

const initialState = reducer(undefined, { type: 'INIT' });

describe('App reducer', () => {
  it('should persist selected language', () => {
    const action: AppActionType = {
      type: ActionTypes.SET_LANGUAGE,
      payload: {
        lang: 'es'
      }
    };

    const expectedState = {
      ...initialState,
      lang: 'es'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).toStrictEqual(expectedState);
  });
});
