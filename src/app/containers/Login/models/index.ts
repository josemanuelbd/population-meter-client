import { LoginState, UserFromServer, LoggedUser } from '../types';

export const loginInitialState: LoginState = {
  id: -1,
  name: 'Default Text',
  isFetching: false
};

export const createUserFromServer = ({ id, name }: UserFromServer): LoggedUser | undefined => {
  if (typeof id === 'undefined' || typeof name === 'undefined') {
    console.error('Error creating user model, some of mandatory properties is missing', { id, name });

    return undefined;
  }

  return {
    id: Number(id),
    name: String(name)
  };
};
