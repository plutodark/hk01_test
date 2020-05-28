import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import WithLoadAppListing from '../../../hocs/WithLoadAppListing';
import WithLoadAppRating from '../../../hocs/WithLoadAppRating';
import Container from './container';
import { addPaging, addRatingQueue } from '../../../store/common/actions';
import { appListSelector } from './selector';

const AppListing = () => {
  const dispatch = useDispatch();

  const ratingQueue = useSelector((state) => state.getIn(['common', 'ratingQueue']));
  const items = useSelector(appListSelector);
  useEffect(() => {
    _.forEach(items, (obj) => {
      const id = _.get(obj, 'id', 0);
      const userRatingCount = _.get(obj, 'userRatingCountForCurrentVersion', null);
      const foundInRatingQueue = _.findIndex(ratingQueue, {id}) >= 0;
      if (!userRatingCount && !foundInRatingQueue) {
        dispatch(addRatingQueue(id));
      }
    });
  }, [items, dispatch, ratingQueue]);

  const handleReload = () => dispatch(addPaging());
  return (
    <Container items={items} onReload={handleReload} />
  );
};

export default WithLoadAppRating(WithLoadAppListing(AppListing));
