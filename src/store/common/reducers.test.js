import { Map } from 'immutable';
import reducers from './reducers';
import {
  CHANGE_VALUE,
  ADD_PAGING,
  RESET_PAGING,
  ADD_RATING_QUEUE,
  UPDATE_RATING_QUEUE,
} from './actionTypes';

describe('common', () => {
  describe('reducers', () => {
    describe('changeValue', () => {
      const oldState = Map({ search : '', paging: 10,  });
      const payload = 'haha';
      it('should return object', () => {
        const action = {
          type: CHANGE_VALUE,
          payload,
        };
        const result = reducers(oldState, action);
        expect(result.getIn(['search'])).toBe(payload);
      });
      it('should return same state if type not related', () => {
        const action = {
          type: 'something',
          payload,
        };
        const result = reducers(oldState, action);
        expect(result.equals(oldState)).toBeTruthy();
      });
      it('should return Map if state is empty', () => {
        const action = {
          type: 'something',
          payload,
        };
        const result = reducers(null, action);
        expect(Map.isMap(result)).toBeTruthy();
      });
    });
    describe('addPaging', () => {
      const oldState = Map({ search : '', paging: 10 });
      it('should add paging to 20', () => {
        const action = {
          type: ADD_PAGING,
        };
        const result = reducers(oldState, action);
        expect(result.getIn(['paging'])).toBe(20);
      });
    });
    describe('resetPaging', () => {
      const oldState = Map({ search : '', paging: 100 });
      it('should add paging to 20', () => {
        const action = {
          type: RESET_PAGING,
        };
        const result = reducers(oldState, action);
        expect(result.getIn(['paging'])).toBe(10);
      });
    });
    describe('addRatingQueue', () => {
      const oldState = Map({ search : '', paging: 100, ratingQueue: [] });
      it('should add paging to 20', () => {
        const id = "123";
        const action = {
          type: ADD_RATING_QUEUE,
          id,
        };
        const result = reducers(oldState, action);
        const testObj = result.getIn(['ratingQueue'])[0];
        expect(testObj).toHaveProperty('id', id);
        expect(testObj).toHaveProperty('isUpdated', false);
      });
    });
    describe('updateRatingQueue', () => {
      const id = '123';
      const oldState = Map({ search : '', paging: 100, ratingQueue: [{ id, isUpdated: false }] });
      it('should add paging to 20', () => {
        const action = {
          type: UPDATE_RATING_QUEUE,
          id,
        };
        const result = reducers(oldState, action);
        const testObj = result.getIn(['ratingQueue'])[0];
        expect(testObj).toHaveProperty('id', id);
        expect(testObj).toHaveProperty('isUpdated', true);
      });
    });
  });
});
