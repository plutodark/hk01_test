import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { configuredFetch } from '../fetch.js';
import { fetchPostsIfNeeded } from '../store/subreddits/actions';

const WithLoadAppListing = (WrappedPage) => {
  const WithLoadingComponent = ({ ...pageProps }) => {
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchFunc = () => configuredFetch('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json').then((result) => {
        return result.feed.entry;
      });
      dispatch(fetchPostsIfNeeded('AppListing', fetchFunc));
    }, [dispatch]);
    return <WrappedPage {...pageProps} />;
  };
  return WithLoadingComponent;
}

export default WithLoadAppListing;
