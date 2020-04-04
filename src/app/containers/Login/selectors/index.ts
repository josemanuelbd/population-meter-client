import { RootState } from 'base/types';

export const getLoginData = ({ login: { isFetching, ...data } }: RootState) => data;

export const isFetchingLogin = ({ login }: RootState) => login.isFetching;
