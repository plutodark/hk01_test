import { Map } from 'immutable';
import _ from 'lodash';
import {
  CHANGE_VALUE,
  ADD_PAGING,
  RESET_PAGING,
  ADD_RATING_QUEUE,
  UPDATE_RATING_QUEUE,
} from './actionTypes';

const standardPagingCount = 10;
const initialState = Map({
  search: '',
  paging: standardPagingCount,
  ratingQueue: [],
});

const reducers = (state, action) => {
  const mapState = Map.isMap(state) ? state : initialState;
  const type = _.get(action, 'type', '');
  const id = _.get(action, 'id', 0);
  switch (type) {
    case CHANGE_VALUE: {
      const payload = _.get(action, 'payload', '');
      return mapState.set('search', payload);
    }
    case ADD_PAGING: {
      const oldPaging = mapState.get('paging');
      return mapState.set('paging', oldPaging + standardPagingCount);
    }
    case RESET_PAGING: {
      return mapState.set('paging', standardPagingCount);
    }
    case ADD_RATING_QUEUE: {
      const oldRatingQueue = mapState.get('ratingQueue');
      const newRatingQueue = _.concat(oldRatingQueue, { id, isUpdated: false });
      return mapState.set('ratingQueue', newRatingQueue);
    }
    case UPDATE_RATING_QUEUE: {
      const oldRatingQueue = mapState.get('ratingQueue');
      const newRatingQueue = _.map(oldRatingQueue, ( obj) => {
        if(obj.id === id) {
          return _.assign({}, obj, { isUpdated: true });
        }
        return obj;
      });
      return mapState.set('ratingQueue', newRatingQueue);
    }
    default:
      return mapState;
  }
};

export default reducers;
