import Promise from 'bluebird';
import { Map } from 'immutable';
import { requestPosts, receivePosts, fetchPosts, fetchPostsIfNeeded, shouldFetchPosts  }  from './actions';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actionTypes';

const subreddit = 'test';
const subredditMap = Map({[subreddit] : Map({})});
const mockState = Map({ 'subreddits': subredditMap });



const endResult = 'haha';
const dispatch = jest.fn(o => o);
const fetchFunc = jest.fn(() => new Promise((resolve) => resolve(endResult)));
// const fetchFunc = () => new Promise((resolve) => resolve(endResult));
describe('subreddits', () => {
  describe('actions', () => {
    describe('requestPosts', () => {
      const result = requestPosts(subreddit);
      expect(result).toHaveProperty('type', REQUEST_POSTS);
      expect(result).toHaveProperty('subreddit', subreddit);
    });
    describe('receivePosts', () => {
      const json = [{ id: 1 }, { id: 2 }];
      const result = receivePosts(subreddit, json);
      expect(result).toHaveProperty('type', RECEIVE_POSTS);
      expect(result).toHaveProperty('subreddit', subreddit);
      expect(result).toHaveProperty('posts');
    });
    describe('fetchPosts', () => {
      it('should execute the fetchFunc', () => {
        return fetchPosts(subreddit, fetchFunc)(dispatch).then((result) => {
          expect(fetchFunc).toHaveBeenCalled();
          expect(dispatch).toHaveBeenCalled();
          expect(result).toHaveProperty('type', RECEIVE_POSTS);
          expect(result).toHaveProperty('subreddit', subreddit);
          expect(result).toHaveProperty('posts');
        });

      });
    });
    describe('shouldFetchPosts', () => {
      it('should return true if state is empty', () => {
        const result = shouldFetchPosts({}, subreddit);
        expect(result).toBe(true);
      });
      it('should return false if isFetching is true', () => {
        const newState = mockState.setIn(['subreddits', subreddit, 'isFetching'], true);

        const result = shouldFetchPosts(newState, subreddit);
        expect(result).toBe(false);
      });
      it('should return true if posts not map', () => {
        const newState = mockState.setIn(['subreddits', subreddit], {});
        const result = shouldFetchPosts(newState, subreddit);
        expect(result).toBe(true);
      });
      it('should return true if posts is not existed', () => {
        const newState = mockState.setIn(['subreddits', subreddit], null);
        const result = shouldFetchPosts(newState, subreddit);
        expect(result).toBe(true);
      });
    });
  });
});

describe('fetchPostsIfNeeded', () => {
  it('should fetch Posts If items is empty', async () => {
    const getState = () => mockState.setIn(['subreddits', subreddit], null);
    const dispatchFetchPost = await fetchPostsIfNeeded(subreddit, fetchFunc)(dispatch, getState);
    const result = await dispatchFetchPost(dispatch);

    expect(fetchFunc).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
    expect(result).toHaveProperty('type', RECEIVE_POSTS);
    expect(result).toHaveProperty('posts', endResult);
    expect(result).toHaveProperty('subreddit', subreddit);
  });
  it('should not fetch Posts If items isFetching is true', async () => {
    const getState = () => mockState.setIn(['subreddits', subreddit, 'isFetching'], true);
    const dispatchFetchPost = await fetchPostsIfNeeded(subreddit, fetchFunc)(dispatch, getState);
    const result = await dispatchFetchPost(dispatch);
    expect(result).toBe(null);
  });
});
