import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

export const useLoginRequest = (): void => {
  const dispatch = useDispatch();
  useEffect((): void => {
    dispatch(actions.loginRequest());
  }, []);
};
