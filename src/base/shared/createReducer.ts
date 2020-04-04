import { Action, ActionHandler } from '../types';

export const createReducer = <T>(initialState: T, actionHandler: ActionHandler<T>) => (
  state = initialState,
  action: Action
): T => {
  const handler = actionHandler[action.type];

  if (!handler) {
    return state;
  }

  return handler(state, action);
};
