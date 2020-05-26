import React, { useContext } from 'react';
import T from 'prop-types';
import _ from 'lodash';
import { SizeContext } from '../../../contexts/SizeContext';
import AppListingItemContainer from './container';
import { getIconSrc } from './helper';


const AppListingItem = ({num, item, className }) => {
  const { isTablet, isMobile } = useContext(SizeContext);
  const images = _.get(item, 'im:image', []);
  const iconSrc = getIconSrc(images, isTablet, isMobile);
  const label = _.get(item, 'im:name.label', '');
  const categoryLabel = _.get(item, 'category.attributes.label', '');
  const rating = parseFloat(_.get(item, 'averageUserRatingForCurrentVersion', 0));
  const userRatingCount = parseInt(_.get(item, 'userRatingCountForCurrentVersion', 0), 10);
  return (
    <AppListingItemContainer
      num={num}
      iconSrc={iconSrc}
      label={label}
      categoryLabel={categoryLabel}
      rating={rating}
      userRatingCount={userRatingCount}
      className={className}
    />
  );
};

AppListingItem.defaultProps = {
  className: '',
  num: 0,
  item: {},
};

AppListingItem.propTypes = {
  num: T.number,
  item: T.object,
  className: T.string,
};

export default AppListingItem;
