import React, { useEffect } from 'react';
import Promise from 'bluebird';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { configuredFetch } from '../fetch.js';
import { fetchPostsIfNeeded } from '../store/subreddits/actions';
import { updateRatingQueue } from '../store/common/actions';

const WithLoadAppRating = (WrappedPage) => {
  const WithLoadingComponent = ({ ...pageProps }) => {
    const dispatch = useDispatch();
    const ratingQueue = useSelector((state) => state.getIn(['common', 'ratingQueue']));
    useEffect(() => {
      const fetchFunc = (id) => configuredFetch(`https://itunes.apple.com/hk/lookup`, {query: { id }})
        .then((result) => {
          return _.assign({}, result.results[0], { id });
        }).catch((e) => console.log(e));
      if(!_.isEmpty(ratingQueue)) {
        Promise.map(ratingQueue, (queueItem) => {
          const id = queueItem.id;
          if (!queueItem.isUpdated) {
          dispatch(fetchPostsIfNeeded(id, () => fetchFunc(id)))
            .then(() => {
              dispatch(updateRatingQueue(id));
            });
          }
        });
      }
    }, [ratingQueue, dispatch]);
    return <WrappedPage {...pageProps} />;
  };
  return WithLoadingComponent;
}

export default WithLoadAppRating;
