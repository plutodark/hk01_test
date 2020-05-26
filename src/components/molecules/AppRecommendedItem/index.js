import React, { useContext } from 'react';
import T from 'prop-types';
import _ from 'lodash';
import { SizeContext } from '../../../contexts/SizeContext';
import AppRecommendedItemContainer from './container';
import { getIconSrc } from '../AppListingItem/helper';


const AppRecommendedItem = ({num, item, className }) => {
  const { isTablet, isMobile } = useContext(SizeContext);
  const images = _.get(item, 'im:image', []);
  const iconSrc = getIconSrc(images, isTablet, isMobile);
  const label = _.get(item, 'im:name.label', '');
  const categoryLabel = _.get(item, 'category.attributes.label', '');
  return (
    <AppRecommendedItemContainer
      num={num}
      iconSrc={iconSrc}
      label={label}
      categoryLabel={categoryLabel}
      className={className}
      isMobile={isMobile}
      isTablet={isTablet}
    />
  );
};

AppRecommendedItem.defaultProps = {
  className: '',
  num: 0,
  item: {},
};

AppRecommendedItem.propTypes = {
  num: T.number,
  item: T.object,
  className: T.string,
};

export default AppRecommendedItem;
