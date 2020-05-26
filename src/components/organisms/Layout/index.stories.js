import React from 'react';
import _ from 'lodash';
import { SizeProvider } from '../../../contexts/SizeContext';
import Layout from './index';
import { mockItems as rawAppListingItems } from '../AppListing/mockData';
import { mockItems as recommendedAppItems } from '../RecommendedApps/mockData';

export default {
  title: 'Layout',
  decorators: [storyFn => <SizeProvider>{storyFn()}</SizeProvider>]
};

const appListingItems = _.times(10, (index) => {
  const o = rawAppListingItems[index];
  return _.assign({}, o, { num: index + 1, averageUserRatingForCurrentVersion: 3.4, userRatingCountForCurrentVersion: 40 });
});
export const withDefault = () => (
  <Layout
    appListingItems={appListingItems}
    recommendedAppItems={recommendedAppItems}
  />
 );
 export const withIsLoading = () => (
   <Layout
     appListingItems={appListingItems}
     recommendedAppItems={recommendedAppItems}
     isLoading
   />
  );
 export const withEmpty = () => (
   <Layout

   />
  );
