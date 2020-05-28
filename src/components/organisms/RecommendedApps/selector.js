import { searchKeyword } from './helper';

const appListingSelector = (state) => {
  const listingItems = state.getIn(['subreddits', 'Recommended', 'items']);
  return searchKeyword(state, listingItems);
}

export default appListingSelector;
