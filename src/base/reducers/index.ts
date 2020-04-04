import { combineReducers } from 'redux';
import app from 'containers/App/reducers';
import login from 'containers/Login/reducers';
// import { combineImmerReducers } from '../shared/combineImmerReducer';

export const rootReducer = combineReducers({
  app,
  login
});
