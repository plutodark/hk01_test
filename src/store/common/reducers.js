import { Map } from 'immutable';
import { get } from 'lodash';
import {
  CHANGE_VALUE,
} from './actionTypes';

const reducers = (state, action) => {
  const mapState = Map.isMap(state) ? state : Map({});
  const type = get(action, 'type', '');
  switch (type) {
    case CHANGE_VALUE: {
      const payload = get(action, 'payload', '');
      return mapState.set('search', payload);
    }
    default:
      return mapState;
  }
};

export default reducers;
