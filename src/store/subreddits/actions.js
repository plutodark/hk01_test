import Promise from 'bluebird';
import { Map } from 'immutable';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actionTypes';

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit,
});

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json,
});

export const fetchPosts = (subreddit, fetchFunc) => (dispatch) => {
  dispatch(requestPosts(subreddit));
  return fetchFunc()
    .then((json) => dispatch(receivePosts(subreddit, json)));
};

export const shouldFetchPosts = (state, subreddit) => {
  if (!Map.isMap(state)) {
    return true;
  }
  const posts = state.getIn(['subreddits', subreddit]);
  if (!posts) {
    return true;
  }
  if (!Map.isMap(posts)) {
    return true;
  }
  const isFetching = posts.get('isFetching');
  return !isFetching;
};

export const fetchPostsIfNeeded = (subreddit, fetchFunc) => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit, fetchFunc));
  }
  return Promise.resolve(() => null);
};
