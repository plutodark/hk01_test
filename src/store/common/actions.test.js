import {
  changeValue,
  addPaging,
  resetPaging,
  addRatingQueue,
  updateRatingQueue,
} from './actions';
import {
  CHANGE_VALUE,
  ADD_PAGING,
  RESET_PAGING,
  ADD_RATING_QUEUE,
  UPDATE_RATING_QUEUE,
} from './actionTypes';

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
    describe('addRatingQueue', () => {
      it('should return object', () => {
        const id = "123";
        const result = addRatingQueue(id);
        expect(result).toHaveProperty('type', ADD_RATING_QUEUE);
        expect(result).toHaveProperty('id', id);
      });
    });
    describe('updateRatingQueue', () => {
      it('should return object', () => {
        const id = "123";
        const result = updateRatingQueue(id);
        expect(result).toHaveProperty('type', UPDATE_RATING_QUEUE);
        expect(result).toHaveProperty('id', id);
      });
    });
  });
});
