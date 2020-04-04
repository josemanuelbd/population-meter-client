import { ActionTypes, AppActionType } from '../actionTypes';

export const setLanguage = (lang: string): AppActionType => ({
  type: ActionTypes.SET_LANGUAGE,
  payload: { lang }
});
