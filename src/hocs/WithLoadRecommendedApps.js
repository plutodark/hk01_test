import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { configuredFetch } from '../fetch.js';
import { fetchPostsIfNeeded } from '../store/subreddits/actions';

const WithLoadRecommendedApps = (WrappedPage) => {
  const WithLoadingComponent = ({ ...pageProps }) => {
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchFunc = () => configuredFetch('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json').then((result) => result.feed.entry);
      dispatch(fetchPostsIfNeeded('Recommended', fetchFunc));
    }, [dispatch]);
    return <WrappedPage {...pageProps} />;
  };
  return WithLoadingComponent;
}

export default WithLoadRecommendedApps;
