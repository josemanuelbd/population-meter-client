import { createUserFromServer } from '.';

describe('Login models', () => {
  describe('createUserFromServer', () => {
    it('should return undefined', () => {
      const userFromServer = {
        // @ts-ignore
        id: undefined,
        name: 'Test user'
      };

      const user = createUserFromServer(userFromServer);

      expect(user).toBeUndefined();
    });

    it('should return a valid user', () => {
      const userFromServer = {
        id: '1',
        name: 'Test user'
      };

      const expectedUser = {
        id: 1,
        name: 'Test user'
      };

      const user = createUserFromServer(userFromServer);

      expect(user).toStrictEqual(expectedUser);
    });
  });
});
