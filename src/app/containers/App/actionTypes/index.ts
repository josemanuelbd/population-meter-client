import { Action } from '../../../types';

export enum ActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE'
}

type setLanguage = Action<ActionTypes.SET_LANGUAGE>;

export type AppActionType = setLanguage;
