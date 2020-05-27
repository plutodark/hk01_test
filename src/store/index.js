import {
  createStore,
  applyMiddleware,
} from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Map } from 'immutable';

import subreddits from './subreddits/reducers';
import common from './common/reducers';

const composed = composeWithDevTools(applyMiddleware(thunk));
const combinedReducer = combineReducers({
  subreddits,
  common,
});

const initializeStore = (initialState = Map({})) => {
  const refinedInitialState = Map.isMap(initialState) ? initialState : Map(initialState);
  return createStore(
    combinedReducer,
    refinedInitialState,
    composed,
  );
};

export default initializeStore;
