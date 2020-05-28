import { changeValue, addPaging, resetPaging } from './actions';
import { CHANGE_VALUE, ADD_PAGING, RESET_PAGING } from './actionTypes';

describe('common', () => {
  describe('actions', () => {
    describe('changeValue', () => {
      it('should return object', () => {
        const payload = 'haha';
        const result = changeValue(payload);
        expect(result).toHaveProperty('type', CHANGE_VALUE);
        expect(result).toHaveProperty('payload', payload);
      });
    });
    describe('addPaging', () => {
      it('should return object', () => {
        const result = addPaging({
          type: ADD_PAGING,
        });
        expect(result).toHaveProperty('type', ADD_PAGING);
      });
    });
    describe('resetPaging', () => {
      it('should return object', () => {
        const result = resetPaging();
        expect(result).toHaveProperty('type', RESET_PAGING);
      });
    });
  });
});
