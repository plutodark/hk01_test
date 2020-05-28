import {
  CHANGE_VALUE,
  ADD_PAGING,
  RESET_PAGING,
  ADD_RATING_QUEUE,
  UPDATE_RATING_QUEUE,
} from './actionTypes';

export const changeValue = (payload) => ({
  type: CHANGE_VALUE,
  payload,
});

export const addPaging = () => ({
  type: ADD_PAGING,
});

export const resetPaging = () => ({
  type: RESET_PAGING,
});

export const addRatingQueue = (id) => ({
  type: ADD_RATING_QUEUE,
  id,
});

export const updateRatingQueue = (id) => ({
  type: UPDATE_RATING_QUEUE,
  id,
});
