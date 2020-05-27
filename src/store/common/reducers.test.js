import { Map } from 'immutable';
import reducers from './reducers';
import { CHANGE_VALUE } from './actionTypes';

describe('common', () => {
  describe('reducers', () => {
    describe('changeValue', () => {
      const oldState = Map({});
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
  });
});
