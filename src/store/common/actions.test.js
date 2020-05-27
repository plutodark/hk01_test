import { changeValue } from './actions';
import { CHANGE_VALUE } from './actionTypes';

describe('common', () => {
  describe('actions', () => {
    describe('changeValue', () => {
      it('should return object', () => {
        const payload = 'haha';
        const result = changeValue({
          type: CHANGE_VALUE,
          payload,
        });
        expect(result).toHaveProperty('type', CHANGE_VALUE);
        expect(result).toHaveProperty('payload');
      });
    });
  });
});
