import produce, { Draft } from 'immer';
import { createReducer } from 'base';
import { AppState, appInitialState } from '../models';
import { ActionTypes, AppActionType } from '../actionTypes';

const setLanguage = (state: Draft<AppState>, action: AppActionType): AppState =>
  produce(state, draft => {
    // @ts-ignore `lang` is not present in <{}>
    const { lang: langFromServer } = action.payload;
    draft.lang = langFromServer;
  });

const actionHandlers = {
  [ActionTypes.SET_LANGUAGE]: setLanguage
};

export default createReducer(appInitialState, actionHandlers);
