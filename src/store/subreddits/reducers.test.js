import { Map } from 'immutable';
import reducers from './reducers';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actionTypes';

const oldState = Map({
  test: Map({})
});
const subreddit = 'test';
describe('subreddits', () => {
  describe('reducers', () => {
    it('should request posts', () => {
      const action = {
        type: REQUEST_POSTS,
        subreddit
      };
      const result = reducers(oldState, action);
      expect(result.getIn([subreddit, 'isFetching'])).toBeTruthy();
    });
    it('should receive posts', () => {
      const initialState = oldState.setIn([subreddit, 'isFetching'], true);
      const sampleData = 'ha';
      const action = {
        type: RECEIVE_POSTS,
        subreddit,
        posts: sampleData,
      };
      const result = reducers(initialState, action);
      expect(result.getIn([subreddit, 'isFetching'])).toBeFalsy();
      expect(result.getIn([subreddit, 'didInvalidate'])).toBeFalsy();
      expect(result.getIn([subreddit, 'items'])).toBe(sampleData);
    });
    it('should return same state if type not related', () => {
      const action = {
        type: 'something',
        subreddit,
      };
      const result = reducers(oldState, action);
      expect(result.equals(oldState)).toBeTruthy();
    });
    it('should return Map if state is empty', () => {
      const action = {
        type: 'something',
        subreddit,
      };
      const result = reducers(null, action);
      expect(Map.isMap(result)).toBeTruthy();
    });
  });
});
