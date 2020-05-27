import { Map } from 'immutable';
import { get } from 'lodash';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actionTypes';

export const entityInitialState = Map({
  isFetching: false,
  didInvalidate: false,
  items: [],
  selected: '',
});

const postsBySubreddit = (
  state,
  action,
) => {
  const mapState = Map.isMap(state) ? state : Map({});
  const type = get(action, 'type', '');
  const subreddit = get(action, 'subreddit', '');
  const posts = get(action, 'posts', '');
  switch (type) {
    case REQUEST_POSTS:
      return mapState.setIn([subreddit, 'isFetching'], true);
    case RECEIVE_POSTS: {
      const result = Map({
        isFetching: false,
        items: posts,
      });
      return mapState.set(subreddit, result);
    }
    default:
      return mapState;
  }
};
export default postsBySubreddit;
