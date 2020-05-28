import _ from 'lodash';
import { searchKeyword } from '../RecommendedApps/helper';

export const pagingSelector = (state) => {
  return state.getIn(['common', 'paging']);
};

export const appListSelector = (state) => {
  const listingItems = searchKeyword(state, state.getIn(['subreddits', 'AppListing', 'items']));
  const paging = pagingSelector(state);
  const limitedList = _.chain(listingItems)
    .slice(0, paging)
    .map((obj, index) => {
      const id = _.get(obj, 'id', 0);
      const userRatingObj = state.getIn(['subreddits', id, 'items']);
      if (userRatingObj) {
        return _.assign({}, obj, userRatingObj, { num: index + 1 });
      }
      return _.assign({}, obj, { num: index + 1 })
    })
    .value();
  return limitedList;
}

export const showedItemsSelector = (state, ids) => {
  const normalList = appListSelector(state);
  return _.map(ids, (id, index) => {
    const baseObj = _.find(normalList, { id });
    const foundObj = state.getIn(['subreddits', id, 'items']);
    if(foundObj) {
      return _.assign({}, baseObj, foundObj, { num: index + 1 });
    }
    return null;
  });
};
