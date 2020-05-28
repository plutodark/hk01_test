import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppListing from '../AppListing';
import RecommendedApps from '../RecommendedApps';
import Spinner from '../../atoms/Spinner';
import SearchInput from '../../atoms/SearchInput';
import './style.scss';

const Layout = () => {
  const isLoading = useSelector(state => state.getIn(['subreddits', 'fetchingList'])).length > 0;
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);
  return (
    <div className='layout'>
      <RecommendedApps  />

      <AppListing />
      <div className={'layout--top'}>
      <SearchInput />
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Layout;
