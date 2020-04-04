import { RootState } from 'base/types';

export const getAppLanguage = ({ app }: RootState) => app.lang;