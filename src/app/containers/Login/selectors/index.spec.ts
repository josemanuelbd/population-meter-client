import { rootReducer } from 'base/reducers';
import * as selectors from '.';

const initialState = rootReducer(undefined, { type: 'INIT' });

describe('Login selectors', () => {
  describe('getLoginData', () => {
    it('should return user data', () => {
      const user = selectors.getLoginData(initialState);

      const expectedUser = {
        id: -1,
        name: 'Default Text'
      };

      expect(user).toStrictEqual(expectedUser);
    });
  });

  describe('isFetchingLogin', () => {
    it('should return user data', () => {
      const isFetching = selectors.isFetchingLogin(initialState);

      expect(isFetching).toBeFalsy();
    });
  });
});
