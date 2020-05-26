import React from 'react';
import _ from 'lodash';
import { action } from '@storybook/addon-actions';
import { SizeProvider } from '../../../contexts/SizeContext';
import AppListingContainer from './container';
import AppListing from './index';
import { mockItems } from './mockData';

export default {
  title: 'AppListing',
  decorators: [storyFn => <SizeProvider>{storyFn()}</SizeProvider>]
};

const items = _.times(10, (index) => {
  const o = mockItems[index];
  return _.assign({}, o, { num: index + 1, averageUserRatingForCurrentVersion: 3.4, userRatingCountForCurrentVersion: 40 });
});
export const withDefaultContainer = () => (
  <AppListingContainer
    items={items}
    onReload={action('reload')}
  />
 );
 export const withIsLoading = () => (
   <AppListingContainer
     items={items}
     isLoading
   />
  );
 export const withEmptyContainer = () => (
   <AppListingContainer
     items={[]}
   />
  );
 // export const withDefault = () => (
 //   <AppListing
 //     items={mockItems}
 //   />
 // );
