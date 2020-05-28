import { Map } from 'immutable';
import _ from 'lodash';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actionTypes';

export const getId = (appItem) => {
  const id = _.get(appItem, 'id.attributes["im:id"]', 0);
  if(!id) {
    return _.get(appItem, 'id', 0);
  }
  return id;
}
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
  const mapState = Map.isMap(state) ? state : Map({ fetchingList: [] });
  const type = _.get(action, 'type', '');
  const subreddit = _.get(action, 'subreddit', '');
  const posts = _.get(action, 'posts', '');
  const fetchingList = mapState.get('fetchingList');
  switch (type) {
    case REQUEST_POSTS:
      const newFetchingList = _.concat(fetchingList, subreddit);
      return mapState.setIn([subreddit, 'isFetching'], true).set('fetchingList', newFetchingList);
    case RECEIVE_POSTS: {
      const items = Array.isArray(posts) ? _.map(posts, (obj) => {
        const id = getId(obj);
        return _.assign({}, obj, { id });
      }) : posts;
      const newFetchingList = _.reduce(fetchingList, (result, listItem) => {
        if (subreddit === listItem) {
          return result;
        }
        return _.concat(result, listItem);
      }, []);
      const result = { isFetching: false, items };
      return mapState.set(subreddit, result).set('fetchingList', newFetchingList);
    }
    default:
      return mapState;
  }
};
export default postsBySubreddit;
