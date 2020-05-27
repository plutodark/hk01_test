import {
  CHANGE_VALUE,
} from './actionTypes';

export const changeValue = (payload) => ({
  type: CHANGE_VALUE,
  payload,
});
