import React from 'react';
import { SizeProvider } from '../../../contexts/SizeContext';
import AppRecommendedItemContainer from './container';
import AppRecommendedItem from './index';
import { mockItem } from './mockData';

const bigIcon = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/3f/dd/74/3fdd7474-cceb-9e2c-cda4-ae827f9d0ef5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-85-220.png/100x100bb.png';

export default {
  title: 'AppRecommendedItem',
  decorators: [storyFn => <SizeProvider>{storyFn()}</SizeProvider>]
};
export const withDefault = () => (
  <AppRecommendedItem
    item={mockItem}
  />
);

export const withDefaultContainer = () => (
  <AppRecommendedItemContainer
    iconSrc={bigIcon}
    label='ProtonVPN——快速安全的 VPN'
    categoryLabel={'工具程式'}
  />
 );
