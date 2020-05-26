import React from 'react';
import AppListing from '../AppListing';
import RecommendedApps from '../RecommendedApps';
import Spinner from '../../atoms/Spinner';
import SearchInput from '../../atoms/SearchInput';
import './style.scss';

const Layout = ({ appListingItems, recommendedAppItems, isLoading }) => {
  return (
    <div className='layout'>
      <RecommendedApps items={recommendedAppItems} />

      <AppListing items={appListingItems}/>
      <div className={'layout--top'}>
      <SearchInput />
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Layout;
