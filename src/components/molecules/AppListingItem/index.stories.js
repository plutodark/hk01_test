import React from 'react';
import { SizeProvider } from '../../../contexts/SizeContext';
import AppListingItemContainer from './container';
import AppListingItem from './index';
import { mockItem } from './mockData';

const smallIcon = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/3f/dd/74/3fdd7474-cceb-9e2c-cda4-ae827f9d0ef5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-85-220.png/53x53bb.png';
const middleIcon = 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/3f/dd/74/3fdd7474-cceb-9e2c-cda4-ae827f9d0ef5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-85-220.png/75x75bb.png';
const bigIcon = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/3f/dd/74/3fdd7474-cceb-9e2c-cda4-ae827f9d0ef5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-85-220.png/100x100bb.png';

export default {
  title: 'AppListingItem',
  decorators: [storyFn => <SizeProvider>{storyFn()}</SizeProvider>]
};

export const withDefaultContainer = () => (
  <AppListingItemContainer
    num={1}
    iconSrc={bigIcon}
    label='ProtonVPN——快速安全的 VPN'
    categoryLabel={'工具程式'}
    link={'https://apps.apple.com/hk/app/nordvpn-vpn-fast-secure/id905953485?uo=2'}
  />
 );

 export const withEvenContainer = () => (
   <AppListingItemContainer
     num={2}
     iconSrc={bigIcon}
     label='ProtonVPN——快速安全的 VPN'
     categoryLabel={'工具程式'}
     link={'https://apps.apple.com/hk/app/nordvpn-vpn-fast-secure/id905953485?uo=2'}
   />
  );
  export const withTabletContainer = () => (
    <AppListingItemContainer
      num={2}
      iconSrc={middleIcon}
      label='ProtonVPN——快速安全的 VPN'
      categoryLabel={'工具程式'}
      link={'https://apps.apple.com/hk/app/nordvpn-vpn-fast-secure/id905953485?uo=2'}
    />
  );

  export const withMobileContainer = () => (
    <AppListingItemContainer
      num={2}
      iconSrc={smallIcon}
      label='ProtonVPN——快速安全的 VPN'
      categoryLabel={'工具程式'}
      link={'https://apps.apple.com/hk/app/nordvpn-vpn-fast-secure/id905953485?uo=2'}
    />
  );

  export const withDefault = () => (
    <AppListingItem
      num={100}
      item={mockItem}
    />
  );
