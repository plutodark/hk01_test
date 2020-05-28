import React from 'react';
import { SizeProvider } from '../../../contexts/SizeContext';
import RecommendedAppsContainer from './container';
import { mockItems } from './mockData';

export default {
  title: 'RecommendedApps',
  decorators: [storyFn => <SizeProvider>{storyFn()}</SizeProvider>]
};

export const withDefaultContainer = () => (
  <RecommendedAppsContainer
    items={mockItems}
  />
 );
 export const withEmptyContainer = () => (
   <RecommendedAppsContainer
     items={[]}
   />
  );
