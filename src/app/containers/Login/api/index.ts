import { http, envConf } from 'base';
import { createUserFromServer } from '../models';
import { LoggedUser } from '../types';

export const loginRequest = async (): Promise<LoggedUser | undefined> => {
  try {
    const { data } = await http.get(envConf.API.LOGIN_GET);
    return createUserFromServer(data);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
